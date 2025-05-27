import React from "react";
import "../styles/components/CalenderUI.css";

const schedule = {
  Mon: { date: 25, times: [] },
  Tues: { date: 26, times: ["08:00", "09:00"], selected: "09:00" },
  Wed: { date: 27, times: ["12:00", "13:00"] },
  Thurs: { date: 28, times: ["10:00", "11:00"], selected: "11:00" },
  Fri: { date: 29, times: ["14:00", "16:00"] },
  Sat: { date: 30, times: ["12:00", "14:00", "15:00"] },
  Sun: { date: 31, times: ["09:00"] },
};

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="calendar-nav">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>
      <div className="calendar-grid">
        {Object.entries(schedule).map(([day, { date, times, selected }]) => (
          <div className={`calendar-column ${selected ? "highlight" : ""}`} key={day}>
            <div className="calendar-day">{day}</div>
            <div className="calendar-date">{date}</div>
            <div className="calendar-times">
              {times.length === 0 ? (
                <div className="calendar-empty">&mdash;</div>
              ) : (
                times.map((time) => (
                  <div
                    key={time}
                    className={`calendar-time ${selected === time ? "selected" : ""}`}
                  >
                    {time}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
