import { render, screen } from "@testing-library/react";
import Bookings from "../components/Bookings/Bookings";
import { mockTimeSlotsbyDays } from "../data/mocks";

describe("Bookings", () => {
  //Test for some static text being rendered in the Bookings component
  test("Table header renders successfully", () => {
    render(<Bookings bookingData={mockTimeSlotsbyDays} />);
    const header = screen.getByText(/tables available at the moment/i);
    expect(header).toBeInTheDocument();
  });
});
