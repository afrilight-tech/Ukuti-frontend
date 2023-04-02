import React from "react";
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import '../assets/Css/Header.css'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaSearch, FaRegTimesCircle } from "react-icons/fa";
import logo from '../assets/logo-original.jpg'


function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const close = () => {
        setIsNavExpanded(false);
    };
    useEffect(() => {
        let header = document.getElementById("header");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                header.style.background = "linear-gradient(to right, #063fa3, #010c2e)"
            } else {
                header.style.background = "transparent"
            }
        })
    })

    const handleScroll = (event) => {
        event.preventDefault()
        let aboutElement = document.getElementById("about")
        aboutElement.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div id="header" data-aos="fade-right" data-aos-duration="1200">
            <div className="header_inner" >
                <div className="logo">
                    <Link to="hero"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}> <img height={'80'} width={'80'} src={logo} alt="" /> </Link>
                </div>

                <div className={isNavExpanded ? 'sm_menu' : 'menu'}>
                    <ul className="menu_links">
                        <li className="menu_item"><Link activeClass="active" onClick={close}
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className="router_link">Home</Link></li>
                        <li className="menu_item"><Link activeClass="active" onClick={close}
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className="router_link">Services </Link></li>



                        <li className="menu_item"><Link activeClass="active" onClick={close}
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className="router_link">About</Link></li>

                        <li className="menu_item"><Link activeClass="active" onClick={close}
                            to="why-me"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className="router_link">Why Me</Link></li>


                        <li className="menu_item"><Link activeClass="active" onClick={close}
                            to="faqs"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className="router_link">FAQs</Link></li>

                        <li className="menu_item button"><Link activeClass="active" onClick={close}
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className="router_link"><button>Reach Out</button> </Link></li>
                    </ul>
                </div>

                <div className="sm_cntrl">
                    {!isNavExpanded ?
                        <HiBars3BottomRight className='cntrl' onClick={() =>
                            setIsNavExpanded(!isNavExpanded)
                        } /> : <FaRegTimesCircle className='cntrl' onClick={() =>
                            setIsNavExpanded(!isNavExpanded)
                        } />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header