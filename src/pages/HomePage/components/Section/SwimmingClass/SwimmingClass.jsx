import "./SwimmingClass.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { SwimmingClassContentCard } from "./Card/swimmingClassContentCard";
import childrenImg from '../../../img/Children.jpg'
import personalImg from '../../../../Courses/images/personal.jpg'
import { dataСourse } from "./data.Class";

export const SwimmingClass = () => {

    const adultImg = "https://static.tildacdn.com/tild3462-6664-4564-b836-313032306665/road-trip-with-raj-k.jpg"
    
    return(
        <section className="swimming_class">
            <Container>
                <h5>Наши Курсы</h5>
                <h2>Стрела предлагает</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolore aliqua.</p> */}
                <div className="swimming_class_cards">
                    <Col lg={{span: 4}}>
                        <SwimmingClassContentCard 
                            imgCourse={childrenImg} 
                            path={"/course/children"} 
                            name={dataСourse.name.children} 
                            price={dataСourse.price.children} 
                            infoCourse={dataСourse.group}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <SwimmingClassContentCard 
                            imgCourse={adultImg} path={"/course/adult"} 
                            name={dataСourse.name.adult}
                            price={dataСourse.price.adult}
                            infoCourse={dataСourse.group}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <SwimmingClassContentCard 
                            imgCourse={personalImg} 
                            path={"/course/personal"} 
                            name={dataСourse.name.personality} 
                            price={dataСourse.price.personality} 
                            infoCourse={dataСourse.personality}
                        />
                    </Col>
                </div>
            </Container>
        </section>
    )

}