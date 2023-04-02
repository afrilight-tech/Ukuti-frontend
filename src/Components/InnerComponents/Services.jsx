import style from './assets/Css/Services.module.css'
import { FaLaptopCode, FaStar, FaPrayingHands, FaHouseDamage } from "react-icons/fa";
import { AiFillRead } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { GiSpeaker, GiGate } from "react-icons/gi";
import { IoIosConstruct } from "react-icons/io";
import { MdHealthAndSafety } from "react-icons/md";


function Services() {
    return (
        <div className={style.services} id="services">

            <div className={style.serviceIntroText}>
                <h3>My Services</h3>
                <div className={style.star}>
                    <hr />
                    <FaStar className={style.serviceIntroTextIcon} />
                    <hr />
                </div>
            </div>

            <div className={style.serviceInner}>
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <AiFillRead className={style.serviceBoxIcon} />
                    <h3>Proofreading and editing</h3>
                    <p>Professional proofreading and editing services.</p>
                </div>
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <BsPencilSquare className={style.serviceBoxIcon} />
                    <h3>Essay writing</h3>
                    <p>Expert essay writing and composition.</p>
                </div>
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <FaLaptopCode className={style.serviceBoxIcon} />
                    <h3>Technical writing</h3>
                    <p>Specialized technical writing and narratives.</p>
                </div>
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <GiSpeaker className={style.serviceBoxIcon} />
                    <h3>Public speaking</h3>
                    <p>Effective public speaking and presentations</p>
                </div>
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <FaPrayingHands className={style.serviceBoxIcon} />
                    <h3>Literary appreciation</h3>
                    <p>In-depth literary analysis and appreciation.</p>
                </div>
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <IoIosConstruct className={style.serviceBoxIcon} />
                    <h3>Sentence restructuring</h3>
                    <p>Expert sentence and paragraph restructuring.</p>
                </div>

            </div>


            <div className={style.serviceIntroText}>
                <h3>Other Services</h3>
                <div className={style.star}>
                    <hr />
                    <FaStar className={style.serviceIntroTextIcon} />
                    <hr />
                </div>
            </div>




            <div className={style.serviceInner}>
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <MdHealthAndSafety className={style.serviceBoxIcon} />
                    <h3>Natural health products</h3>
                    <p>Marketing of natural health supplements.</p>
                </div>
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <FaHouseDamage className={style.serviceBoxIcon} />
                    <h3>Estate agency</h3>
                    <p>Real estate agency and property connections.</p>
                </div>
                
                <div className={style.serviceBox} data-aos="fade-up" data-aos-duration="1200">
                    <AiFillRead className={style.serviceBoxIcon} />
                    <h3>Non-academic books</h3>
                    <p>Promotion of books on natural health, spirituality, morals and virtues, nature, and general interest.</p>
                </div>

            </div>

            

        </div>


    )
}

export default Services 