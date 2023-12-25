const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const convertDate = (date) => {
    return new Date(date).toLocaleDateString("en-EN", options);
}