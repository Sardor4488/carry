import AdminPanel from "../adminPanel";
import Billing from "../pages/billing/billing";
import Dashboard from "../pages/dashboard/dashboard";
import Notifications from "../pages/notifications/notifications";
import Profil from "../pages/profil/profil";
import Tables from "../pages/tables/tables";
export const data = [
  {
    path: "/admin",
    element: <AdminPanel />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "tables",
        element: <Tables />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "profile",
        element: <Profil />,
      },
    ],
  },
];
