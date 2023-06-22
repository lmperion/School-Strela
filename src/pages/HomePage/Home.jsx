import "./Home.css"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import { SwimmingClassContentCard } from "./components/swimmingClassContentCard";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import clsx from "clsx";
// import { useState,useEffect } from "react";
import { Promo } from "./components/Section/Promo/Promo";
import { Offer } from "./components/Section/Offer/Offer";
import { AboutCompany } from "./components/Section/AboutCompany/AboutCompany";
import { AmazingVideo } from "./components/Section/AmazingVideo/AmazingVideo";
import { SwimmingClass } from "./components/Section/SwimmingClass/SwimmingClass";
import { Expertise } from "./components/Section/Expertise/Expertise";
import { PositiveComments } from "./components/Section/PositiveComments/PositiveComments";
import { TypesSwimming } from "./components/Section/TypesSwimming/TypesSwimming";
import { LastNewsContent } from "./components/Section/LastNewsContent/LastNewsContent";

export const Home = (props) => {    
    const { handleChangeBackground, block } = props

    // const [value, setValue] = useState(0);
    // useEffect(() => {
    // setValue(87);
    // }, []);

    return (
        <>
            <Promo />
            <Offer />
            <AboutCompany />
            <AmazingVideo />
            <SwimmingClass />
            <Expertise />
            <PositiveComments />
            <TypesSwimming handleChangeBackground={handleChangeBackground} block={block}/>
            <LastNewsContent />
        </>     
    )
}