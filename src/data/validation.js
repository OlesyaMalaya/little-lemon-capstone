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
        required: "Date is required to book a table",
        validate: checkDate,
    },
    time: {
        required: "Time is required to book a table",
        validate: (value) =>
            value !== "No tables available" ||
            "All the tables for this day are booked. Please choose another date",
    },
    guests: {
        required: "Number of guests is required to book a table",
        min: {
            value: 1,
            message: "Minimum number of guests needed to reserve a table is 1",
        },
        max: {
            value: 10,
            message: "Maximum number of guests we can host at a time is 10",
        },
    },
    name: { required: "Name is required to book a table" },
    email: {
        required: "Email is required to book a table",
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