import "./Promo.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export const Promo = () => {

    return(
        <section className="promo">
            <div className="promo_overlay"/>
            <Container>
                <Col lg={{ span: 10, offset: 2}}>
                    <div className="promo_info">
                        <h1 className="promo_tittle">We Make You A Next</h1>
                        <h1 className="promo_tittle"> Level Swimmer</h1>
                        <Col lg={{ span: 11, offset: 1}}>
                            <p className="promo_desription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                        </Col>
                    </div>
                </Col>
            </Container>
        </section>
    )

}