// import { Col, Container } from 'react-bootstrap'
import './About.css'
// import ArrowRight from './img/arrow-chemiclab.png'
import { AboutPromo } from './components/Section/AboutPromo/AboutPromo'
import { AboutCompany } from './components/Section/AboutCompany/AboutCompany'
import { Stats } from './components/Section/Stats/Stats'
import { WorkingProccess } from './components/Section/WorkingProccess/WorkingProccess'
import { Pricing } from './components/Section/Pricing/Pricing'
import { Skills } from './components/Section/Skills/Skills'
import { OurInstructors } from './components/Section/OurInstructors/OurInstructors'

export const About = () => {

    return (
        <>
            <AboutPromo />
            <AboutCompany />
            {/* <Stats /> */}
            <WorkingProccess />
            <Pricing />
            <Skills />
            <OurInstructors />
        </>
    )
}