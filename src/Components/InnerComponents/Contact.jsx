import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import style from './assets/Css/Contact.module.css'
import { FaLaptopCode, FaStar, FaPrayingHands } from "react-icons/fa";
import FormSent from "./FormSent";
import { useState } from "react";
import axios from 'axios'
import Spinner from "./Spinner";
function Contact() {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    const [formSent, setFormSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch('http://localhost:8000/sendmail', {
    //         method: 'POST',
    //         body: JSON.stringify(formData),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-CSRFToken': csrfToken
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.message);
    //     });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        const contactFormData = new FormData
        contactFormData.append('name', formData.name)
        contactFormData.append('email', formData.email)
        contactFormData.append('phone', formData.phone)
        contactFormData.append('message', formData.message)

        try {
            axios.post('https://ukuti-mail-api.onrender.com/sendmail', contactFormData).then((res) => {
                console.log(res.message);
                setIsSending(false);
                setFormSent(true);
            })
        } catch (error) {
            console.log(error)
            setIsSending(false);
        }
    }


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    if (isSending) {
        return <Spinner />
    }

    if (formSent) {
        return <FormSent name={formData.name}/>
    }

    return (
        <div className={style.contact} id="contact" data-aos="fade-up" data-aos-duration="1200">

            <div className={style.contactIntroText}>
                <h3>Contact Me</h3>
                <div className={style.star}>
                    <hr />
                    <FaStar className={style.contactIntroTextIcon} />
                    <hr />
                </div>
            </div>

            <div className={style.form_wrapper}>
                <form method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />
                    <div className={style.name} data-aos="fade-up" data-aos-duration="1200">
                        <div className={style.form_item}>
                            <label htmlFor="name">Full Name <span>*</span></label>
                            <input name='name'  value={formData.name} type="text" placeholder="John Doe" onChange={handleChange} required id='name' />
                           
                            <p className={style.error}>This field is required</p>
                        </div>

                    </div>

                    <div className={style.email} data-aos="fade-up" data-aos-duration="1200">
                        <div className={style.form_item}>
                            <label htmlFor="email">Email <span>*</span></label>
                            <input name='email' type="email" placeholder="yourname@email.com" required onChange={handleChange} id='email' />
                            {/* <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            /> */}
                            <p className={style.error}>This field is required</p>
                        </div>

                    </div>



                    <div className={style.phone} data-aos="fade-up" data-aos-duration="1200">
                        <div className={style.form_item}>
                            <label htmlFor="phone">Phone <span></span></label>
                            <input name="phone" type="tel" placeholder="+234..." id='phone' onChange={handleChange} />
                            {/* <ValidationError
                                prefix="phone"
                                field="phone"
                                errors={state.errors}
                            /> */}
                            <p className={style.error}>This field is required</p>
                        </div>
                    </div>


                    <div className={style.message} data-aos="fade-up" data-aos-duration="1200">
                        <div className={style.form_item}>
                            <label htmlFor="message">Message <span>*</span></label>
                            <textarea id="message" name="message" required onChange={handleChange}/>

                            {/* <ValidationError
                                prefix="message"
                                field="message"
                                errors={state.errors}
                            /> */}
                            <p className={style.error}>This field is required</p>
                        </div>
                    </div>


                    <div className={style.submit} data-aos="fade-up" data-aos-duration="1200">
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact