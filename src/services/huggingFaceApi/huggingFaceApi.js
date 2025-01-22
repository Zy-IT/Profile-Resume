import axios from "axios";
import stringSimilarity from "string-similarity";
import huggingFaceData from "./huggingFace.json";

const API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
const API_KEY = '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';

export const fetchHuggingFaceResponse = async (question) => {

    try {
        const lowerQuestion = question.toLowerCase().trim();

        const predefinedKeys = Object.keys(huggingFaceData);

        const bestMatch = stringSimilarity.findBestMatch(lowerQuestion, predefinedKeys);

        if (bestMatch.bestMatch.rating > 0.6) { // Adjust the threshold (e.g., 0.6) based on your needs
            return huggingFaceData[bestMatch.bestMatch.target];
        }

        const response = await axios.post(
            API_URL,
            { inputs: question },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${API_KEY}`,
                }
            }
        );

        return response.data.generated_text || "Sorry i dont have any answer for that, try another question. 😊";
    } catch (error) {
        console.error('Error fetching Hugging Response:', error);
        return 'An error occurred while fetching the answer.';
    }
};
