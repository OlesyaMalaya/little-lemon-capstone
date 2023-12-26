import { render, screen, waitFor } from "@testing-library/react";
import ReservationPage from "../pages/ReservationPage/ReservationPage";
import * as services from "../api/api";
import { initialDate } from "../data/dates";

describe("ReservationPage", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Available times are initialized after an API call", async () => {
    const mockFetchData = jest
      .spyOn(services, "fakeFetchAPI")
      .mockImplementation(async () => {
        return [{ day: initialDate, bookingSlots: ["13:00"] }];
      });
    render(<ReservationPage />);
    expect(screen.queryByText(/13:00/i)).not.toBeInTheDocument();
    //mock API call
    expect(mockFetchData).toHaveBeenCalled();
    //after an API call available times should be visible
    await waitFor(() => {
      const visibleTimes = screen.getAllByText(/13:00/i);
      visibleTimes.forEach((time) => expect(time).toBeInTheDocument());
    });
  });
});
