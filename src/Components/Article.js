import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Article = ({ job }) => {
  if (job) {
    return (
      <article className="job-info">
        <h3>{job.title}</h3>
        <h4>{job.company}</h4>
        <p className="job-date">{job.date}</p>
        <div className="job-desc">
          {job.duties.map((duty) => {
            return (
              <>
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </>
            );
          })}
        </div>
      </article>
    );
  }
  return <h3>Loading...</h3>;
};

export default Article;
