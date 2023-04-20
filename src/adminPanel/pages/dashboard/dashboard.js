import React, { useEffect } from 'react'
import DashboardWrapper from './dashboardWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faHouse, faPersonCirclePlus, faUsers } from '@fortawesome/free-solid-svg-icons'
// import CanvasJSReact from 'canvasjs-react-charts';


const Dashboard = () => {

  return (
    <DashboardWrapper>
      <div className=' dashboard p-3'>
        <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
            <div className='imformation_card p-3 '>
              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <FontAwesomeIcon icon={faUsers} className='information_icon users_icon' />
                <div>
                  <span className='text-secondary'>Ussers </span>
                  <h5 className='text-end'>1K</h5>
                </div>
              </div>
              <p className='growth_number mb-0 mt-2'><span className='text-success'>5%</span> than yesterday</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className='imformation_card p-3 '>
              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <FontAwesomeIcon icon={faHouse} className='information_icon house_icon' />
                <div>
                  <span className='text-secondary'>Revenue </span>
                  <h5 className='text-end'>1K</h5>
                </div>
              </div>
              <p className='growth_number mb-0 mt-2'><span className='text-success'>5%</span> than yesterday</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className='imformation_card p-3 '>
              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <FontAwesomeIcon icon={faChartLine} className='information_icon' />
                <div>
                  <span className='text-secondary'>Today's users </span>
                  <h5 className='text-end'>1K</h5>
                </div>
              </div>
              <p className='growth_number mb-0 mt-2'><span className='text-success'>5%</span> than yesterday</p>
            </div>
          </div>
         
          <div className="col-12 col-md-6 col-lg-3">
            <div className='imformation_card p-3 '>
              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <FontAwesomeIcon icon={faPersonCirclePlus} className='information_icon person_icon' />
                <div>
                  <span className='text-secondary'> Today's Followers </span>
                  <h5 className='text-end'>1K</h5>
                </div>
              </div>
              <p className='growth_number mb-0 mt-2'><span className='text-success'>5%</span> than yesterday</p>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
          {/* <canvas ref={chartRef} /> */}
          </div>
        </div>
      </div>
    </DashboardWrapper>
  )
}

export default Dashboard