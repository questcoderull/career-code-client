import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import JobList from "./JobList";
import { jobsCreateByPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <Suspense>
        <JobList
          jobsCreateByPromise={jobsCreateByPromise(user.email)}
        ></JobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
