import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../../components/Forms/BookingForm";
import { mockTimeSlotsbyDays } from "../../data/mocks";
import { mockEarlyDate, mockLateDate, mockDate } from "../../data/dates";

describe("Booking Form Date Validation", () => {
  test("An error message doesn't appear when the user picks a valid date", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const dateField = screen.getByLabelText(/choose date/i);
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, { target: { value: mockDate } });
    fireEvent.blur(dateField);
    await waitFor(() => {
      const errorMessage = screen.queryByText(/Date is required/i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  test("An error message appears when the user touches the date field but doesn't pick a date", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const dateField = screen.getByLabelText(/choose date/i);
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, { target: { value: "" } });
    fireEvent.blur(dateField);
    await waitFor(() => {
      const errorMessage = screen.getByText(/Date is required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("An error message appears when the user picks a date before the next day", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const dateField = screen.getByLabelText(/choose date/i);
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, { target: { value: mockEarlyDate } });
    fireEvent.blur(dateField);
    await waitFor(() => {
      const errorMessage = screen.getByText(
        /we take reservations at least a day in advance/i
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("An error message appears when the user picks a date after the next 10 days", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const dateField = screen.getByLabelText(/choose date/i);
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, { target: { value: mockLateDate } });
    fireEvent.blur(dateField);
    await waitFor(() => {
      const errorMessage = screen.getByText(
        /we take reservations only for the next 10 days/i
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
