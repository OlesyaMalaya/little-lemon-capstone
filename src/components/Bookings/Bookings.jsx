import styles from "./Bookings.module.css";
import { convertDate } from "../../utils/convertDate";
const Bookings = ({ timeslots }) => {
  return (
    <>
      {timeslots ? (
        <article className={styles.bookings}>
          <h3>Tables available at the moment</h3>
          <table>
            <thead>
              <tr>
                <th>
                  <h4>Day</h4>
                </th>
                <th>
                  <h4>Times available</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {timeslots.map((timeslot) => (
                <tr key={timeslot.day}>
                  <td>{convertDate(timeslot.day)}</td>
                  <td>
                    {timeslot.bookingSlots.length
                      ? timeslot.bookingSlots.join(", ")
                      : "We're booked out at this day"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      ) : null}
    </>
  );
};

export default Bookings;
