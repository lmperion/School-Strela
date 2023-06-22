import { Col, Container } from 'react-bootstrap'
import clsx from 'clsx';

import './Feedback.css'
import Clock from './icons/Clock.png'
import Email from './icons/Email.png'
import Location from './icons/Location.png'
import Phone from './icons/Phone.png'

export const Feedback = (props) => {
    const {register, handleSubmit, hSubmit, errors} = props
    console.log("errors", errors)
    return (
            <section className='contacts'>
                <Container>
                    <div className='contacts_content'>
                        <Col lg={{ span:6 }}>
                            <h5>Got Any Questions</h5>
                            <h2>Get In Touch</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='contacts_info'>
                                <div className='contact'>
                                    <img className='location_img' src={Location} />
                                    <div className='contact_descripription'>
                                        <h2>Location</h2>
                                        <span>Hayam Wuruk Street PB. 1190 Badung, Bali</span>
                                    </div>
                                </div>
                                <div className='contact'>
                                    <img className='email_img' src={Email} />
                                    <div className='contact_descripription'>
                                        <h2>Email</h2>
                                        <span>schwimm@support.com | schwimm@domain.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className='contacts_info'>
                                <div className='contact'>
                                    <img className='phone_img' src={Phone} />
                                    <div className='contact_descripription'>
                                        <h2>Phone</h2>
                                        <span>+62-478-2240-190 | (021)-123-56789</span>
                                    </div>
                                </div>
                                <div className='contact'>
                                    <img className='clock_img' src={Clock} />
                                    <div className='contact_descripription'>
                                        <h2>Work Hours</h2>
                                        <span>Everyday 08:00 AM - 18:00 PM | Sun : Closed</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span:6 }}>
                            <div className='contacts_message'>
                                <h2>Leave A Message</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt utlabore.</p>
                                <form onSubmit={handleSubmit((data) => hSubmit(data))}>
                                    <div className='input_blocks'>
                                        <div className='input_block indent_right'>
                                            <input name="Name" type='text' placeholder='Your Name' {...register('Name', {required:true})} className={clsx({['input_errors']: errors.Name})}/>
                                            {errors.Name && <span>This field is required.</span>}
                                        </div>
                                        <div className='input_block indent_left'>
                                            <input name="Email" type='email' placeholder='Your Email' {...register('Email', {required:true})} className={clsx({['input_errors']: errors.Email})}/>
                                            {errors.Email && <span>This field is required.</span>}
                                        </div>
                                    </div>
                                    <div className='input_blocks'>
                                        <div className='input_block indent_right'>
                                            <input name='Subject' type='text' placeholder='Subject' {...register('Subject', {required:true})} className={clsx({['input_errors']: errors.Subject})}/>
                                            {errors.Subject &&  <span>This field is required.</span>}
                                        </div>
                                        <div className='input_block indent_left'>
                                            <input name='Phone' type='tel' placeholder='Your Phone' {...register('Phone', {required:true})} className={clsx({['input_errors']: errors.Phone})} />
                                            {errors.Phone &&  <span>This field is required.</span>}
                                        </div>
                                    </div>
                                    <textarea placeholder='Message' {...register('Message')}/>
                                    <button className='btn' type='submit'>Send Message</button>
                                </form>
                            </div>
                        </Col>
                    </div>
                </Container>
            </section>
    )
}