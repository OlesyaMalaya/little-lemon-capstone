const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
// converts date from a'2023-12-30' format to  a "Saturday, December 30, 2023" format
export const convertDate = (date) => {
    return new Date(date).toLocaleDateString("en-EN", options);
}