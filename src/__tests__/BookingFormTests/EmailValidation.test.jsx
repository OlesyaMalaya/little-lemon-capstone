import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../../components/Forms/BookingForm";
import { mockTimeSlotsbyDays } from "../../data/mocks";

describe("Booking Form Email Validation", () => {
  test("An error message doesn't appear when the user provides a valid email", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const emailField = screen.getByLabelText(/email/i);
    expect(emailField).toBeInTheDocument();
    fireEvent.change(emailField, { target: { value: "test@test.com" } });
    fireEvent.blur(emailField);
    await waitFor(() => {
      const errorMessage = screen.queryByText(/email is required/i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  test("An error message appears when the user touches the email field but doesn't supply an email", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const emailField = screen.getByLabelText(/email/i);
    expect(emailField).toBeInTheDocument();
    fireEvent.change(emailField, { target: { value: "" } });
    fireEvent.blur(emailField);
    await waitFor(() => {
      const errorMessage = screen.getByText(/email is required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("An error message appears when the email the user provided is invalid", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const emailField = screen.getByLabelText(/email/i);
    expect(emailField).toBeInTheDocument();
    fireEvent.change(emailField, { target: { value: "test" } });
    fireEvent.blur(emailField);
    await waitFor(() => {
      const errorMessage = screen.getByText(/Please enter a valid email/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
