import React from 'react';
import '../styles/components/Sidebar.css';

const links = [
  'Dashboard', 'History', 'Calendar', 'Appointments', 'Statistics', 'Chat', 'Support'
];

const Sidebar = () => (
  <aside className="sidebar">
    <h3>General</h3>
    <nav>
      {links.map(link => <div key={link} className="sidebar-link">{link}</div>)}
    </nav>
    <h3>Tools</h3>
    <nav>
      <div className="sidebar-link">Setting</div>
    </nav>
  </aside>
);

export default Sidebar;