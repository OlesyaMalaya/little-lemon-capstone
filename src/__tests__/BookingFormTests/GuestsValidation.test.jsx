import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../../components/Forms/BookingForm";
import { mockTimeSlotsbyDays } from "../../data/mocks";

describe("Booking Form Number of Guests Validation", () => {
  test("An error message doesn't appear when the user picks a valid number of guests", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const guestsField = screen.getByLabelText(/Number of guests/i);
    expect(guestsField).toBeInTheDocument();
    fireEvent.change(guestsField, { target: { value: "4" } });
    fireEvent.blur(guestsField);
    await waitFor(() => {
      const errorMessage = screen.queryByText(/Number of guests is required/i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  test("An error message appears when the user touches the guests field but doesn't supply a number of guests", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const guestsField = screen.getByLabelText(/Number of guests/i);
    expect(guestsField).toBeInTheDocument();
    fireEvent.change(guestsField, { target: { value: "" } });
    fireEvent.blur(guestsField);
    await waitFor(() => {
      const errorMessage = screen.getByText(/Number of guests is required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("An error message appears when the user picks a number of guests less than 1", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const guestsField = screen.getByLabelText(/Number of guests/i);
    expect(guestsField).toBeInTheDocument();
    fireEvent.change(guestsField, { target: { value: "0" } });
    fireEvent.blur(guestsField);
    await waitFor(() => {
      const errorMessage = screen.getByText(
        /Minimum number of guests needed to reserve a table is 1/i
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("An error message appears when the user picks a number of guests more than 10", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const guestsField = screen.getByLabelText(/Number of guests/i);
    expect(guestsField).toBeInTheDocument();
    fireEvent.change(guestsField, { target: { value: "20" } });
    fireEvent.blur(guestsField);
    await waitFor(() => {
      const errorMessage = screen.getByText(
        /Maximum number of guests we can host at a time is 10/i
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
