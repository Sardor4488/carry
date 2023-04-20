import React, { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';
import { Alert } from 'react-bootstrap';

const NotificationBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    console.log(isVisible);

    useEffect(() => {
        return () => {
            const timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        };
    }, []);
    if (!isVisible) {
        return null;
    }


    return (
        <div> 
            <div variant="light" dismissible onClose={() => setIsVisible(false)} className='notification'>
                <h1 className={`${isVisible ? "bg-red" : "bg-red"} notification`}>dd</h1>

            </div>
        </div>
    );
};

export default NotificationBar;