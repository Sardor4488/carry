import React from 'react'
import { Button } from 'reactstrap'
import SignUpAdminWrapper from './signUpAdminWrapper'

const SignUpAdmin = () => {
    
  return (
<SignUpAdminWrapper>
<div className='login_admin'>
    <div className="container">
        <div className='card p-5'>
            <h3 className='text-center'>Sign up</h3>
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
</SignUpAdminWrapper>  )
}

export default SignUpAdmin 