import style from '../assets/Css/Home.module.css'
import About from './InnerComponents/About';
import Services from './InnerComponents/Services';
import Hero from './InnerComponents/Hero';
import Faqs from './InnerComponents/Faqs';
import WhyMe from './InnerComponents/WhyMe';
import Contact from './InnerComponents/Contact';
import Education from './InnerComponents/Education';
// import * as Scroll from 'react-scroll';
// import { Link, Element } from 'react-scroll'
function Home() {
    return (
        <div className={style.homepage}>
            {/* hero section */}
            <Hero />

            {/* hero section ends */}





            {/* service */}

            <Services />

            {/* services end */}



            {/* about */}

            <About />

            {/* about */}

            {/* education */}

            <Education />

            {/* education */}

            {/* why me */}

            <WhyMe />

            {/* why me */}


            {/* faqs */}

            <Faqs />

            {/* faqs */}


            {/* contact */}

            <Contact />

            {/* contact */}






        </div>
    )
}

export default Home            