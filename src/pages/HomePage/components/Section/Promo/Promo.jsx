import "./Promo.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { dataPromo } from "./data.promo";


export const Promo = () => {

    return(
        <section className="promo">
            <div className="promo_overlay"/>
            <Container>
                <Col lg={{ span: 10, offset: 2}}>
                    <div className="promo_info">
                        <h1 className="promo_tittle"> {dataPromo.mainText}</h1>
                        {/* <h1 className="promo_tittle"> Level Swimmer</h1> */}
                        <Col lg={{ span: 11, offset: 1}}>
                            <p className="promo_desription">{dataPromo.description} </p>
                        </Col>
                    </div>
                </Col>
            </Container>
        </section>
    )

}