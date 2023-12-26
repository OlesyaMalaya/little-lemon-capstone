export const updateTimes = (date, timesArray) => {
    return timesArray
        .filter((timeSlots) => timeSlots.day === date)
        .map((day) => day.bookingSlots)[0];
};