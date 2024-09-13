import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      
      <h3>Data and Machine Learning</h3>
      <div className="project-grid">
        <div className="project-card">
          <h3>COVID-19 Data Analysis Using SQL and Tableau</h3>
          <p>Utilized SQL to perform advanced queries, including joins and window functions, and developed a Tableau dashboard to visualize key COVID-19 trends.</p>
          <a href="https://github.com/Nityanand7/DataAnalysis_CovidPortfolioProject" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
        </div>
        <div className="project-card">
          <h3>Data Cleaning and Correlation Analysis in Python</h3>
          <p>Performed data cleaning and correlation analysis using Python libraries like Pandas and NumPy, identifying key factors impacting movie industry revenue.</p>
          <a href="https://github.com/Nityanand7/DataAnalysis_DataCleaningAndCorrelationInPython" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
        </div>
        <div className="project-card">
          <h3>Stock Market Price Prediction Using LSTM</h3>
          <p>Developed an LSTM-based machine learning model to forecast stock prices for companies like Amazon and Google using Python, TensorFlow, and Keras.</p>
          {/* <a href="https://example.com/stock-prediction-lstm" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a> */}
        </div>
        <div className="project-card">
          <h3>Real-Time Stock Market Data Pipeline with Apache Kafka and AWS</h3>
          <p>Built a real-time stock market data pipeline using Apache Kafka on AWS. Integrated AWS S3, Glue, and Athena to automate data processing and support real-time data analysis.</p>
          <a href="https://github.com/Nityanand7/StockMarketAnalysis_DataEngineeringProject" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
        </div>
      </div>

      <br />

      <div className="project-category">
        <h3 className="category-heading">NSF</h3>
        <div className="project-grid">
          <div className="project-card">
            <h3>Indoor Navigation System for Assistive Technology</h3>
            <p>Contributed to an NSF-funded project at WSU's ACCESS Lab, developing an indoor navigation system for visually impaired and wheelchair users. Managed an MS SQL database to optimize BLE beacon data storage, improving proximity sensing and navigation accuracy. This project utilized data-driven solutions to enhance accessibility and assistive technology.</p>
            <a href="https://github.com/Nityanand7/CityGuide" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
          </div>
        </div>

        <h3 className="category-heading">Cloud and DevOps</h3>
        <div className="project-grid">
          <div className="project-card">
            <h3>Netflix Clone Deployment Using Kubernetes</h3>
            <p>Deployed a Netflix Clone using Kubernetes with AWS EC2, Jenkins for CI/CD, and Prometheus for monitoring. Leveraged ArgoCD and Helm for seamless application deployment, focusing on cloud automation and security.</p>
            <a href="https://github.com/Nityanand7/NetlixClone_Kubernetes" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;