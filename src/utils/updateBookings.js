export const updateBookings = (data, date, time) => {
    const changedDayIndex = data.findIndex((item) => item.day === date);
    const updatedTimes = [...data];
    updatedTimes[changedDayIndex].bookingSlots = updatedTimes[
        changedDayIndex
    ].bookingSlots.filter((slot) => slot !== time);
    return updatedTimes;
};