import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import * as services from "../../api/api";
import { initialDate, mockDate } from "../../data/dates";

describe("Booking Form", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  //Test for some static text being rendered in the BookingForm component
  test("Date label renders successfully", () => {
    render(<BookingForm />);
    const labelElement = screen.getByLabelText(/choose date/i);
    expect(labelElement).toBeInTheDocument();
  });
  //Test for the initializeTime function
  test("Available times are initialized after an API call", async () => {
    const mockFetchData = jest
      .spyOn(services, "fakeFetchAPI")
      .mockImplementation(async () => {
        return ["12:00"];
      });
    render(<BookingForm />);
    expect(screen.queryByText(/12:00/i)).not.toBeInTheDocument();
    //mock API call
    expect(mockFetchData).toHaveBeenCalledWith(initialDate);
    //after an API call available times should be visible
    await waitFor(() => {
      expect(screen.getByText(/12:00/i)).toBeInTheDocument();
    });
  });
  //Test for the initializeTime function
  test("Available times are updated when the user picks a date", async () => {
    const mockFetchData = jest
      .spyOn(services, "fakeFetchAPI")
      .mockImplementation(async () => {
        return ["12:00"];
      });
    render(<BookingForm />);
    expect(mockFetchData).toHaveBeenCalledWith(initialDate);
    const selectedDate = screen.getByLabelText(/choose date/i);
    fireEvent.change(selectedDate, {
      target: { value: mockDate },
    });
    expect(mockFetchData).toHaveBeenCalledWith(mockDate);
  });
});

