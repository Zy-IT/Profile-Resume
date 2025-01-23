import axios from "axios";
import stringSimilarity from "string-similarity";
import huggingFaceData from "./huggingFace.json";

const API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
// eslint-disable-next-line no-undef
const API_KEY = process.env.API_KEY; //Need the APIKEY: just go to huggingface to chech the token 

export const fetchHuggingFaceResponse = async (question) => {
    try {
        const lowerQuestion = question.toLowerCase().trim();

        const predefinedKeys = Object.keys(huggingFaceData);
        const bestMatch = stringSimilarity.findBestMatch(lowerQuestion, predefinedKeys);

        if (bestMatch.bestMatch.rating > 0.6) {
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

        const generatedText = response.data.generated_text;

        return generatedText && generatedText.trim() !== ''
            ? generatedText
            : " Sorry, I don't have any answer for that. Try another question.😊 ";

    } catch (error) {
        console.error('Error fetching Hugging Response:', error);
        return 'An error occurred while fetching the answer.';
    }
};
