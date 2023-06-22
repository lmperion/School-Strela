import './Stats.css'

import { Col, Container } from 'react-bootstrap'


export const Stats = () => {

    return (
        <section className='stats'>
            <Container>
                <div className='stats_content'>
                    <Col lg={{ span:3 }}>
                        <div className='stat'>
                            <span className='stat_number'>97</span>
                            <span className='stat_suffix'>%</span>
                            <p>Customer Satisfaction</p>
                        </div>
                    </Col>
                    <Col lg={{ span:3 }}>
                        <div className='stat'>
                            <span className='stat_number'>97</span>
                            <span className='stat_suffix'>%</span>
                            <p>Customer Satisfaction</p>
                        </div>
                    </Col>
                    <Col lg={{ span:3 }}>
                        <div className='stat'>
                            <span className='stat_number'>97</span>
                            <span className='stat_suffix'>%</span>
                            <p>Customer Satisfaction</p>
                        </div>
                    </Col>
                    <Col lg={{ span:3 }}>
                        <div className='stat'>
                            <span className='stat_number'>97</span>
                            <span className='stat_suffix'>%</span>
                            <p>Customer Satisfaction</p>
                        </div>
                    </Col>
                </div>
            </Container>
        </section>
    )
}