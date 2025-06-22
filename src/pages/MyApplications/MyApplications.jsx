import React, { Suspense } from "react";
import ApplicationStat from "./ApplicationStat";
import ApplicationList from "./ApplicationList";
import useAuth from "../../Hooks/useAuth.jsx";
import { myApplicationsPromise } from "../../api/applicationApi.js";

//calling it from another folder called api and using it via importing.
// const myApplicationsPromise = (email) => {
//   return fetch(`http://localhost:5000/applications?email=${email}`).then(
//     (res) => res.json()
//   );
// };

const MyApplications = () => {
  const { user } = useAuth();

  return (
    <div>
      <ApplicationStat></ApplicationStat>
      <Suspense fallback={<div className="loading loading-bars"></div>}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
