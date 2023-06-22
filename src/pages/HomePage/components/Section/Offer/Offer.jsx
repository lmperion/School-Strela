import "./Offer.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export const Offer = () => {

    return(
        <section className="offer">
            <div className="offer_overlay"/>
            <Container>
                    <div className="info_offer">
                        <Col lg={{ span: 7}}>
                            <div className="info_offer_navigation">
                                <h2>Great Offer</h2>
                                <div className="info_offer_list"> 
                                    <div className="info_offer_panel">
                                        <a href="#">Swimm Lesson</a>
                                    </div>
                                    <div className="info_offer_panel">
                                        <a href="#">Qualified Place</a>
                                    </div>
                                    <div className="info_offer_panel">
                                        <a href="#">Unique School</a>
                                    </div>
                                    <div className="info_offer_panel">
                                        <a href="#">Great Team</a>
                                    </div>
                                </div>
                            </div>
                        </Col>                    
                        <Col lg={{ span: 5}}>        
                            <div className="info_offer_stats">
                                <div className="info_offer_stats_students">
                                    <div className="stats_number">
                                        <p>753</p>
                                        <span>+</span>
                                    </div>
                                    <p className="titte_students">Student Swim</p>
                                </div>
                                <div className="info_offer_stats_trainer">
                                    <div className="stats_number">
                                        <p>68</p>
                                        <span>+</span>
                                    </div>
                                    <p className="titte_trainer">Expert Trainer</p>
                                </div>
                            </div>
                        </Col>  
                    </div>
            </Container>
        </section>
    )

}