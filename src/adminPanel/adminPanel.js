import React, { useState } from 'react'
import AdminPanelWrapper from './adminPanelWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faCreditCard, faHouse,  faRightFromBracket,  faTable,  faUser } from '@fortawesome/free-solid-svg-icons'
import Dashboard from './pages/dashboard/dashboard'
import Billing from './pages/billing/billing'
import Notifications from './pages/notifications/notifications'
import Tables from './pages/tables/tables'
const AdminPanel = () => {
    const [hideSidebar, setHidebar] = useState(false)
    const hidenSidebar = () => {
        setHidebar(!hideSidebar)
        console.log(hideSidebar);
    }
    const [pathMenu, setPathMenu] = useState("dashboard")
    console.log(pathMenu);
    return (
        <AdminPanelWrapper>
            {/* sidebar and rightSide */}
            <div className='admin_panel d-flex'>
                <div className={`sideBar ${hideSidebar ? "w-auto" : "sideBarWhith"}  `}>
                    <div className={`${hideSidebar ? "d-none" : ""}`}>
                        <div className='border-bottom'>
                            <h3 className='text-white'>Logo</h3>
                        </div>
                        <div className='px-4 sidebar_menu'>
                            <ul>
                                <li onClick={() => setPathMenu("dashboard")} className={`py-2 text-start c_pointer ps-2 ${pathMenu === "dashboard" ? "active_menu" : ""}`}>
                                    <FontAwesomeIcon icon={faHouse} /> Dashboard
                                </li>
                                <li onClick={() => setPathMenu("billing")} className={`py-2 text-start c_pointer ps-2 ${pathMenu === "billing" ? "active_menu" : ""}`}>
                                    <FontAwesomeIcon icon={faCreditCard} /> Billing
                                </li>
                                <li onClick={() => setPathMenu("table")} className={`py-2 text-start c_pointer ps-2 ${pathMenu === "table" ? "active_menu" : ""}`}>
                                    <FontAwesomeIcon icon={faTable} /> Tables
                                </li>
                                <li onClick={() => setPathMenu("notifications")} className={`py-2 text-start c_pointer ps-2 ${pathMenu === "notifications" ? "active_menu" : ""}`}>
                                    <FontAwesomeIcon icon={faBell} /> Notifications
                                </li>
                                <li onClick={() => setPathMenu("logOut")} className={`py-2 text-start c_pointer ps-2 ${pathMenu === "logOut" ? "active_menu" : ""}`}>
                                    <FontAwesomeIcon icon={faRightFromBracket} /> Log out
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`rightSide ${hideSidebar ? "w-100" : "rightSide_width"}`}>
                    {/* header */}
                    <div className="header  px-4">
                        <div className=''>
                            <FontAwesomeIcon onClick={hidenSidebar} icon={faBars} className='c_pointer' />
                            <span className='px-3 c_pointer'>logo</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span className='pe-2'>user</span>
                            <FontAwesomeIcon className='rounded p-3 c_pointer' icon={faUser} />
                        </div>
                    </div>
                    {/* Add the conditional rendering here */}
                    {pathMenu === "dashboard" && <Dashboard/>}
                    {pathMenu === "billing" && <Billing/>}
                    {pathMenu === "table" && <Tables/>}
                    {pathMenu === "notifications" && <Notifications/>}
                </div>
            </div>
        </AdminPanelWrapper>
    )
}

export default AdminPanel