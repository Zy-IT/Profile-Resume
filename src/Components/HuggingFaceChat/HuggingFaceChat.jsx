import { useState } from "react";
import { fetchHuggingFaceResponse } from "../../services/huggingFaceApi/huggingFaceApi";
import stringSimilarity from "string-similarity";
import navigationRoutes from "./navigationRoutes.json";
import { useNavigate } from "react-router-dom";

export const useHuggingFaceChat = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleQuestion = async () => {
        if (!question.trim()) return;
        setLoading(true);
        setAnswer('');

        const lowerQuestion = question.toLowerCase().trim();

        // Check navigation routes
        const keys = Object.keys(navigationRoutes);
        const bestMatch = stringSimilarity.findBestMatch(lowerQuestion, keys);

        if (bestMatch.bestMatch.rating > 0.6) {
            const matchedKey = bestMatch.bestMatch.target;
            setAnswer("Sure, wait a second please...");

            setTimeout(() => {
                navigate(navigationRoutes[matchedKey]);

                setAnswer("Navigating...");

            }, 3500); 

            setLoading(false); 
            return;
        }

        // Fetch from Hugging Face API
        try {
            const apiResponse = await fetchHuggingFaceResponse(question);
            setAnswer(apiResponse);
        } catch (error) {
            console.error('Error fetching response:', error);
            setAnswer('An error occurred while fetching the answer.');
        } finally {
            setLoading(false);
        }
    };

    return {
        question,
        setQuestion,
        answer,
        loading,
        handleQuestion,
    };
};
