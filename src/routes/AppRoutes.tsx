import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../features/dashboard/home";
import User from "../features/dashboard/user";
import EmployeeDetails from "../features/dashboard/user/components/EmployeeDetails";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/employee/:id",
        element: <EmployeeDetails />,
      },
    ],
  },
]);
