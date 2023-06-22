import "./SwimmingClass.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { SwimmingClassContentCard } from "./Card/swimmingClassContentCard";


export const SwimmingClass = () => {
    
    const childrenImg = "https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/swimming-lesson-cute-little-boy-learning-to-swim-with-swimming-e1645056033557.jpg"
    const adultImg = "https://static.tildacdn.com/tild3462-6664-4564-b836-313032306665/road-trip-with-raj-k.jpg"
    const personalImg = "https://static.tildacdn.com/tild3733-6363-4239-b138-333731613637/quino-al-giA2Bj1AsZA.jpg"

    return(
        <section className="swimming_class">
            <Container>
                <h5>Our Special Offer</h5>
                <h2>Swimming Class For You</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolore aliqua.</p>
                <div className="swimming_class_cards">
                    <Col lg={{span: 4}}>
                        <SwimmingClassContentCard imgCourse={childrenImg} path={"/course/children"}/>
                    </Col>
                    <Col lg={{span: 4}}>
                        <SwimmingClassContentCard imgCourse={adultImg} path={"/course/adult"}/>
                    </Col>
                    <Col lg={{span: 4}}>
                        <SwimmingClassContentCard imgCourse={personalImg} path={"/course/personal"}/>
                    </Col>
                </div>
            </Container>
        </section>
    )

}