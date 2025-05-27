import React from 'react';
import { healthStatus } from '../data/healthData';
import '../styles/components/HealthStatusCards.css';

const HealthStatusCards = () => (
  <section className="health-status-cards">
    {healthStatus.map(({ part, date, status }) => (
      <div key={part} className={`health-card ${status}`}>
        <h4>{part}</h4>
        <p>{date}</p>
        <span className="status-indicator">{status}</span>
      </div>
    ))}
  </section>
);

export default HealthStatusCards;