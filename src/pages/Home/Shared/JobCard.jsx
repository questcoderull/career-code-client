import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
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
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img src={company_logo} className="w-16" alt="company-logo" />
        </figure>

        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex gap-1 items-center">
            <FaMapMarkerAlt></FaMapMarkerAlt> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>

        {/* button */}
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
