import "./LastNewsContent.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export const LastNewsContent = () => {

    return(
        <section className="last_news">
            <Container>
                <h5>Последние новости</h5>
                <h2>Новости и обновления для Вас</h2>
                <div className="last_news_content">
                    <Col lg={{ span: 4 }}>
                        <div className="last_news_link">
                            <a href="#">
                                <img src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/shirtless-boys-swimming-in-pool-e1645056247642.jpg"/>
                                <span>Student</span>
                                <h3>Equipments Arrived Equipments Will Find On Schwimm Store</h3>
                            </a>
                        </div>
                        <div className="last_news_span">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px" height="15px" fill="#BAC1C4">
                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                        </svg>
                        <span>February 14, 2022</span>
                        </div>
                        <p className="last_news_description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                        <a href="#" className="last_news_info_link">Read More</a>
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <div className="last_news_link">
                            <a href="#">
                                <img src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/shirtless-boys-swimming-in-pool-e1645056247642.jpg"/>
                                <span>Student</span>
                                <h3>Equipments Arrived Equipments Will Find On Schwimm Store</h3>
                            </a>
                        </div>
                        <div className="last_news_span">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px" height="15px" fill="#BAC1C4">
                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                            </svg>
                            <span>February 14, 2022</span>
                        </div>
                        <p className="last_news_description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                        <a href="#" className="last_news_info_link">Read More</a>
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <div className="recent_news">
                            <h2>Recent News</h2>
                            <div className="recent_news_link">
                                <a href="#">
                                    <p>Last Year Moments We’re Choosing To Celebrate</p>
                                    <div className="recent_news_date">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px" height="15px" fill="#5C6575">
                                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                                        </svg>
                                        <span>February 14, 2022</span> 
                                    </div>
                                </a>
                            </div>
                            <div className="recent_news_link">
                                <a href="#">
                                    <p>Last Year Moments We’re Choosing To Celebrate</p>
                                    <div className="recent_news_date">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px" height="15px" fill="#5C6575">
                                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                                        </svg>
                                        <span>February 14, 2022</span> 
                                    </div>
                                </a>
                            </div>
                            <div className="recent_news_link">
                                <a href="#">
                                    <p>Last Year Moments We’re Choosing To Celebrate</p>
                                    <div className="recent_news_date">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px" height="15px" fill="#5C6575">
                                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                                        </svg>
                                        <span>February 14, 2022</span> 
                                    </div>
                                </a>
                            </div>
                            <a className="recent_news_button" href="#">Load More</a>
                        </div>
                    </Col>
                </div>
            </Container>
        </section>
    )

}