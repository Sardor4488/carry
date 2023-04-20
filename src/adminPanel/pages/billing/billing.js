import React from 'react'
import BillingWrapper from './BilliingWrapper'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCaretDown, faCaretUp, faEdit, faExclamation, faTrash } from '@fortawesome/free-solid-svg-icons';

const Billing = () => {
  return (
    <BillingWrapper>
      <div className='p-3 billing'>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7">
            <div className='billing_informations my_card text-start p-3 w-100'>
              <h5 className='mb-4'>Billing Information</h5>
              <div className='billing_informations_card p-3 mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>Temirov Sardor</p>
                  <div className='d-flex '>
                    <Button color='' className='text-danger deleteBtn'><FontAwesomeIcon icon={faTrash} />Delete</Button>
                    <Button color='' className='text-success deleteBtn'><FontAwesomeIcon icon={faEdit} />Edit</Button>
                  </div>
                </div>
                <p className='text-secondary mb-0 '>Company name: <span className='fw-bold '> Carry</span></p>
                <p className='text-secondary mb-0 '>Email adres: <span className='fw-bold '> Carry@gmail.com</span></p>
                <p className='text-secondary mb-0 '>Vatt number: <span className='fw-bold '> FRB1235476</span></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className=' p-3 my_card text-start'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className=' mb-0'>Your Transaction's</h5>
                <p className='text-secondary mb-0'> <FontAwesomeIcon className='me-2' icon={faCalendar} />23 - 30 March 2020 </p>
              </div>
              <p className='text-secondary my-4'>NEWEST</p>
              <div className='informations_transaction d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon className='faCaretUp me-2' icon={faCaretUp} />
                  <div>
                    <p className='mb-0'>Netflix</p>
                    <p className='mb-0 text-secondary'>27 March 2020, at 12:30 PM</p>
                  </div>
                </div>
                <p className='text-success'>+ $100</p>
              </div>
              <div className='informations_transaction d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon className='faCaretDown me-2' icon={faCaretDown} />
                  <div>
                    <p className='mb-0'>Netflix</p>
                    <p className='mb-0 text-secondary'>27 March 2020, at 12:30 PM</p>
                  </div>
                </div>
                <p className='text-danger'>- $100</p>
              </div>
              <div className='informations_transaction d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon className='faExclamation me-2' icon={faExclamation} />
                  <div>
                    <p className='mb-0'>Netflix</p>
                    <p className='mb-0 text-secondary'>27 March 2020, at 12:30 PM</p>
                  </div>
                </div>
                <p className=''>Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BillingWrapper>
  )
}

export default Billing;