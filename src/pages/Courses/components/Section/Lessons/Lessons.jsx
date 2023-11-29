
import { Col, Container } from 'react-bootstrap'

import './Lessons.css'
import { CourseCard } from '../CourseCard/CourseCard'
import fourYear from './../../../images/3-4.jpg'
import sixYear from './../../../images/5-6.png'
import nineYear from './../../../images/7-9.jpg'
import fourteenYear from './../../../images/10-14.jpg'
import seventeenYear from './../../../images/15-17.png'
import noob from './../../../images/noobs.jpg'
import amatuer from './../../../images/amatuer.jpg'
import pro from './../../../images/pro.jpg'
import personal from './../../../images/personal.jpg'
import split from './../../../images/split.jpg'



const getImage = (type) => {
    switch(type) {
      case '3-4 года':
        return fourYear;
      case '5-6 лет':
        return sixYear;
      case '7-9 лет':
        return nineYear;
      case '10-14 лет':
        return fourteenYear;
      case '15-17 лет':
        return seventeenYear;
      case 'Новички':
        return noob;
      case 'Любители':
        return amatuer;
      case 'Профессионалы':
        return pro;
      case 'Персональная тренировка':
        return personal;
      case 'Сплит тренировка':
        return split;
      default: return ;
    }
  };


export const Lessons = (props) => {  
    const {groups} = props

    return (
        <section className='groups'>
            <Container className='container'>
                {groups.map( group => {
                  return ( 
                    // <Col lg={{ span: 6}} className='item-card'>
                        <CourseCard group={group} image={getImage(group.header)}/>
                    // </Col>
                  )
                })}
            </Container>
        </section>
    )
}