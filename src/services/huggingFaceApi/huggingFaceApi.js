import axios from "axios";
import stringSimilarity from "string-similarity";
import huggingFaceData from "./huggingFace.json";

const API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
// eslint-disable-next-line no-undef
const API_KEY = process.env.API_KEY; //Need the APIKEY: just go to huggingface to chech the token 

export const fetchHuggingFaceResponse = async (question) => {
    try {
        const lowerQuestion = (question || '').toLowerCase().trim();

        const predefinedKeys = Object.keys(huggingFaceData);
        const bestMatch = stringSimilarity.findBestMatch(lowerQuestion, predefinedKeys);

        if (bestMatch.bestMatch.rating > 0.7) {
            const matchedResponse = huggingFaceData[bestMatch.bestMatch.target];
            console.log('Predefined Response:', matchedResponse);
            return (matchedResponse || '').trim();
        }

        const context = JSON.stringify(huggingFaceData);
        const prompt = `Answer the question in a factual and objective way, avoiding personal opinions or stories. Use only the information provided in the following context to answer the question.\nContext: ${context}\nQuestion: ${question}\nAnswer:`;

        const response = await axios.post(
            API_URL,
            { inputs: prompt },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );

        const generatedText = response.data?.[0]?.generated_text || response.data?.generated_text || response.data || '';
        const cleanedResponse = (typeof generatedText === 'string' ? generatedText : '').trim();
        console.log('API Response:', response.data); // Keep this for debugging
        console.log('Cleaned Response:', cleanedResponse);
        return cleanedResponse || "Sorry, I don't have an answer for that. Try another question.😊";

    } catch (error) {
        console.error('Error fetching Hugging Response:', error);
        return 'An error occurred while fetching the answer.';
    }
};