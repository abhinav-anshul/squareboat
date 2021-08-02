import React from "react";
import "../../main.css";

function JobCard({ item, onAction, buttonText }) {
  return (
    <div className='job_main_container mb-3' style={{ width: "100%" }}>
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
    </div>
  );
}

export default JobCard;
