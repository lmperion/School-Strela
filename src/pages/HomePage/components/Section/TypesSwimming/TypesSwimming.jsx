import "./TypesSwimming.css"

import clsx from "clsx";


export const TypesSwimming = (props) => {
    const { handleChangeBackground, block } = props

    return(
        <section className="types_swimming">
            {/* <div className={clsx({['types_swimming_overlay']:true, [block]:true})}/> */}
            <img className={clsx({['types_swimming_overlay']:true, [block]:block=="bg-first"})} src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/little-boy-swimming-in-pool-kid-in-glass-learning-swim-by-crawls-sport-and-hardening--e1645056167205.jpg"/>
            <img className={clsx({['types_swimming_overlay']:true, [block]:block=="bg-second"})} src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/boy-dives-in-swimming-pool-with-swimming-glasses-boy-swims-in-the-pool-child-learning-to-swim-e1645056180244.jpg"/>
            <img className={clsx({['types_swimming_overlay']:true, [block]:block=="bg-third"})} src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/learning-to-swim-e1645056191792.jpg"/>
            <img className={clsx({['types_swimming_overlay']:true, [block]:block=="bg-fourth"})} src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/children-learning-to-swim-1-e1645056204280.jpg"/>
            <div className="type_swimming" onMouseEnter={() => handleChangeBackground("bg-first")}>
                <div className={clsx({["type_swimming_overlay"]: block=="bg-first"})}></div>
                <div className="type_swimming_content">
                    {/* <div className="type_swimming_content_overlay"></div> */}
                    <div className="type_swimming_content_overlay"></div>
                    <div><p>Back Crawl Stroke</p></div>
                </div>
            </div>
            <div className="type_swimming" onMouseEnter={() => handleChangeBackground("bg-second")}>
                <div className={clsx({["type_swimming_overlay"]: block=="bg-second"})}></div>
                <div className="type_swimming_content">
                    <div className="type_swimming_content_overlay"></div>
                    <div><p>Back Crawl Stroke</p></div>
                </div>
            </div>
            <div className="type_swimming" onMouseEnter={() => handleChangeBackground("bg-third")}>
                <div className={clsx({["type_swimming_overlay"]: block=="bg-third"})}></div>
                <div className="type_swimming_content">
                    <div className="type_swimming_content_overlay"></div>
                    <div><p>Back Crawl Stroke</p></div>
                </div>
            </div>
            <div className="type_swimming" onMouseEnter={() => handleChangeBackground("bg-fourth")}>
                <div className={clsx({["type_swimming_overlay"]: block=="bg-fourth"})}></div>
                <div className="type_swimming_content">
                    <div className="type_swimming_content_overlay"></div>
                    <div><p>Back Crawl Stroke</p></div>
                </div>
            </div>
        </section>
    )

}