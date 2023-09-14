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
                            <h5>Есть какие-либо вопросы</h5>
                            <h2>Вступайте к нам в команду</h2>
                            <p>Мы знаем как сложно сделать первый шаг, но написав нам вы сделаете этот первый шаг и завтра уже научитесь плавать!</p>
                            <div className='contacts_info'>
                                <div className='contact'>
                                    <img className='location_img' src={Location} />
                                    <div className='contact_descripription'>
                                        <h2>Расположение</h2>
                                        <span>Hayam Wuruk Street PB. 1190 Badung, Bali</span>
                                    </div>
                                </div>
                                <div className='contact'>
                                    <img className='email_img' src={Email} />
                                    <div className='contact_descripription'>
                                        <h2>Электронная почта</h2>
                                        <span>schwimm@support.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className='contacts_info'>
                                <div className='contact'>
                                    <img className='phone_img' src={Phone} />
                                    <div className='contact_descripription'>
                                        <h2>Телефон</h2>
                                        <span> 8-906-055-40-13 </span>
                                    </div>
                                </div>
                                <div className='contact'>
                                    <img className='clock_img' src={Clock} />
                                    <div className='contact_descripription'>
                                        <h2>Часы работы</h2>
                                        <span>Каждый день с 7:00-23:00</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span:6 }}>
                            <div className='contacts_message'>
                                <h2>Оставьте сообщение</h2>
                                <p>Первый шаг всегда самый сложный, но мы сделали его для вас максимально простым. Запишитесь на нашем сайте всего за один клик и начните свой путь к достижению целей!</p>
                                <form onSubmit={handleSubmit((data) => hSubmit(data))}>
                                    <div className='input_blocks'>
                                        <div className='input_block indent_right'>
                                            <input name="Name" type='text' placeholder='Ваше имя' {...register('Name', {required:true})} className={clsx({['input_errors']: errors.Name})}/>
                                            {errors.Name && <span>This field is required.</span>}
                                        </div>
                                        <div className='input_block indent_left'>
                                            <input name="Email" type='email' placeholder='Ваша почта' {...register('Email', {required:true})} className={clsx({['input_errors']: errors.Email})}/>
                                            {errors.Email && <span>This field is required.</span>}
                                        </div>
                                    </div>
                                    <div className='input_blocks'>
                                        {/* <div className='input_block indent_right'>
                                            <input name='Subject' type='text' placeholder='Тема' {...register('Subject', {required:true})} className={clsx({['input_errors']: errors.Subject})}/>
                                            {errors.Subject &&  <span>This field is required.</span>}
                                        </div> */}
                                        {/* <div className='input_block indent_left'> */}
                                        <div className='input_block indent_right'>
                                            <input name='Phone' type='tel' placeholder='Ваш телефон' {...register('Phone', {required:true})} className={clsx({['input_errors']: errors.Phone})} />
                                            {errors.Phone &&  <span>This field is required.</span>}
                                        </div>
                                    </div>
                                    <textarea placeholder='Сообщение' {...register('Message')}/>
                                    <button className='btn' type='submit'>Send Message</button>
                                </form>
                            </div>
                        </Col>
                    </div>
                </Container>
            </section>
    )
}