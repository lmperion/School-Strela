import "./CourseCard.css"




export const CourseCard = (props) => {
    const {group, image} = props
    return(
        <section className="cardLesson">
            <div className="lesson">
                <div>
                    <img src={image}/>
                </div>
                <div className="lesson_description">
                    <h3>{group.header}</h3>
                    <ul className="text">
                    {group.description.map( text => {
                        return <li><p>{text}</p></li>
                    })}
                    </ul>
                </div>
            </div>
        </section>
    )

}