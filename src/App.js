import React, { useState, useEffect } from "react";

import Tab from "./Components/Tab";
import Article from "./Components/Article";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  // state
  const [jobs, setJobs] = useState([]);
  const [currentJobId, setCurrentJobId] = useState("");
  // data from api
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setCurrentJobId(data[0].id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  // UI
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((j, i) => (
            <Tab
              key={j.id}
              id={j.id}
              company={j.company}
              currentJobId={currentJobId}
              setCurrentJobId={setCurrentJobId}
            />
          ))}
        </div>
        <Article job={jobs.find((job) => job.id === currentJobId)} />
      </div>
      <button className="btn">MORE INFO</button>
    </section>
  );
}

export default App;
