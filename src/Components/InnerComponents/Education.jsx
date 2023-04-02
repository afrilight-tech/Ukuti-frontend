import style from './assets/Css/Education.module.css'
import { FaLaptopCode, FaStar, FaPrayingHands,FaAngleDoubleRight, FaAngleDoubleDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Education() {
    return (
        <div className={style.education} id="education">

            <div className={style.educationIntroText}>
                <h3>Education</h3>
                <div className={style.star}>
                    <hr />
                    <FaStar className={style.educationIntroTextIcon} />
                    <hr />
                </div>
            </div>

            <div className={style.educationInner}>


                {/* <Swiper
                    style={{
                        "--swiper-navigation-size": "20px",
                        "--swiper-navigation-color": "white",
                        "--swiper-pagination-size": "25px",
                        "--swiper-pagination-color": "white",
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    slidesPerView={1}

                    slidesPerGroup={1}
                    loop={true}>


                    <SwiperSlide> */}

                <div className={style.educationBox} data-aos="fade-up" data-aos-duration="1200">
                    <div className={style.educatioBoxInner}>
                        <h3>Name: Crowther Primary School.</h3>
                        <h3>Location: Sapele, Delta State, Nigeria.</h3>
                        <h3>Date Started: January 1970</h3>
                        <h3>Date Ended: June 1976</h3>
                        <h3>Level: Primary School</h3>
                        <h3>Educational Certificate: Primary School Certificate.</h3>
                    </div>
                </div>

                <div className={style.educationBoxArrow} data-aos="fade-up" data-aos-duration="1200">
                    <hr />
                    <FaAngleDoubleRight className={style.educationArrow} id={style.lgScreen} data-aos="fade-up" data-aos-duration="1200"/>
                    <FaAngleDoubleDown className={style.educationArrow} id={style.smScreen} data-aos="fade-up" data-aos-duration="1200"/>
                    </div>

                    {/* </SwiperSlide>

                    
                    <SwiperSlide> */}



                    {/* </SwiperSlide>

                </Swiper> */}

                    {/* <Swiper
                    style={{
                        "--swiper-navigation-size": "20px",
                        "--swiper-navigation-color": "white",
                        "--swiper-pagination-size": "25px",
                        "--swiper-pagination-color": "white",
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    slidesPerView={1}

                    slidesPerGroup={1}
                    loop={true}>


                    <SwiperSlide> */}

                    {/* 
                    </SwiperSlide> */}


                    {/* <SwiperSlide> */}

                    <div className={style.educationBox} data-aos="fade-up" data-aos-duration="1200">
                        <div className={style.educatioBoxInner}>
                            <h3>Name: Zik Grammar School.</h3>
                            <h3>Location: Sapele, Delta State, Nigeria.</h3>
                            <h3>Date Started: September 1976</h3>
                            <h3>Date Ended: June 1981</h3>
                            <h3>Level: Secondary School</h3>
                            <h3>Educational Certificate: Ordinary Level General Certificate.</h3>
                        </div>
                    </div>

                    {/* </SwiperSlide>

                </Swiper> */}




                </div>


            </div>


            )
}

            export default Education 