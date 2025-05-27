import React from 'react';
import '../styles/components/AnatomySection.css';

const AnatomySection = () => (
  <section className="anatomy-section">
    <img src="src\assets\human-body .png" alt="Human Anatomy" className="anatomy-img" />
    <div className="heart-label">❤️ Healthy Heart</div>
    <div className="leg-label">🦵 Healthy Leg</div>
  </section>
);

export default AnatomySection;