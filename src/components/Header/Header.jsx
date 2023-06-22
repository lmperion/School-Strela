import { Link } from "react-router-dom";
import "./header.css"
import clsx from "clsx";

// document.body.onscroll = function() {
//     if (window.pageYOffset > 100) {
//         const tagLi=document.querySelectorAll('.header_list')
//         tagLi.querySelectorAll("a").classList.add('black')
//         console.log("test10", tagLi)
//         console.log("test1", window.pageYOffset)
//     } else {
//         // document.querySelector('.header_list').classList.remove('black')
//         console.log("test2", window.pageYOffset)
//     }
//     // document.querySelector('.header_area').classList.add('green')
//   }


function Header(props) {
    const {scroll, handleOpenWidget} = props


    return (
      <header className="header">
        <div className="header_logo">
            <Link to="/"><img src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/Logo2-9C2MC69-e1645056314646.png"/></Link>
        </div>
        <div className={clsx({["header_navigation"]:true, ["header_navigation_bg"]: scroll})}>
            <nav>
            <ul className="header_list_navigation">
                <li className="header_list">
                    <Link to="/"> Home </Link>
                </li>
                <li className="header_list">
                    <Link to="/about"> About </Link>
                </li>
                <li className="header_list">
                    <Link to="/contacts"> Contacts </Link>
                </li>
                <li className="header_panel_list_arrow">
                    <a href="#" className="header_panel_link">
                        Курсы
                        {/* <div> */}
                            {/* <img src="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.0.0/img/angle-arrow-down-white.svg"></img> */}
                            <svg fill="white" height="15px" width="15px"  viewBox="0 0 330 330" >
                                <path id="XMLID_102_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                            </svg>
                        {/* </div> */}
                    </a> 
                    <ul className="drop_panel">
                          <li><Link to="/course/children">Детские</Link></li>
                          <li><Link to="/course/adult">Взрослые</Link></li>
                          <li><Link to="/course/personal">Персональные</Link></li>
                    </ul>
                </li>
                <li className="header_panel_list_arrow">
                    <a href="#" className="header_panel_link">
                        Home
                        {/* <div> */}
                            {/* <img src="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.0.0/img/angle-arrow-down-white.svg"></img> */}
                            <svg fill="white" height="15px" width="15px"   viewBox="0 0 330 330" >
                                <path id="XMLID_102_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                            </svg>
                        {/* </div> */}
                    </a> 
                    <ul className="drop_panel">
                          <li><a href="#">Какой-то текст</a></li>
                    </ul>
                </li>
            </ul>
            </nav>
            <div className="social_picture">
                <ul>
                    <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                    <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                    <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                    <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                </ul>
            </div>
        </div>
        <div className="header_panel_widget" onClick={() => handleOpenWidget(true)}>
            <svg  width="26" height="27" viewBox="0 0 512 512" >
                <g transform="translate(0,512) scale(0.1,-0.1)"
                fill="white" stroke="none">
                <path d="M162 5025 c-61 -27 -62 -35 -62 -521 0 -485 0 -488 65 -518 50 -24
                890 -24 940 0 65 30 65 33 65 518 0 489 -1 495 -64 521 -51 22 -895 21 -944 0z"/>
                <path d="M2113 5024 c-64 -32 -64 -34 -61 -533 l3 -451 33 -32 32 -33 451 -3
                c396 -2 454 -1 484 13 65 31 65 34 65 519 0 489 -1 495 -64 521 -54 23 -897
                22 -943 -1z"/>
                <path d="M4021 5023 c-60 -30 -61 -35 -61 -519 0 -485 0 -488 65 -518 28 -14
                92 -16 464 -16 463 0 480 2 515 51 14 21 16 75 16 486 l0 463 -29 32 -29 33
                -454 2 c-407 3 -456 1 -487 -14z"/>
                <path d="M161 3083 c-60 -30 -61 -35 -61 -519 0 -485 0 -488 65 -518 50 -24
                890 -24 940 0 65 30 65 33 65 519 0 388 -2 441 -17 472 -29 63 -33 63 -520 63
                -388 0 -442 -2 -472 -17z"/>
                <path d="M2113 3084 c-62 -31 -63 -35 -63 -519 0 -486 0 -489 65 -519 28 -14
                93 -16 470 -16 488 0 494 1 521 66 21 50 20 889 -1 940 -26 63 -32 64 -522 64
                -377 0 -442 -3 -470 -16z"/>
                <path d="M4023 3084 c-62 -31 -63 -35 -63 -519 0 -486 0 -489 65 -519 48 -23
                891 -24 935 -1 62 32 60 15 60 522 l0 463 -29 32 -29 33 -454 2 c-396 3 -457
                1 -485 -13z"/>
                <path d="M152 1144 c-52 -36 -52 -40 -52 -514 0 -372 2 -446 15 -470 32 -62
                15 -60 520 -60 505 0 488 -2 520 60 21 42 22 883 1 934 -28 68 -10 66 -521 66
                -401 0 -463 -2 -483 -16z"/>
                <path d="M4011 1144 c-49 -35 -51 -52 -51 -514 0 -462 2 -479 51 -514 21 -14
                74 -16 477 -16 491 0 495 0 520 55 19 41 17 917 -2 954 -27 50 -33 51 -519 51
                -402 0 -455 -2 -476 -16z"/>
                <path d="M2101 1124 c-49 -35 -51 -52 -51 -514 0 -462 2 -479 51 -514 21 -14
                75 -16 486 -16 l463 0 32 29 33 29 0 472 0 472 -33 29 -32 29 -463 0 c-411 0
                -465 -2 -486 -16z"/>
                </g>
            </svg>
        </div>
      </header>
    );
  }
  
export default Header;