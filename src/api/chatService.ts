import axios from 'axios';

const API_URL = 'https://api.voiceflow.com/v1/flows/66e99e5ba239f3c177e58413/interact'; // Replace with Voiceflow API URL
const API_KEY = 'VF.DM.66e9e3423d4512611381c991.0X0Kt5iehWyBCzqA'; // Replace with your API key

export const sendMessage = async (message: any) => {
    try {
        const response = await axios.post(API_URL, {
            message,
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};