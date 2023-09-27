import "./Expertise.css"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState,useEffect } from "react";
import { dataExpertise } from "./data.expertise";


export const Expertise = () => {

    const [value, setValue] = useState(0);
    useEffect(() => {
    setValue(87);
    }, []);


    return(
        <section className="expertise">
            <div className="expertise_content_left">
                <h5>{dataExpertise.mainHeader}</h5>
                <h2>{dataExpertise.header}</h2>
                <p>{dataExpertise.description}</p>
                {/* <div className="expertise_content_info">
                    <div className="expertise_content_left_stats">
                        <div className="expertise_content_left_circularProgressbar">
                            <CircularProgressbar 
                                value={value}
                                text={`87%`}
                                strokeWidth={3}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    textColor: "white",
                                    pathColor: "#349BFF",
                                    trailColor: "none",
                                })}
                            />
                        </div>
                        <h2>Successful Swimmer</h2>
                        <p>Lorem ipsum dolor sit amet consectet adipiscing elit sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="expertise_content_right_stats">
                        <div className="expertise_content_right_circularProgressbar">
                            <CircularProgressbar
                                value={87}
                                text={`87%`}
                                strokeWidth={3}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    textColor: "white",
                                    pathColor: "#349BFF",
                                    trailColor: "none",
                                })}
                            />
                        </div>
                        <h2>Successful Swimmer</h2>
                        <p>Lorem ipsum dolor sit amet consectet adipiscing elit sed do eiusmod tempor incididunt.</p>
                    </div>
                </div> */}
                <a href="#">Записаться</a>
            </div>
            <div className="expertise_content_right">
            <div className="expertise_content_right_overlay"></div>
            {/* <div className="expertise_content_right_content">
                <h4>Ready To Embrace Your Future</h4>
                <p>Lorem ipsum dolor sit amet consecta tetur adipiscing elit. Utelit tellus luctus nec ullamcorper mattis pulvinar.</p>
                <a href="#">Read More</a>
            </div> */}
            </div>
        </section>
    )

}