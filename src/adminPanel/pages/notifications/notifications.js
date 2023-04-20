import React, { useState } from 'react'
import NotificationsWrapper from './notificationsWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Notifications = () => {
    const [hidden, setHidden] = useState("");
   
    return (
        <NotificationsWrapper>
            <div className='notification p-3'>
                <div className='w-75 m-auto my_card text-start p-3'>
                    <h5>Notifications</h5>
                    <p className='text-secondary'>Notifications on this page use Toasts from Bootstrap. Read more details here.</p>
                    <div className={`text-white my-3 bg-info p-3 rounded-3 d-flex align-items-center justify-content-between ${hidden === "Success" ? "d-none" : ""} `} >
                        Success Notification
                        <FontAwesomeIcon className='c_pointer' onClick={() => setHidden("Success")} icon={faX} />
                    </div>
                    <div className={`text-white my-3 bg-danger p-3 rounded-3 d-flex align-items-center justify-content-between ${hidden === "Danger" ? "d-none" : ""} `} >
                        Danger Notification
                        <FontAwesomeIcon className='c_pointer' onClick={() => setHidden("Danger")} icon={faX} />
                    </div>
                    <div className={`text-white my-3 bg-warning p-3 rounded-3 d-flex align-items-center justify-content-between ${hidden === "Warning" ? "d-none" : ""} `} >
                        Warning Notification
                        <FontAwesomeIcon className='c_pointer' onClick={() => setHidden("Warning")} icon={faX} />
                    </div>

                    <div className={`text-white my-3 bg-dark p-3 rounded-3 d-flex align-items-center justify-content-between ${hidden === "Dark" ? "d-none" : ""} `} >
                        Dark Notification
                        <FontAwesomeIcon className='c_pointer' onClick={() => setHidden("Dark")} icon={faX} />
                    </div>
                </div>
            </div>
        </NotificationsWrapper>
    )
}

export default Notifications