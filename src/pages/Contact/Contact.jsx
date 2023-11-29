// import { Col, Container } from 'react-bootstrap'
// import clsx from 'clsx';

import './Contact.css'
// import Clock from './icons/Clock.png'
// import Email from './icons/Email.png'
// import Location from './icons/Location.png'
// import Phone from './icons/Phone.png'
import { Feedback } from '../../components/Feedback/Feedback';

export const Contact = (props) => {
    const {register, handleSubmit, hSubmit, errors} = props
    console.log("errors", errors)
    return (
        <>
            <section className="contact_promo">
                <div className="contact_promo_overlay"></div>
                <div className="contact_promo_content">
                    <h2>Контакты</h2>
                    <div>
                        <span>Домашняя</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="9px" height="14px" fill="#349BFF">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                        <span>Контакты</span>
                    </div>
                </div>
            </section>
            <Feedback  register={register} handleSubmit={handleSubmit} hSubmit={hSubmit} errors={errors}/>
            <section className='iframe_map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d561.944818385049!2d37.809278129563!3d55.71020838356831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab5e081ff2673%3A0x3a99faa1857a53b6!2z0KHQvtGA0LzQvtCy0YHQutCw0Y8g0YPQuy4sIDEwINC60L7RgNC_0YPRgSAxLCDQnNC-0YHQutCy0LAsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTQzNDM!5e0!3m2!1sru!2sru!4v1681158140524!5m2!1sru!2sru" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
}