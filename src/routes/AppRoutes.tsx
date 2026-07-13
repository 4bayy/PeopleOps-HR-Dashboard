import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../features/dashboard/home";
import User from "../features/dashboard/employee";
import EmployeeProfile from "../features/dashboard/employee/pages/EmployeeProfile";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employee",
        element: <User />,
      },
      {
        path: "/employee/:id",
        element: <EmployeeProfile />,
      },
    ],
  },
]);
