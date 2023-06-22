import "./AboutCompany.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export const AboutCompany = () => {

    return(
        <section className="about_company">
            <Container className="about_company_container">
                <Col lg={{ span: 6}}>
                    <div className="left_description">
                        <div className="courses">
                            {/* <div className="courses_image"> */}
                                <img src="https://sun9-5.userapi.com/impg/27SyapI3ktLPB7lTrpMBeVyZ7erpdObpQ3Fkcw/daIbdqoHodA.jpg?size=256x201&quality=96&sign=94e34f6911f3418549f40723aa22aef9&type=album"/>
                            {/* </div> */}
                            <div className="courses_description">
                                <h3>Swimming Courses</h3>
                                <p>Lorem ipsum dolor sit amet consect adipiscing elit sed do eiusmod elit.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="courses_info">
                            <div className="info_instructor">
                                <div className="info_instructor_header">
                                    <img src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/WHISTLE.png"/>
                                    <h3>Swim Insturctor</h3>
                                </div>
                                <p>Lorem ipsum dolor ametsare consect adipiscing elitpero eiusmod tempor.</p>
                                <a href="#">Read More</a>
                            </div>
                            <div className="info_instructor">
                                <div className="info_instructor_header">
                                    <img src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/WHISTLE.png"/>
                                    <h3>Swim Insturctor</h3>
                                </div>
                                <p>Lorem ipsum dolor ametsare consect adipiscing elitpero eiusmod tempor.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={{ span: 6}}>
                    <div className="right_description">
                        <h5>About Schwimm</h5>
                        <h2>Enjoy Your Learning To Swim Together</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <div className="positive_moments">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px" fill="#349BFF">
                                        <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/>
                                    </svg>
                                    <p>Modern Methods</p>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px" fill="#349BFF">
                                        <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/>
                                    </svg>
                                    <p>Modern Methods</p>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px" fill="#349BFF">
                                        <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/>
                                    </svg>
                                    <p>Modern Methods</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px" fill="#349BFF">
                                        <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/>
                                    </svg>
                                    <p>Modern Methods</p>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px" fill="#349BFF">
                                        <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/>
                                    </svg>
                                    <p>Modern Methods</p>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px" fill="#349BFF">
                                        <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/>
                                    </svg>
                                    <p>Modern Methods</p>
                                </li>
                            </ul>
                        </div>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
            </Container>
        </section>
    )

}