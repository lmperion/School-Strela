import "./PositiveComments.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';



export const PositiveComments = () => {

    return(
        <section className="positive_comments">
            <Container>
            <h5>Positive Comments</h5>
            <h2>Some Quotes From Our Students</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolore aliqua.</p>
            <div className="positive_comments_content">
                <div className="positive_comments_content_row"> 
                    <Col lg={{ span: 3}}>
                        <div className="row_img_1"></div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_img_2"></div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_comments">
                            <p>“Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna iscing.” </p>
                            <h2>Cheryl Butler</h2>
                        </div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_comments">
                            <p>“Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna iscing.”  </p>
                            <h2>Clive Weaver</h2>
                        </div>
                    </Col>
                </div>
                <div className="positive_comments_content_row"> 
                    <Col lg={{ span: 3}}>
                        <div className="row_comments">
                            <p>“Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna iscing.” </p>
                            <h2>Cheryl Butler</h2>
                        </div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_img_1"></div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_img_2"></div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_comments">
                            <p>“Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna iscing.”  </p>
                            <h2>Clive Weaver</h2>
                        </div>
                    </Col>
                </div>
                <div className="positive_comments_content_row"> 
                    <Col lg={{ span: 3}}>
                        <div className="row_comments">
                            <p>“Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna iscing.” </p>
                            <h2>Cheryl Butler</h2>
                        </div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_comments">
                            <p>“Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna iscing.”  </p>
                            <h2>Clive Weaver</h2>
                        </div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_img_1"></div>
                    </Col>
                    <Col lg={{ span: 3}}>
                        <div className="row_img_2"></div>
                    </Col>
                </div>
            </div>
            </Container>                                
        </section>
    )

}