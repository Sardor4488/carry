import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCreditCard,
  faHouse,
  faRightFromBracket,
  faTable,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ hideSidebar, setPathMenu, pathMenu }) => {
  return (
    <div className={`sideBar ${hideSidebar ? "w-auto" : "sideBarWhith"}  `}>
      <div className={`${hideSidebar ? "d-none" : ""}`}>
        <div className="border-bottom">
          <h3 className="text-white">Logo</h3>
        </div>
        <div className="px-4 sidebar_menu">
          <ul>
            <li
              onClick={() => setPathMenu("dashboard")}
              className={`py-2 text-start c_pointer ps-2 ${
                pathMenu === "dashboard" ? "active_menu" : ""
              }`}
            >
              <FontAwesomeIcon icon={faHouse} /> Dashboard
            </li>
            <li
              onClick={() => setPathMenu("billing")}
              className={`py-2 text-start c_pointer ps-2 ${
                pathMenu === "billing" ? "active_menu" : ""
              }`}
            >
              <FontAwesomeIcon icon={faCreditCard} /> Billing
            </li>
            <li
              onClick={() => setPathMenu("table")}
              className={`py-2 text-start c_pointer ps-2 ${
                pathMenu === "table" ? "active_menu" : ""
              }`}
            >
              <FontAwesomeIcon icon={faTable} /> Tables
            </li>
            <li
              onClick={() => setPathMenu("profil")}
              className={`py-2 text-start c_pointer ps-2 ${
                pathMenu === "profil" ? "active_menu" : ""
              }`}
            >
              <FontAwesomeIcon icon={faUser} /> Profil
            </li>
            <li
              onClick={() => setPathMenu("notifications")}
              className={`py-2 text-start c_pointer ps-2 ${
                pathMenu === "notifications" ? "active_menu" : ""
              }`}
            >
              <FontAwesomeIcon icon={faBell} /> Notifications
            </li>
            <li
              onClick={() => setPathMenu("logOut")}
              className={`py-2 text-start c_pointer ps-2 ${
                pathMenu === "logOut" ? "active_menu" : ""
              }`}
            >
              <FontAwesomeIcon icon={faRightFromBracket} /> Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
