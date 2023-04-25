import React, { useState } from "react";
import AdminPanelWrapper from "./adminPanelWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
const AdminPanel = () => {
  const [hideSidebar, setHidebar] = useState(false);
  const hidenSidebar = () => {
    setHidebar(!hideSidebar);
  };
  const [pathMenu, setPathMenu] = useState("dashboard");
  return (
    <AdminPanelWrapper>
      {/* sidebar and rightSide */}
      <div className="admin_panel d-flex">
        <Sidebar
          pathMenu={pathMenu}
          setPathMenu={setPathMenu}
          hideSidebar={hideSidebar}
        />
        <div
          className={`rightSide ${hideSidebar ? "w-100" : "rightSide_width"}`}
        >
          {/* header */}
          <div className="header  px-4">
            <div className="">
              <FontAwesomeIcon
                onClick={hidenSidebar}
                icon={faBars}
                className="c_pointer"
              />
              <span className="px-3 c_pointer">logo</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="pe-2">user</span>
              <FontAwesomeIcon
                className="rounded p-3 c_pointer"
                icon={faUser}
              />
            </div>
          </div>
          {/* Add the conditional rendering here */}
          <Outlet />
        </div>
      </div>
    </AdminPanelWrapper>
  );
};

export default AdminPanel;
