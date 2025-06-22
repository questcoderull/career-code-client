import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreateByPromise }) => {
  const jobs = use(jobsCreateByPromise);
  return (
    <div>
      <h1 className="text-2xl">Jobs created by you : {jobs.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job title</th>
              <th>Deadline</th>
              <th>Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td>0</td>
                <td>
                  <Link to={`/applications/${job._id}`}>View Applications</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
