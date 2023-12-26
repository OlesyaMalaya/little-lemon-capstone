import { render, screen } from "@testing-library/react";
import BookingForm from "../components/Forms/BookingForm";
import { mockDate, initialDate } from "../data/dates";

const mockSubmit = () => true;
const mockTimes = [
  { day: initialDate, bookingSlots: ["13:00"] },
  { day: mockDate, bookingSlots: ["12:00"] },
];

describe("Booking Form", () => {
  //Test for some static text being rendered in the BookingForm component
  test("Date label renders successfully", () => {
    render(<BookingForm submit={mockSubmit} times={mockTimes} />);
    const labelElement = screen.getByLabelText(/choose date/i);
    expect(labelElement).toBeInTheDocument();
  });
});
