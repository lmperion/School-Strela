import "./AmazingVideo.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export const AmazingVideo = () => {

    return(
        <section className="amazing_video">
            <div className="amazing_video_overlay"/>
            <Container>
                <Col lg={{ span: 7}}> 
                <div className="amazing_video_info">
                    <h5>Amazing Video</h5>
                    <h2>Take A Look Some Our Documentation</h2>
                    <div className="amazing_video_span">
                        <span>Take By : Jason Markinson</span>
                        <span>Date : 21 August 2021</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc aliquam idesa nuncac convallis dictum nisi curabitur vehicula. </p>
                    <div className="amazing_video_media">
                        <img src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/male-swimming-coach-giving-girl-holding-float-one-to-one-lesson-in-pool-1024x682.jpg"/>
                        <a href="#" className="amazing_video_play"><span ></span></a>
                        <a href="#">Play Video</a>
                    </div>
                </div>
                </Col>
            </Container>
        </section>
    )

}