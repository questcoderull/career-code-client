import React, { use } from "react";
import JobCard from "./Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <div>
      <h1 className="text-5xl">Hot Jobs of the day! {jobs.length}</h1>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
