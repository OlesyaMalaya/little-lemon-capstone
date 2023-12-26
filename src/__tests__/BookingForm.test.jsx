import { render, screen } from "@testing-library/react";
import BookingForm from "../components/Forms/BookingForm";
import { mockTimeSlotsbyDays } from "../data/mocks";

const mockSubmit = () => true;

describe("Booking Form", () => {
  //Test for some static text being rendered in the BookingForm component
  test("Date label renders successfully", () => {
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const labelElement = screen.getByLabelText(/choose date/i);
    expect(labelElement).toBeInTheDocument();
  });
});
