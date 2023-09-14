import './Skills.css'

import { Col, Container } from 'react-bootstrap'


export const Skills = () => {

    return (
        <section className='skills'>
            <div className='skills_overlay' />
            <Container>
                <div className='skills_content'>
                    <h5>Наш опыт</h5>
                    <h2>Наши навыки и опыт</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolore aliqua.</p>
                </div>
                <div className='skills_stats'>
                    <Col lg={{span:6}}>
                        <div className='stats_left'>
                            <div className='progress_block'>
                                <span>Наши навыки и опыт</span>
                                <span className='value_progress' style={{width: '75%', "--time": "5s"}}>75%</span>
                                <div class='progress-bar'>
                                    <div class='progress' style={{maxWidth: '75%', "--time": "5s"}}></div>
                                </div>
                            </div>
                            <div className='progress_block'>
                                <span>Развитие навыков плавания</span>
                                <span className='value_progress' style={{width: '82%', "--time": "5s"}}>82%</span>
                                <div class='progress-bar'>
                                    <div class='progress' style={{maxWidth: '82%', "--time": "5s"}}></div>
                                </div>
                            </div>
                            <div className='progress_block'>
                                <span>Подготовка к соревнованиям</span>
                                <span className='value_progress' style={{width: '78%', "--time": "5s"}}>78%</span>
                                <div class='progress-bar'>
                                    <div class='progress' style={{maxWidth: '78%', "--time": "5s"}}></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{span:6}}>
                        <div className='stats_right'>
                            <div className='progress_block'>
                                <span>Восстановление после травм</span>
                                <span className='value_progress' style={{width: '75%', "--time": "5s"}}>75%</span>
                                <div class='progress-bar'>
                                    <div class='progress' style={{maxWidth: '75%', "--time": "5s"}}></div>
                                </div>
                            </div>
                            <div className='progress_block'>
                                <span>Учебные занятия для детей и взрослых</span>
                                <span className='value_progress' style={{width: '82%', "--time": "5s"}}>82%</span>
                                <div class='progress-bar'>
                                    <div class='progress' style={{maxWidth: '82%', "--time": "5s"}}></div>
                                </div>
                            </div>
                            <div className='progress_block'>
                                <span>Индивидуальных подход к каждому</span>
                                <span className='value_progress' style={{width: '78%', "--time": "5s"}}>78%</span>
                                <div class='progress-bar'>
                                    <div class='progress' style={{maxWidth: '78%', "--time": "5s"}}></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
                <div className='skills_news'>
                    <Col lg={{span:4}}>
                        <div className='news_content'>
                            <h2>Aquatic Swimming</h2>
                            <span>Jun 14, 2020</span>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore ut labore et dolore tempo incididunt...</p>
                            <a className='news_content_link'>Read More</a>
                        </div>
                    </Col>
                    <Col lg={{span:4}}>
                        <div className='news_content news_content_bg_white'>
                            <h2 className='news_content_text_black'>Aquatic Swimming</h2>
                            <span>Jun 14, 2020</span>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore ut labore et dolore tempo incididunt...</p>
                            <a className='news_content_link'>Read More</a>
                        </div>
                    </Col>
                    <Col lg={{span:4}}>
                        <div className='news_content news_content_bg_blue'>
                            <h2 className='news_content_text_white'>Aquatic Swimming</h2>
                            <span className='news_content_text_white'>Jun 14, 2020</span>
                            <p className='news_content_text_white'>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore ut labore et dolore tempo incididunt...</p>
                            <a className='news_content_link white_link'>Read More</a>
                        </div>
                    </Col>
                </div>
            </Container>
        </section>
    )
}