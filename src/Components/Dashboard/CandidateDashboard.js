import React from "react";
import { useLocation } from "react-router-dom";
import { getAllJobs, applyJob } from "../../API";
import { Toast } from "primereact/toast";
////
import JobCard from "./JobCard";
import Pagination from "./Pagination";
////

const CandidateDashboard = () => {
  ////
  // const [jobs, setJobs] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [jobsPerPage, setJobsPerPage] = React.useState(5);
  ////

  const location = useLocation();
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const [jobsData, setJobsData] = React.useState({ data: [] });
  const toast = React.useRef();

  React.useEffect(() => {
    getAllJobs()
      .then((data) => {
        setJobsData(data);
        // setJobs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const applicationJob = (arg) => {
    applyJob(arg, userData.token)
      .then((data) => {
        console.log(data);
        toast.current.show({
          severity: "success",
          summary: "Applied Successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.current.show({
          severity: "error",
          summary: "You have already applied for this job.",
        });
      });
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.data.slice(indexOfFirstJob, indexOfLastJob);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className='signup_main_container'>
      <Toast ref={toast} />
      <div className='container py-5 mt-3'>
        <div className='bread_crumb'>
          <p>
            <i className='fa fa-home' aria-hidden='true'></i>{" "}
            {location.pathname === "/dashboard" ? "Home" : "Dashboard"}
          </p>
        </div>
        <h4 style={{ color: "black" }}>Jobs for you</h4>
        {/* {jobsData.data.map((element, index) => (
            <div className='col-md-3'>
              <JobCard
                key={index}
                item={element}
                buttonText={"Apply"}
                onAction={applicationJob}
              />
            </div>
          ))} */}

        <div>
          <JobCard
            currentJobs={currentJobs}
            buttonText={"Apply"}
            onAction={applicationJob}
          />
          <Pagination
            jobsPerPage={jobsPerPage}
            totalJobs={jobsData}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CandidateDashboard;
