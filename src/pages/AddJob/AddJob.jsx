import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const { min, max, currency, ...newJob } = data;
    //making object
    newJob.salaryRange = { min, max, currency };

    // making requirements an array.
    // process requirements
    const requirementsString = newJob.requirements;

    const requirementsUnClean = requirementsString.split(","); // it gives us array with spae separeted by comma.

    const requirementsClean = requirementsUnClean.map((req) => req.trim()); //it gives the array without space.

    //finally adding it.
    newJob.requirements = requirementsClean;

    // array bananur short hand version
    newJob.reponsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";

    console.log(newJob);

    // save job to the database wih axios
    axios
      .post("http://localhost:5000/jobs", newJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This new job has been added and published",
            showCancelButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Add A Job</h1>

      <form onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input w-full"
            name="title"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Comapany name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company location"
          />

          <label className="label">Company logo</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Comapany log URL"
          />
        </fieldset>

        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job type</legend>

          <div className="filter flex justify-center">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn flex-1"
              type="radio"
              name="jobType"
              value="On-site"
              aria-label="On-site"
            />
            <input
              className="btn flex-1"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn flex-1"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select w-full"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>

          <input type="date" name="deadline" className="input w-full" />
        </fieldset>

        {/* Salamry Range */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>

              <input
                type="text"
                className="input w-full"
                name="max"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select w-full"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        {/* job requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>

          <textarea
            name="requirements"
            className="textarea w-full"
            placeholder="Job Requiremetns (separate by coma)"
          ></textarea>
        </fieldset>

        {/* job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">job Responsibilities</legend>

          <textarea
            name="responsibilities"
            className="textarea w-full"
            placeholder="job Responsibilities (separate by coma)"
          ></textarea>
        </fieldset>

        {/* hr */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Releted Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input w-full"
            name="hr_name"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user.email}
            className="input w-full"
            placeholder="HR Email"
          />
        </fieldset>

        {/* submit button */}
        <input className="btn w-full btn-info" type="submit" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
