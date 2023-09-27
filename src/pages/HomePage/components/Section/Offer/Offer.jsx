import "./Offer.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { dataOffer } from "./data.Offer";


export const Offer = () => {

    return(
        <section className="offer">
            <div className="offer_overlay"/>
            <Container>
                    <div className="info_offer">
                        <Col lg={{ span: 12}}>
                            <div className="info_offer_navigation">
                                <h2>{dataOffer.mainHeader}</h2>
                                <div className="info_offer_list"> 
                                    {dataOffer.description.map((item) => {
                                        return (
                                            <div className="info_offer_panel">
                                                <a href="#">{item}</a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </Col>                    
                        {/* <Col lg={{ span: 5}}>        
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
                        </Col>   */}
                    </div>
            </Container>
        </section>
    )

}