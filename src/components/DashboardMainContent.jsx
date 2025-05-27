import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import CalenderUI from './CalenderUI';
import '../styles/components/DashboardMainContent.css';
import Header from './Header';

const DashboardMainContent = () => (
  <main className="dashboard-main">
    <div className="container">
      {/* <Header/> */}
  <div className="row">
    <div className="card"><AnatomySection/></div>
    <div className="card"><HealthStatusCards/></div>
  </div>
  <div className="row center">
    <div className="card"><ActivityFeed/></div>
  </div>
</div>

   <div class="container2">
  <div class="card2"><CalenderUI/></div>
  <div class="card2"><CalendarView/></div>
  <div class="card2"><UpcomingSchedule/></div>
</div>

  </main>
);

export default DashboardMainContent;