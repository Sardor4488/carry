import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import NotificationBar from '../home/notify'
import SignInWrapper from './signInWrapper'

const SignIn = () => {
    return (
        <SignInWrapper>
            <div>
                <NotificationBar/>
                <header className='headerSignUp px-3 py-2 d-flex justify-content-between align-items-center'>
                    <Link to={"/"}>
                        <img className='logo' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
                    </Link>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faHome} className="text-primary visible-hidden" />
                    </Link>
                </header>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className='card my-3 px-2 py-3'>
                        <h3>Sign in</h3>
                        <form  >
                            <input className='my-2' type="email"  placeholder='Your email' />   <br/>
                            <input className='my-2' type="password" placeholder='Your password' /> <br/>
                            <button className='btn btn-primary'>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </SignInWrapper>
    )
}

export default SignIn