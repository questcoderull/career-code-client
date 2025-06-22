import React from "react";
import { Link, useLoaderData } from "react-router";

const JobsDetails = () => {
  const {
    _id,
    title,
    location,
    jobtype,
    category,
    description,
    company,
    company_logo,
    requirements,
    salaryRange,
  } = useLoaderData();

  return (
    <div>
      <h1 className="text-2xl">{title}</h1>
      <p>{company}</p>

      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobsDetails;
