import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ReservationPage from "../pages/ReservationPage/ReservationPage";
import * as services from "../api/api";
import { mockTimeSlotsbyDays } from "../data/mocks";
import { mockFormData } from "../data/mocks";

describe("ReservationPage", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Available times are initialized after an API call", async () => {
    const mockFetchData = jest
      .spyOn(services, "fakeFetchAPI")
      .mockImplementation(async () => {
        return mockTimeSlotsbyDays;
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
  test("User is able to submit the reservation form", async () => {
    const mockFetchData = jest
      .spyOn(services, "fakeFetchAPI")
      .mockImplementation(async () => {
        return mockTimeSlotsbyDays;
      });
    const mockHandleSubmit = jest
      .spyOn(services, "fakeSubmitAPI")
      .mockImplementation(async () => {
        return true;
      });
    render(<ReservationPage />);
    //mock API call
    expect(mockFetchData).toHaveBeenCalled();
    const header = await screen.findByText(/Tables available at the moment/i);
    expect(header).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: mockFormData.date },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: mockFormData.time },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: mockFormData.guests },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: mockFormData.occasion },
    });
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: mockFormData.name },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: mockFormData.email },
    });
    fireEvent.change(
      screen.getByLabelText(/is there anything else you'd like us to know/i),
      {
        target: { value: mockFormData.comment },
      }
    );
    const submitBtn = screen.getByText(/confirm booking/i);
    expect(submitBtn).toBeInTheDocument();
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
    form.onsubmit = mockHandleSubmit;
    fireEvent.click(submitBtn);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});
