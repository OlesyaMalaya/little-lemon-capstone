import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../../components/Forms/BookingForm";
import { mockTimeSlotsbyDays } from "../../data/mocks";

describe("Booking Form Name Validation", () => {
  test("An error message doesn't appear when the user provides a valid name", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const nameField = screen.getByLabelText(/name/i);
    expect(nameField).toBeInTheDocument();
    fireEvent.change(nameField, { target: { value: "Test" } });
    fireEvent.blur(nameField);
    await waitFor(() => {
      const errorMessage = screen.queryByText(/name is required/i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });
  test("An error message appears when the user touches the name field but doesn't supply a name", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const nameField = screen.getByLabelText(/name/i);
    expect(nameField).toBeInTheDocument();
    fireEvent.change(nameField, { target: { value: "" } });
    fireEvent.blur(nameField);
    await waitFor(() => {
      const errorMessage = screen.getByText(/name is required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
