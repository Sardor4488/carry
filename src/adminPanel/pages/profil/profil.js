import React from 'react'
import ProfilWrapper from './profilWrapper'
import backgraundImg from "./bg-profile.af1219a742e09fc7b612.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'react-bootstrap'
const Profil = () => {
    return (
        <ProfilWrapper>
            <div className='profil p-3'>
                <div className='stil_bg_img'>

                    <div className='my_card p-3 pb-5'>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center '>
                                <img className='img_user me-3' src={backgraundImg} alt="" />
                                <div>
                                    <h5 className='mb-0'>Richard Davis</h5>
                                    <p className='text-secondary mb-0'>CEO / Co-Founder</p>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 col-md-4 ">
                                <div class="profil_informations text-start px-3 pb-5">
                                    <div className='d-flex align-items-center  fw-bold justify-content-between'>
                                        <p className='text-secondary mb-0'>Profile Information</p>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </div>
                                    <p class="about_admin my-3">
                                        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                    </p>
                                    <p className='mb-0'><span className='text-secondary fw-bold'>Full Name: </span> Temirov Sardorder</p>
                                    <p className='mb-0'><span className='text-secondary fw-bold'>Mobile tel: </span> +998 99 640 4771</p>
                                    <p className='mb-0'><span className='text-secondary fw-bold'>email adres: </span> sardortemirov84@gmail.com</p>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 ">
                                <div className='mb-3'>
                                    <p className='text-start fw-bold text-secondary'>Conversations</p>
                                    <div className='d-flex align-items-center justify-content-between mb-3 w-100'>
                                        <div className='d-flex align-items-center'>
                                            <img className='img_user_litle me-3' src={backgraundImg} alt="" />
                                            <div className='text-start'>
                                                <h5 className='mb-0 name_user'>Richard Davis</h5>
                                                <p className='text-secondary notifi_user mb-0'>I neeed help</p>
                                            </div>
                                        </div>
                                        <Button color="primary" className='p-1 px-3'>Reply</Button>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between mb-3 w-100'>
                                        <div className='d-flex align-items-center'>
                                            <img className='img_user_litle me-3' src={backgraundImg} alt="" />
                                            <div className='text-start'>
                                                <h5 className='mb-0 name_user'>Richard Davis</h5>
                                                <p className='text-secondary notifi_user mb-0'>Have a great afternoon..</p>
                                            </div>
                                        </div>
                                        <Button color="primary" className='p-1 px-3'>Reply</Button>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between mb-3 w-100'>
                                        <div className='d-flex align-items-center'>
                                            <img className='img_user_litle me-3' src={backgraundImg} alt="" />
                                            <div className='text-start'>
                                                <h5 className='mb-0 name_user'>Richard Davis</h5>
                                                <p className='text-secondary notifi_user mb-0'>About files I can..</p>
                                            </div>
                                        </div>
                                        <Button color="primary" className='p-1 px-3'>Reply</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfilWrapper>)
}

export default Profil