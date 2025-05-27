import React from 'react';
import '../styles/components/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ day, time, title, doctor }) => (
  <div className="simple-appointment-card">
    <div className="appointment-day">{day}</div>
    <div className="appointment-details">
      <h4 className="appointment-title">{title}</h4>
      <p className="appointment-meta">{time} — {doctor}</p>
    </div>
  </div>
);

export default SimpleAppointmentCard;
