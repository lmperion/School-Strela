import { Feedback } from '../../components/Feedback/Feedback'
import './Course.css'
import { CoursePositive } from './components/Section/CoursePositive/CoursePositive'
import { CoursePromo } from './components/Section/CoursePromo/CoursePromo'
import { Lessons } from './components/Section/Lessons/Lessons'

export const Course = (props) => {  

    const {course, register, handleSubmit, hSubmit, errors} = props
    
    return (
        <div>
            <CoursePromo  imgPromo={course.imgPromo} title={course.title} />
            <CoursePositive training={course.training} text={course.text} positiveMoments={course.positiveMoments}/>
            <Lessons lessons={course.lessons}/>
            <Feedback register={register} handleSubmit={handleSubmit} hSubmit={hSubmit} errors={errors}/>
        </div>
    )
}