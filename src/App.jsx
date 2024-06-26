import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import "./App.css";
import JobListingPage from "./pages/JobListingPage.jsx";
import JobsPage, { jobLoader } from "./pages/JobsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/joblisting" element={<JobListingPage />} />
      <Route path="/joblisting/:id" element={<JobsPage />} loader={jobLoader} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
