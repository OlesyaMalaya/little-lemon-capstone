import { initialDate, mockDate } from "./dates";

export const mockTimeSlotsbyDays = [
    { day: initialDate, bookingSlots: ["12:00", "13:00"] },
    { day: mockDate, bookingSlots: ["14:00", "15:00"] },
];

export const mockFormData = {
    date: mockDate,
    time: "14:00",
    guests: "2",
    occasion: "Birthday",
    name: "John",
    email: "john.doe@email.com",
    comment: "Thank you!"
}