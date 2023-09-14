import "./TypesSwimming.css"

import clsx from "clsx";

import Butterfly from "./../../../img/Butterfly.jpg"
import OnTheBack from "./../../../img/OnTheBack.jpg"
import Breaststroke from "./../../../img/Breaststroke.png"
import Crawl from "./../../../img/Crawl.jpg"

export const TypesSwimming = (props) => {
    const { handleChangeBackground, block } = props

    return(
        <section className="types_swimming">
            {/* <div className={clsx({['types_swimming_overlay']:true, [block]:true})}/> */}
            <img className={clsx({['types_swimming_overlay']:true, [block]:block=="bg-first"})} src={Butterfly}/>
            <img className={clsx({['types_swimming_overlay']:true, [block]:block=="bg-second"})} src={OnTheBack}/>
            <img className={clsx({['types_swimming_overlay']:true, [block]:block=="bg-third"})} src={Breaststroke}/>
            <img className={clsx({['types_swimming_overlay']:true, [block]:block=="bg-fourth"})} src={Crawl}/>
            <div className="type_swimming" onMouseEnter={() => handleChangeBackground("bg-first")}>
                <div className={clsx({["type_swimming_overlay"]: block=="bg-first"})}></div>
                <div className="type_swimming_content">
                    {/* <div className="type_swimming_content_overlay"></div> */}
                    <div className="type_swimming_content_overlay"></div>
                    <div><p>Баттерфляй</p></div>
                </div>
            </div>
            <div className="type_swimming" onMouseEnter={() => handleChangeBackground("bg-second")}>
                <div className={clsx({["type_swimming_overlay"]: block=="bg-second"})}></div>
                <div className="type_swimming_content">
                    <div className="type_swimming_content_overlay"></div>
                    <div><p>На спине</p></div>
                </div>
            </div>
            <div className="type_swimming" onMouseEnter={() => handleChangeBackground("bg-third")}>
                <div className={clsx({["type_swimming_overlay"]: block=="bg-third"})}></div>
                <div className="type_swimming_content">
                    <div className="type_swimming_content_overlay"></div>
                    <div><p>Брасс</p></div>
                </div>
            </div>
            <div className="type_swimming" onMouseEnter={() => handleChangeBackground("bg-fourth")}>
                <div className={clsx({["type_swimming_overlay"]: block=="bg-fourth"})}></div>
                <div className="type_swimming_content">
                    <div className="type_swimming_content_overlay"></div>
                    <div><p>Кроль</p></div>
                </div>
            </div>
        </section>
    )

}