import style from './assets/Css/FormSent.module.css'
import { FaLaptopCode, FaStar, FaPrayingHands, FaCheck } from "react-icons/fa";
import { AiFillRead } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { GiSpeaker } from "react-icons/gi";
import { IoIosConstruct } from "react-icons/io";


function FormSent({name}) {
    return (
        <div className={style.formSent} data-aos="fade-down" data-aos-duration="1200">
            <div className={style.formSentBox}>
                <FaCheck className={style.formSentIcon} />
                <p>Thank you {name}, your reply have been sent!. I will get back to you soon.</p>
            </div>
        </div>
    )
}

export default FormSent 