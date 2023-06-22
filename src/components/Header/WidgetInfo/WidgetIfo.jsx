import './WidgetInfo.css'
import clsx from "clsx";

export const WidgetInfo = (props) => {
    const {isOpen, handleOpenWidget} = props;
    
    return (
        <div className='widget_info'>
            <div className={clsx({['widget_info_overlay']:true, ['widget_info_overlay_active']: isOpen})} onClick={() => handleOpenWidget(false)}/>
            <div className={clsx({['widget_info_descriprion']:true, ['widget_info_descriprion_active']: isOpen})}>
                <div className='widget_info_close'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="21" fill="#349BFF" onClick={() => handleOpenWidget(false)}>
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
                <div className={clsx({['widget_info_conteiner']:true, ['widget_info_conteiner_active']: isOpen})}>
                    <img src="https://templatekit.jegtheme.com/schwimm/wp-content/uploads/sites/233/2022/02/Logo1-9C2MC69-e1645056307906.png" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel risus imperdiet gravida justo adipiscing elit.</p>
                    <h4>Our Location</h4>
                    <ul className='widget_info_icons'>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" with="19" height="15" fill="#349BFF">
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                            </svg>
                            <span>Hayam Wuruk Street PB. 1190 Badung, Bali</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" with="19" height="15" fill="#349BFF">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                            <span>schwimm@support.com</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  with="19" height="15" fill="#349BFF">
                                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
                            </svg>
                            <span>+62 4321-234-11</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" with="19" height="15" fill="#349BFF">
                                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                            </svg>
                            <span>Everyday 08:00 AM - 19:00 PM</span>
                        </li>
                    </ul>
                    <h4>Social Media</h4>
                    <ul className="widget_info_social">
                        <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                        <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                        <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                        <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}