import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobsDetails from "../pages/JobDetails/JobsDetails";
import PrivateRouter from "../Router/PrivateRouter";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
import SomeThingWrong from "../pages/ErrorPages/SomeThingWrong";
import PageNotFound from "../pages/ErrorPages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <SomeThingWrong></SomeThingWrong>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addJob",
        element: (
          <PrivateRouter>
            <AddJob></AddJob>
          </PrivateRouter>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRouter>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRouter>
        ),
      },

      {
        path: "/applications/:id",
        element: (
          <PrivateRouter>
            <ViewApplications></ViewApplications>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/applications/job/${params.id}`),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/jobs/:id",
        Component: JobsDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivateRouter>
            <MyApplications></MyApplications>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: PageNotFound,
  },
]);

export default router;
