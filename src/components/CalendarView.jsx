import React from 'react';
import { calendarAppointments } from '../data/calenderView';
import '../styles/components/CalendarView.css';

const CalendarView = () => (
  <section className="calendar-view">
    <h3>Appointments</h3>
    {calendarAppointments.map(({ day, time, title, doctor }) => (
      <div key={`${day}-${time}`} className="calendar-card">
        <div className="calendar-day">{day}</div>
        <div className="calendar-info">
          <h4>{title}</h4>
          <p>{time} - {doctor}</p>
        </div>
      </div>
    ))}
  </section>
);

export default CalendarView;