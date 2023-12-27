import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../../components/Forms/BookingForm";
import { mockTimeSlotsbyDays } from "../../data/mocks";

describe("Booking Form Time Validation", () => {
  test("An error message doesn't appear when the user picks a valid timeslot", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const dateField = screen.getByLabelText(/choose date/i);
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, {
      target: { value: mockTimeSlotsbyDays[0].day },
    });
    const timeField = await screen.findByLabelText(/choose time/i);
    expect(timeField).toBeInTheDocument();
    fireEvent.change(timeField, {
      target: { value: mockTimeSlotsbyDays[0].bookingSlots[0] },
    });
    fireEvent.blur(timeField);
    await waitFor(() => {
      const errorMessage = screen.queryByText(/Time is required/i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  test("An error message appears when the user touches the time field but doesn't pick a timeslot", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const dateField = screen.getByLabelText(/choose date/i);
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, {
      target: { value: mockTimeSlotsbyDays[0].day },
    });
    const timeField = await screen.findByLabelText(/choose time/i);
    expect(timeField).toBeInTheDocument();
    fireEvent.change(timeField, { target: { value: "" } });
    fireEvent.blur(timeField);
    await waitFor(() => {
      const errorMessage = screen.getByText(/Time is required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("An error message appears when the user picks a date when all tables are booked out", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const dateField = screen.getByLabelText(/choose date/i);
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, {
      target: { value: mockTimeSlotsbyDays[2].day },
    });
    const timeField = await screen.findByLabelText(/choose time/i);
    expect(timeField).toBeInTheDocument();
    fireEvent.change(timeField, { target: { value: "No tables available" } });
    fireEvent.blur(timeField);
    await waitFor(() => {
      const errorMessage = screen.getByText(
        /All the tables for this day are booked. Please choose another date/i
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
