import './AboutPromo.css'


export const AboutPromo = () => {

    return (
            <section className="about_promo">
                <div className="about_promo_overlay"></div>
                <div className="about_promo_content">
                    <h2>О нас</h2>
                    <div>
                        <span>Домашняя</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="9px" height="14px" fill="#349BFF">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                        <span>О нас</span>
                    </div>
                </div>
            </section>
    )
}