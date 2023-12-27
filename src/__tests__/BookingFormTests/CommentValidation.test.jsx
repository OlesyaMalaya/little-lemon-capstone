import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../../components/Forms/BookingForm";
import {
  mockTimeSlotsbyDays,
  mockLongRequest,
  mockValidRequest,
} from "../../data/mocks";

describe("Booking Form Comment Validation", () => {
  test("An error message doesn't appear when the user leaves a comment shorter than 100 chars", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const commentField = screen.getByLabelText(/comment/i);
    expect(commentField).toBeInTheDocument();
    //mockComment is shorter than 100 characters
    fireEvent.change(commentField, {
      target: { value: mockValidRequest },
    });
    fireEvent.blur(commentField);
    await waitFor(() => {
      const errorMessage = screen.queryByText(
        /Comment cannot be longer than 100 characters/i
      );
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  test("An error message doesn't appear when the user leaves no comment", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const commentField = screen.getByLabelText(/comment/i);
    expect(commentField).toBeInTheDocument();
    //comment field is empty
    fireEvent.change(commentField, {
      target: { value: "" },
    });
    fireEvent.blur(commentField);
    await waitFor(() => {
      const errorMessage = screen.queryByText(
        /Comment cannot be longer than 100 characters/i
      );
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  test("An error message appears when the comment the user provided is too long", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const commentField = screen.getByLabelText(/comment/i);
    expect(commentField).toBeInTheDocument();
    //mockComment is longer than 100 characters
    fireEvent.change(commentField, { target: { value: mockLongRequest } });
    fireEvent.blur(commentField);
    await waitFor(() => {
      const errorMessage = screen.getByText(
        /Comment cannot be longer than 100 characters/i
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
