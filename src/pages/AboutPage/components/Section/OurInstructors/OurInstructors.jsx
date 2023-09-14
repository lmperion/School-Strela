import './OurInstructors.css'

import { Col, Container } from 'react-bootstrap'
import { dataOurInstructors } from './data.OurInstructors'

import Ivan from './../../../img/Ivan.jpg'
import Artem from './../../../img/Tema.jpg'


export const OurInstructors = () => {

    return (
        <section className='our_instructors'>
            <Container>
                <div className='our_instructors_content'>
                    <Col lg={{span:7}}>
                        <div className='instructors'>
                            <div className='instructor_left'>
                                <div className='instructor-img'>
                                    <div className='instructor_overlay' />
                                    <img src={Ivan} alt='Ivan'/> 
                                </div>
                                <div className='instructor_description'>
                                    <h2>{dataOurInstructors.Ivan.name}</h2>
                                    <span>{dataOurInstructors.Ivan.who}</span>
                                </div>
                                <ul className='social_list'>{dataOurInstructors.Ivan.discription}</ul>
                            </div>
                            <div className='instructor-right'>
                                <div className='instructor-img'>
                                    <div className='instructor_overlay' />
                                    <img src={Artem} alt='Tema'/> 
                                </div>
                                <div className='instructor_description'>
                                    <h2>{dataOurInstructors.Artem.name}</h2>
                                    <span>{dataOurInstructors.Artem.who}</span>
                                </div>
                                <ul className='social_list'>{dataOurInstructors.Artem.discription}</ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{span:5}}>
                        <div className='our_instructors_description'>
                            <h5>{dataOurInstructors.mainHeader}</h5>
                            <h2>{dataOurInstructors.header}</h2>
                            <p>{dataOurInstructors.description}</p>
                            <span>Request To Join</span>
                            <form className="accept_subscribe" > 
                            <input name="Email" type='email' placeholder="Your Email"  required />
                            <button type="submit">Subscribe</button>
                        </form>
                        </div>
                    </Col>
                </div>
            </Container>
        </section>
    )
}