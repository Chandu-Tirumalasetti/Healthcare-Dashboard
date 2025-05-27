import React from 'react';
import { appointments } from '../data/appointments';
import '../styles/components/UpcomingSchedule.css';

const UpcomingSchedule = () => (
  <section className="upcoming-schedule">
<h3>The Upcoming Schedule</h3>
    {appointments.map(({ day, title, time, icon }) => (
      <div key={`${day}-${title}`} className="schedule-item">
<span className="icon" role="img" aria-label={title}>{icon}</span>
        <div>
          <h4>{title}</h4>
          <p>{day} - {time}</p>
        </div>
      </div>
    ))}
  </section>
);

export default UpcomingSchedule;