//booking slots at the Little Lemon
const availableTimes = [
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
];
const sortTimes = (a, b) => {
    return a.slice(0, 2) - b.slice(0, 2);
}
//helper function to emulate server data randomly
const getRandomAvailableTimes = () => {
    //generates a number between 0 and 8 - per number of options
    const randomNumOfOptions = Math.floor(Math.random() * 9);
    //shuffles options
    const shuffledTimes = [...availableTimes].sort(() => 0.5 - Math.random());
    //gets random unique options 
    const randomTimes = new Set(shuffledTimes.slice(0, randomNumOfOptions));
    const randomAvailableTimes = [...randomTimes].sort(sortTimes);

    return randomAvailableTimes;
}
//returns an object with data that should come from server but don't 
const createFakeData = () => {
    //creates an array with next ten dates
    const dates = Array.from({ length: 10 }, (_, v) => {
        const date = new Date();
        const n = v + 1;
        date.setDate(date.getDate() + n);
        //converts the format of the date to match datepicker from the form
        return date.toISOString().slice(0, 10);
    });
    //returns an object with next ten days and randomly chosen available times
    const fakeData = dates.reduce((o, key) => ({ ...o, [key]: getRandomAvailableTimes() }), {});
    return fakeData;
}

const availableTimesByDate = createFakeData();

const getTimesByDate = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (availableTimesByDate[date]) {
                resolve(availableTimesByDate[date])
            }
            else {
                reject(new Error('There are no booking slots for this date'));
            }
        },
            // simulate the response time of a real API call
            Math.random() * 1000)
    })
}


export const fetchFakeAPI = async (date) => {
    try {
        const result = await getTimesByDate(date);
        return result;
    } catch (error) {
        console.log(error);
    }
};
