import React, { useState } from 'react'
import AdminPanelWrapper from './adminPanelWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCreditCard, faHouse, faPerson, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, Route, Routes,Switch } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import Billing from './pages/billing/billing'
const AdminPanel = () => {
    const [pathMenu, setPathMenu] = useState("dashboard2")
    console.log(pathMenu);
    return (
        <AdminPanelWrapper>
            {/* sidebar and rightSide */}
            <div className='admin_panel d-flex'>
                <div className='sideBar '>
                    <div className='border-bottom'>
                        <h3 className='text-white'>Logo</h3>
                    </div>
                    <div className='px-4 sidebar_menu'>
                        <ul>
                        <li onClick={() => setPathMenu("dashboard")} className={`py-2 text-start ${pathMenu === "dashboard" ? "active_menu": ""}`}>
                                    <FontAwesomeIcon icon={faHouse} /> Dashboard
                        </li>
                        <li onClick={() => setPathMenu("billing")} className={`py-2 text-start ${pathMenu === "dashboard" ? "active_menu": ""}`}>
                                    <FontAwesomeIcon icon={faCreditCard} /> Billing
                        </li>
                        </ul>
                    </div>
                </div>
                <div className='rightSide'>
                    {/* header */}
                    <div className="header  px-4">
                        <div className=''>
                            <FontAwesomeIcon icon={faBars} className='c_pointer' />
                            <span className='px-3 c_pointer'>logo</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span className='pe-2'>user</span>
                            <FontAwesomeIcon className='rounded p-3 c_pointer' icon={faUser} />
                        </div>
                    </div>
                    {/* Add the conditional rendering here */}
                    {pathMenu === "dashboard" &&  <Dashboard/>}
                    {pathMenu === "billing" &&  <Billing/>}
                </div>
            </div>
        </AdminPanelWrapper>
    )
}

export default AdminPanel