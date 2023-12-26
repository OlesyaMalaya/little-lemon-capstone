import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/Forms/BookingForm";
import { initialDate, mockDate } from "../data/dates";
import { mockTimeSlotsbyDays } from "../data/mocks";
import * as services from "../utils/updateTimes";

const mockSubmit = jest.fn();

describe("BookingSlots", () => {
  test("Time options are updated when the user picks a new date in BookingForm", () => {
    const mockUpdateTimes = jest.spyOn(services, "updateTimes");
    render(<BookingForm submit={mockSubmit} times={mockTimeSlotsbyDays} />);
    //available times are filtered according to initial date (set for tomorrow)
    expect(mockUpdateTimes).toHaveBeenCalledWith(
      initialDate,
      expect.any(Object)
    );
    //initial available times should be visible
    expect(screen.getByText(/12:00/i)).toBeInTheDocument();
    expect(screen.getByText(/13:00/i)).toBeInTheDocument();
    //available times for other dates should not be visible
    expect(screen.queryByText(/14:00/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/15:00/i)).not.toBeInTheDocument();
    // when the user picks a date in the form available times should be filtered according to the new date
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: mockDate },
    });
    expect(mockUpdateTimes).toHaveBeenCalledWith(mockDate, expect.any(Object));
    //available times for the initial date should not be visible
    expect(screen.queryByText(/12:00/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/13:00/i)).not.toBeInTheDocument();
    //available times for the date the user picked should be visible
    expect(screen.getByText(/14:00/i)).toBeInTheDocument();
    expect(screen.getByText(/15:00/i)).toBeInTheDocument();
  });
});
