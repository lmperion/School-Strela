
import { Container } from 'react-bootstrap'
import './Lessons.css'
import { SwimmingClassContentCard } from '../../../../HomePage/components/Section/SwimmingClass/Card/swimmingClassContentCard'

export const Lessons = (props) => {  
    const {lessons} = props

    return (
        <section className='lessons'>
            <Container>
                {/* {lessons.map( lesson => {
                  return  <SwimmingClassContentCard lesson={lesson}/>
                })} */}
            </Container>
        </section>
    )
}