import { useState } from "react";
import { fetchHuggingFaceResponse } from "../../services/huggingFaceApi/huggingFaceApi";
import stringSimilarity from "string-similarity";
import navigationRoutes from "./navigationRoutes.json";
import { useNavigate } from "react-router-dom";

export const useHuggingFaceChat = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [displayedAnswer, setDisplayedAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const simulateTyping = (text) => {
        setDisplayedAnswer(''); 
        const characters = Array.from(text); 
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < characters.length) {
                setDisplayedAnswer((prev) => prev + characters[index]); 
                index++;
            } else {
                clearInterval(typingInterval); 
            }
        }, 50);
    };

    const autoClearMessage = () => {
        setTimeout(() => {
            setDisplayedAnswer('');
            setAnswer(''); 
        }, 8000); // Auto-clear after 8 seconds
    };

    const handleQuestion = async () => {
        if (!question.trim()) return;
        setLoading(true);
        setDisplayedAnswer('');
        setAnswer('');

        const lowerQuestion = question.toLowerCase().trim();

        // Check navigation routes
        const keys = Object.keys(navigationRoutes);
        const bestMatch = stringSimilarity.findBestMatch(lowerQuestion, keys);

        if (bestMatch.bestMatch.rating > 0.6) {
            const matchedKey = bestMatch.bestMatch.target;
            const navigatingMessage = "Sure, wait a second please...";
            setAnswer(navigatingMessage);
            simulateTyping(navigatingMessage);

            setTimeout(() => {
                navigate(navigationRoutes[matchedKey]);
                const navigatingResponse = "Navigating...";
                setAnswer(navigatingResponse);
                simulateTyping(navigatingResponse);
                autoClearMessage();
            }, 3500);

            setLoading(false);
            return;
        }

        try {
            const apiResponse = await fetchHuggingFaceResponse(question);
            const validResponse = apiResponse || " Sorry, I don't have any answer for that. Try another question.😊 ";
            setAnswer(validResponse);
            simulateTyping(validResponse); 
            autoClearMessage(); 
        } catch (error) {
            console.error('Error fetching response:', error);
            const errorMessage = 'An error occurred while fetching the answer.';
            setAnswer(errorMessage);
            simulateTyping(errorMessage); 
            autoClearMessage(); 
        } finally {
            setLoading(false);
        }
    };

    return {
        question,
        setQuestion,
        answer,
        displayedAnswer, // For rendering the typing effect
        loading,
        handleQuestion,
    };
};
