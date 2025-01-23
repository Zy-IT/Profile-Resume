import { useState, useEffect } from "react";
import { fetchHuggingFaceResponse } from "../../services/huggingFaceApi/huggingFaceApi";
import stringSimilarity from "string-similarity";
import navigationRoutes from "./navigationRoutes.json"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";

const TYPING_SPEED = 50;

export const useHuggingFaceChat = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [displayedAnswer, setDisplayedAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let typingInterval; 

    useEffect(() => {
        return () => {
            setDisplayedAnswer('');
            setAnswer('');
            setLoading(false);
            if (typingInterval) clearInterval(typingInterval); // Clear interval
        };
    }, []);

    const simulateTyping = (text, onCharacterTyped) => {
        const safeText = String(text || '').trim();
        let index = 0;

        typingInterval = setInterval(() => { // Assign to variable
            if (index < safeText.length) {
                onCharacterTyped(safeText[index]);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, TYPING_SPEED);
        return typingInterval;
    };

    const autoClearMessage = () => {
        const clearDelay = 20000;
        return setTimeout(() => {
            setDisplayedAnswer('');
            setAnswer('');
        }, clearDelay);
    };

    const handleQuestion = async () => {
        if (!question?.trim()) return;
        setLoading(true);
        setDisplayedAnswer('');
        setAnswer('');

        const lowerQuestion = question.toLowerCase().trim();

        const keys = Object.keys(navigationRoutes);
        const bestMatch = stringSimilarity.findBestMatch(lowerQuestion, keys);

        if (bestMatch.bestMatch.rating > 0.6) {
            const matchedKey = bestMatch.bestMatch.target;
            const navigatingMessage = "Sure, wait a second please...";
            setAnswer(navigatingMessage);
            simulateTyping(navigatingMessage, (char) => setDisplayedAnswer(prev => (prev || '') + char));

            setTimeout(() => {
                navigate(navigationRoutes[matchedKey]);
                const navigatingResponse = "Navigating...";
                setAnswer(navigatingResponse);
                simulateTyping(navigatingResponse, (char) => setDisplayedAnswer(prev => (prev || '') + char));

                setTimeout(() => {
                    autoClearMessage();
                }, navigatingResponse.length * TYPING_SPEED);
            }, 3500);

            setLoading(false);
            return;
        }

        try {
            const apiResponse = await fetchHuggingFaceResponse(question);
            const validResponse = apiResponse && typeof apiResponse === 'string' && apiResponse.trim() !== ''
                ? apiResponse.trim()
                : "Sorry, I don't have an answer for that. Try another question.😊";

            setAnswer(validResponse);
            simulateTyping(validResponse, (char) => setDisplayedAnswer(prev => (prev || '') + char));

            setTimeout(() => {
                autoClearMessage();
            }, validResponse.length * TYPING_SPEED);

        } catch (error) {
            console.error('Error fetching response:', error);
            const errorMessage = 'An error occurred while fetching the answer.';
            setAnswer(errorMessage);
            simulateTyping(errorMessage, (char) => setDisplayedAnswer(prev => (prev || '') + char));
            setTimeout(() => {
                autoClearMessage();
            }, errorMessage.length * TYPING_SPEED);
        } finally {
            setLoading(false);
        }
    };

    return {
        question,
        setQuestion,
        answer,
        displayedAnswer,
        loading,
        handleQuestion,
    };
};