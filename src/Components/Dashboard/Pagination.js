import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ jobsPerPage, totalJobs, paginate }) {
  console.log(totalJobs);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobs.data.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div>
        {pageNumbers.map((number) => (
          <button
            className={styles.btn}
            onClick={() => paginate(number)}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
