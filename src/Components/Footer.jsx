import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import style from '../assets/Css/Footer.module.css'
import { useState } from 'react';
import { FaEnvelope, FaPhone} from "react-icons/fa";


function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

 
    return(
      <div className={style.footer}>
        <a href = "mailto: aaamenricko999@gmail.com"> <p><FaEnvelope className={style.footerIcon}/> aaamenricko999@gmail.com.</p></a>
       
        <p><FaPhone className={style.footerIcon}/> <a href="tel:08020909220">08020909220 </a> & <a href="tel: 08030534549">08030534549.</a></p>
        <p>&#169;{currentYear}.</p>
      </div>
    )
}

export default Footer