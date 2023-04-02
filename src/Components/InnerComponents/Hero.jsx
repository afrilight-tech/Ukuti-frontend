import style from './assets/Css/Hero.module.css'
import { Link } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Hero() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.heroSection} id="hero">


            {/* hero image color overlay */}

            <div className={style.heroImageOverlay}>
                <div className={style.heroImage}>

                </div>
            </div>


            {/* hero text */}

            <div className={style.heroText}>

                <div className={style.heroTextInner} data-aos="fade-right" data-aos-duration="1200">

                    <h3>Hi, <br /> I'm Ukuti Tuale Okoro.</h3>

                    <p>A proficient English speaker and writer with a love for language and literature.
                        <br /> I have a strong command of the English language - both British and <br /> American English.
                    </p>

                    <div className={style.heroTextButtons}>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><button className={style.knowMore}>Learn More</button></Link>
                    </div>

                </div>


            </div>


        </div>



    )
}

export default Hero