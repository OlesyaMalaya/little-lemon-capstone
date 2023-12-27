import { render, screen } from "@testing-library/react";
import BookingForm from "../../components/Forms/BookingForm";
import { mockTimeSlotsbyDays } from "../../data/mocks";

describe("Booking Form Attributes", () => {
  test("Booking form prevents the browser's default validation logic", () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const form = screen.getByRole("form");
    expect(form).toHaveAttribute("noValidate");
  });

  test("Booking form autocompletes fields without the user needing to type them in full", () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    const form = screen.getByRole("form");
    expect(form).toHaveAttribute("autoComplete", "on");
  });

  test("Number of guests form field shows a placeholder", () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    expect(screen.getByPlaceholderText("0")).toBeInTheDocument();
  });

  test("Name form field shows a placeholder", () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  });

  test("Name form field autocompletes", () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    expect(screen.getByPlaceholderText("Name")).toHaveAttribute(
      "autoComplete",
      "given-name"
    );
  });

  test("Email form field shows a placeholder", () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    expect(screen.getByPlaceholderText("email@email.com")).toBeInTheDocument();
  });

  test("Email form field autocompletes", () => {
    const mockSubmit = jest.fn();
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    expect(screen.getByPlaceholderText("email@email.com")).toHaveAttribute(
      "autoComplete",
      "email"
    );
  });
});
