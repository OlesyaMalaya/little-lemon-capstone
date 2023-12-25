
import { createFakeData } from "../utils/createFakeData";
const availableTimesByDate = createFakeData();

const getAvailableTimes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (availableTimesByDate) {
                resolve(availableTimesByDate)
            }
            else {
                reject(new Error('There are no booking slots for this date'));
            }
        },
            Math.random() * 1000); // simulate the response time of a real API call
    })
}


export const fakeFetchAPI = async () => {
    try {
        const result = await getAvailableTimes();
        return result;
    } catch (error) {
        console.log(error);
    }
};

const simulateSubmission = (formData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (formData) {
                resolve(true); // Simulate successful submission
            } else {
                reject(new Error('Form submission failed.'));
            }
        }, Math.random() * 1000); // simulate the response time of a real API call
    });
};

export const fakeSubmitAPI = async (formData) => {
    try {
        const result = await simulateSubmission(formData);
        return result;
    } catch (error) {
        console.log(error);
    }
};