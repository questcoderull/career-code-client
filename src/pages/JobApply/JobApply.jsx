import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  // getting the specific id thorow params.
  const { id: jobId } = useParams();
  //   console.log(jobId);

  //   getting the user via custom hook
  const { user } = useAuth();
  //   console.log(user);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    // sendintg userInfo now as object.

    const application = {
      jobId,
      applicient: user.email,
      linkedIn,
      github,
      resume,
    };

    // now sending the info to db throw Axios.

    axios
      .post("http://localhost:5000/application", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application submited succesfully",
            showConfirmButton: false,
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
      <h2 className="text-3xl">
        Apply for this job :{" "}
        <Link className="text-red-500 underline" to={`/jobs/${jobId}`}>
          Details
        </Link>
      </h2>

      <form onSubmit={handleFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedIn"
            className="input"
            placeholder="LinkedIn profile link"
          />

          <label className="label">Github Link</label>
          <input type="url" name="github" className="input" placeholder="url" />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <input className="btn" type="submit" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
