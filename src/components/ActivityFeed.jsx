import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/components/ActivityFeed.css';

const data = [
  { name: 'Mon', value: 5 },
  { name: 'Tue', value: 8 },
  { name: 'Wed', value: 6 },
  { name: 'Thu', value: 9 },
  { name: 'Fri', value: 4 },
  { name: 'Sat', value: 7 },
  { name: 'Sun', value: 5 },
];

const ActivityFeed = () => (
  <section className="activity-feed">
    <div className="activity-header">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
    </div>
    <ResponsiveContainer width="100%" height={150}>
      <BarChart
        data={data}
        barCategoryGap={20}
        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#8a8fa3' }}
        />
        <Tooltip
          contentStyle={{ borderRadius: 10, fontSize: 12 }}
          // cursor={{ fill: '#f0f0f0' }} 
        />
        <Bar dataKey="value" fill="#6C63FF" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </section>
);

export default ActivityFeed;
