import React from 'react'
import LoginAdminWrapper from './loginAdminWrapper'
import { Button } from 'reactstrap'

const LoginAdmin = () => {
    
  return (
<LoginAdminWrapper>
<div className='login_admin'>
    <div className="container">
        <div className='card p-5'>
            <h3 className='text-center'>LOGIN</h3>
            <form action="submit" className='text-start'>
               <div className='mb-3 '>
               <label className='p' for="email">email</label> <br/>
                <input type="email" id='email' />
               </div>
                <div className='mb-3'>
                <label className='p' for="password">password</label> <br/>
                <input type="password" id='password' className=''/> 
                </div>
                <Button color='primary'>submit</Button>
            </form>
        </div>
    </div>
</div>
</LoginAdminWrapper>  )
}

export default LoginAdmin