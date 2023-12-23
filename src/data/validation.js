const checkDate = (value) => {
    const selectedDate = Date.parse(value);
    const today = new Date()
    const lastDate = new Date()
    lastDate.setDate(lastDate.getDate() + 10);
    const isAfterToday = selectedDate > today;
    const isInNextTenDays = selectedDate < lastDate;
    const errorMessage = isAfterToday ? "We take reservations only for the next 10 days" : "We take reservations at least a day in advance";
    return (isAfterToday && isInNextTenDays) || errorMessage;
}

export const validationConfig = {
    date: {
        required: "Date is required",
        validate: checkDate,
    },
    time: {
        required: "Time is required",
        validate: (value) =>
            value !== "No tables available" ||
            "Sorry, all the tables for this time are booked. Please, choose another date",
    },
    guests: {
        required: "Number is required",
        min: {
            value: 1,
            message: "Minimum number of guests needed to reserve a table is 1",
        },
        max: {
            value: 10,
            message: "Maximum number of guests we can host at a time is 10",
        },
    },
    name: { required: "Name is required" },
    email: {
        required: "Email is required",
        pattern: {
            value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email",
        },
    },
    comment: {
        maxLength: {
            value: 100,
            message: "Comment cannot be longer than 100 characters",
        },
    },
};