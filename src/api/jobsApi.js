export const jobsCreateByPromise = (email) => {
  return fetch(`http://localhost:5000/jobs?email=${email}`, {
    credentials: "include",
  }).then((res) => res.json());
};
