import React from 'react'
import BillingWrapper from './BilliingWrapper'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCaretDown, faCaretUp, faEdit, faExclamation, faTrash, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

const Billing = () => {
  return (
    <BillingWrapper>
      <div className='p-3 billing'>
        <div className="row py-3">
          <div className="col-7">
            <div className="credit_card text-start text-white p-4">
              <div>
                <FontAwesomeIcon icon={faWifi} className='mb-3' />
                <h5 className=''> 4562   1122   4594   7852</h5>
              </div>
              <div className='d-flex align-items-center justify-content-between informations_credit_card'>
                <div className='d-flex'>
                  <div>
                    <p className='text-secondary-card fw-bold mb-0'>Card Holder</p>
                    <h5 className='credit_card_info'>Temirov Sardor</h5>
                  </div>
                  <div className='ms-2'>
                    <p className='text-secondary-card fw-bold mb-0'>Expires</p>
                    <h5 className='credit_card_info'>11/22</h5>
                  </div>
                </div>

                <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png" className='credit_card_type' alt="" />
              </div>
            </div>
          </div>
          <div className="col-5 ">
            <div className='invoices_list p-3'>
              <div className='d-flex align-items-center justify-content-between'>
                <p className='text-secondary mb-0 fw-bold'>Invoices</p>
                <Button color='light'>Viev all</Button>
              </div>
              <div className='d-flex text-start align-items-center justify-content-between py-3'>
                <div>
                  <p className='mb-0 fw-bold text-secondary'>March, 01, 2020</p>
                  <span className='fa-sm text-secondary'>#MS-415646</span>
                </div>
                <div className='d-flex text-secondary fw-bold'>
                  <p className='me-3'>$180</p>
                  <span className='c_pointer'><FontAwesomeIcon icon={faFilePdf}/> PDF</span> 
                </div>
              </div>
              <div className='d-flex text-start align-items-center justify-content-between py-3'>
                <div>
                  <p className='mb-0 fw-bold text-secondary'>March, 01, 2020</p>
                  <span className='fa-sm text-secondary'>#MS-415646</span>
                </div>
                <div className='d-flex text-secondary fw-bold'>
                  <p className='me-3'>$180</p>
                  <span className='c_pointer'><FontAwesomeIcon icon={faFilePdf}/> PDF</span> 
                </div>
              </div>
            </div>
            
          </div>
        </div>
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