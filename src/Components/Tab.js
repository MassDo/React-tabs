import React from "react";

const Tab = ({
  id,
  place,
  company,
  focusOnTab,
  currentJobId,
  setCurrentJobId,
}) => {
  return (
    <button
      className={id === currentJobId ? "job-btn active-btn" : "job-btn"}
      onClick={() => setCurrentJobId(id)}
    >
      {company}
    </button>
  );
};

export default Tab;
