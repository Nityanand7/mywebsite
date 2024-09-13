import React from 'react';
import aws from './images/aws.png';
import az from './images/AZ-900.png';
import google from './images/google.png';
import python from './images/python.png';
import sql from './images/sql.png';
import python01 from './images/python01.png';
import tableau from './images/dashboard.png';
import powerbi from './images/chart.png';
import excel from './images/excel.png';
import aiml from './images/data-model.png';
import data from './images/data-model.jpeg';
import aws01 from './images/aws01.jpeg';
import azure from './images/azure.jpeg';
import gcp from './images/gcp.jpeg';


function Certificate() {
  return (
    <section id="certificates" className="certificates">
      <h2>Core Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
            <img src={sql} alt="Certificate 1" />
            <h3>SQL</h3>
        </div>
        <div className="skill-card">
            <img src={python01} alt="Certificate 1" />
            <h3>Python</h3>
        </div>
        <div className="skill-card">
            <img src={tableau} alt="Certificate 1" />
            <h3>Tableau</h3>
        </div>
        <div className="skill-card">
            <img src={powerbi} alt="Certificate 1" />
            <h3>Power BI</h3>
        </div>
        <div className="skill-card">
            <img src={excel} alt="Certificate 1" />
            <h3>Microsoft Excel</h3>
        </div>
        <div className="skill-card">
            <img src={aiml} alt="Certificate 1" />
            <h3>AI & ML</h3>
        </div>
        <div className="skill-card">
            <img src={data} alt="Certificate 1" />
            <h3>Data Engineering</h3>
        </div>
        <div className="skill-card">
            <img src={aws01} alt="Certificate 1" />
            <h3>AWS</h3>
        </div>
        <div className="skill-card">
            <img src={azure} alt="Certificate 1" />
            <h3>Azure</h3>
        </div>
        <div className="skill-card">
            <img src={gcp} alt="Certificate 1" />
            <h3>GCP</h3>
        </div>
      </div>

    <br></br><br></br><br></br>
      <h2>Certifications</h2>
      <div className="certificate-grid">
        <div className="certificate-card">
          <img src={aws} alt="Certificate 1" />
          <h3>AWS Certified Developer</h3>
          <a href="https://www.credly.com/badges/5b131f1b-4475-489c-a91d-1e899e57e99d" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
        <div className="certificate-card">
          <br></br><br></br>
          <img src={google} alt="Certificate 2" />
          <br></br>
          <h3>Google Data Analytics</h3>
          <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/8PQA2US6QHR6" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
        <div className="certificate-card">
          <img src={az} alt="Certificate 3" />
          <h3>Microsoft Azure az-900</h3>
          <a href="https://www.credly.com/badges/059bb5e9-90f2-49bc-80c0-5b5ffdc86c41?source=linked_in_profile" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
        <div className="certificate-card">
          <img src={python} alt="Certificate 4" />
          <h3>Python</h3>
          <a href="https://www.coursera.org/account/accomplishments/certificate/XH6NNPJZS5B9" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
      </div>
    </section>
  );
}

export default Certificate;