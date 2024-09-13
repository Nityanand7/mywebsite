import React from 'react';

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item" data-year="Jan 2023 - May 2024">
          <h3>Graduate Research Assistant</h3>
          <p><b><i>Wichita State University, Kansas</i></b></p>
          <p>Led research on indoor navigation systems using Bluetooth beacons, MS SQL, and Azure SQL to assist visually and mobility-impaired users. Designed a user interface with OpenStreetMap and React Native, providing real-time data synchronization and enhancing accessibility.</p>
        </div>
        <div className="timeline-item" data-year="Jan 2023 - May 2024">
          <h3>Graduate Teaching Assistant</h3>
          <p><b><i>Wichita State University, Kansas</i></b></p>
          <p>Taught and mentored students in Data Analytics and Computer Networks, overseeing practical work. Focused on delivering interactive learning and developing innovative teaching methods for complex technical subjects.</p>
        </div>
        <div className="timeline-item" data-year="Oct 2021 - June 2022">
          <h3>Senior Data Analyst </h3>
          <p><b><i>Great Learning</i></b></p>
          <p>During my time at Great Learning, I leveraged data analysis to drive targeted campaigns, resulting in a 200% revenue increase. I built interactive dashboards using Tableau and Metabase for actionable insights, while also employing SQL, Amazon Redshift, and AWS Glue to optimize ETL workflows, enhancing data processing efficiency and improving user engagement and conversion rates.</p>
        </div>
        <div className="timeline-item" data-year="May 2019 - Oct 2021">
          <h3>Data Analyst</h3>
          <p><b><i>Capgemini</i></b></p>
          <p>At Capgemini, I played a key role in enhancing financial forecasting models and data processes. By utilizing SQL, Python, and automated data pipelines, I boosted operational efficiency by 25%. Additionally, I delivered ad-hoc reports and data validation techniques that led to a significant 18% cost reduction for banking and retail clients.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;