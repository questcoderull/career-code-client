import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:5000/jobs").then((res) =>
    res.json()
  );

  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center bg-black bg-opacity-95 p-16 rounded-2xl w-full">
            <div className="flex flex-col items-center gap-6">
              <span className="loading loading-infinity loading-lg text-primary"></span>
              <p className="text-white text-lg font-semibold animate-pulse">
                Loading, please wait...
              </p>
            </div>
          </div>
        }
      >
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
