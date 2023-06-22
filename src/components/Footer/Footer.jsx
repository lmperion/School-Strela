import { Col, Container } from "react-bootstrap";
import "./footer.css"

function Footer(props) {
    const {register, handleSubmit, hSubmit, errors} = props

    return (
        <div className="footer">
            <div className="footer_overlay"/>
            <Container>
                <div className="footer_info">
                    <Col lg={{ span: 4}}>
                        <div className="banner_info">
                            <div className="banner_logo">
                                <img src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/Logo2-9C2MC69-e1645056314646.png"></img>
                            </div>
                            <p className="banner_description">
                                Sed ut perspiciatis unde omnis iste natus delavirot voluptatem accusantium doloremque laudanti totam.
                            </p>
                            <div>
                                <div className="banner_social_picture">
                                    <ul>
                                        <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                                        <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                                        <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                                        <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 4}}>
                        <div className="footer_info_links">
                            <div>
                                <h2 className="quick_links">Quick Links</h2>
                                <div className="quick_links_info">
                                    <ul>
                                        <li className="quick_links_item">
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="7.5px" height="12px" fill="#349BFF">
                                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                </svg>
                                                About
                                            </a>
                                        </li>
                                        <li className="quick_links_item">
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="7.5px" height="12px" fill="#349BFF">
                                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                </svg>
                                                Blog
                                            </a>
                                        </li>
                                        <li className="quick_links_item">
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="7.5px" height="12px" fill="#349BFF">
                                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                </svg>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h2 className="support">Support</h2>
                                <div className="support_info">
                                <ul>
                                        <li className="support_item">
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="7.5px" height="12px" fill="#349BFF">
                                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                </svg>
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="support_item">
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="7.5px" height="12px" fill="#349BFF">
                                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                </svg>
                                                Support
                                            </a>
                                        </li>
                                        <li className="support_item">
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="7.5px" height="12px" fill="#349BFF">
                                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                </svg>
                                                FAQ
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </Col>
                    <Col lg={{ span: 4}}>   
                        <div className="subscribe">
                            <h2 className="subscribe_header">Subscribe Our Newsletter</h2>
                            <p className="subscribe_descriprion">Здесь могла быть ваше реклама, но увы пока ее тут нет</p>
                            <form className="accept_subscribe" > 
                                <input name="Email" type='email' placeholder="Your Email"  required />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </Col>
                </div>
                <div className="footer_down"> Copyright © Schwimm 2021. All Rights Reserved.</div>
            </Container>
        </div>
    );
  }
  
export default Footer;
  