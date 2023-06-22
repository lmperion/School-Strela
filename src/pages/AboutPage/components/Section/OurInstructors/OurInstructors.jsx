import './OurInstructors.css'

import { Col, Container } from 'react-bootstrap'


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
                                    <img src='https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/instructor-of-swimming-CERPTLB.jpg' /> 
                                </div>
                                <div className='instructor_description'>
                                    <h2>Teddy Saunders</h2>
                                    <span>CEO Schwimm</span>
                                </div>
                                <ul className='social_list'>Тут будут соц.сети</ul>
                            </div>
                            <div className='instructor-right'>
                                <div className='instructor-img'>
                                    <div className='instructor_overlay' />
                                    <img src='https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/instructor-of-swimming-CERPTLB.jpg' /> 
                                </div>
                                <div className='instructor_description'>
                                    <h2>Teddy Saunders</h2>
                                    <span>CEO Schwimm</span>
                                </div>
                                <ul className='social_list'>Тут будут соц.сети</ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{span:5}}>
                        <div className='our_instructors_description'>
                            <h5>Our Instructors</h5>
                            <h2>Expert Instructors</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco incididunt magna aliqua veniam quis nostrud.</p>
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