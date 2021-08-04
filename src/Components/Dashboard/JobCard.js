/* eslint-disable no-lone-blocks */
import React from "react";
import { getAllJobs } from "../../API";

import "../../main.css";

function JobCard({ currentJobs, item, buttonText, onAction }) {
  const [jobsData, setJobsData] = React.useState({ data: [] });

  React.useEffect(() => {
    getAllJobs()
      .then((data) => {
        setJobsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(currentJobs);
  return (
    <div className='job_main_container mb-3' style={{ width: "100%" }}>
      {jobsData.data.map((job) => (
        <div className='job_main_container mb-3' style={{ width: "100%" }}>
          <div className='card_body p-3'>
            <h2 className='jobcard_heading'>{job.title}</h2>
            <p className='jobcard_detail mb-4'>{job.description.split(" ")}</p>
            <div className='card_bottom_details'>
              <span>
                <i
                  className='fa fa-map-marker primary_text'
                  aria-hidden='true'
                ></i>
                {" " + job.location}
              </span>
              {buttonText !== "" && (
                <button
                  className='apply_button'
                  onClick={() => onAction(job.id)}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobCard;

{
  /* <div className='job_main_container mb-3' style={{ width: "100%" }}>
  <div className='card_body p-3'>
    <h2 className='jobcard_heading'>{item.title}</h2>
    <p className='jobcard_detail mb-4'>{item.description}</p>
    <div className='card_bottom_details'>
      <span>
        <i className='fa fa-map-marker primary_text' aria-hidden='true'></i>
        {item.location}
      </span>
      {buttonText !== "" && (
        <button className='apply_button' onClick={() => onAction(item.id)}>
          {buttonText}
        </button>
      )}
    </div>
  </div>
</div>; */
}
