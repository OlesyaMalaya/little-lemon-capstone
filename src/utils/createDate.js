//creates a date in a date formfield format ('2023-12-30')
export const createDate = (num, timeline) => {
    const date = new Date();
    const timeJump = timeline === "future" ? parseInt(num) : parseInt(num) * (-1);
    //sets the date for a num days in the future or in the past
    date.setDate(date.getDate() + timeJump);
    return date.toISOString().slice(0, 10);
}