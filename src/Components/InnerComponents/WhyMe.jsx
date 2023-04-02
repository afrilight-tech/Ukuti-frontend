import style from './assets/Css/WhyMe.module.css'
import { FaLaptopCode, FaStar, FaPrayingHands, FaCheck } from "react-icons/fa";
import { WhyMeData } from './WhyMeData/WhyMeData.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import library from './assets/Images/web-profile.png'

function WhyMe() {
    return (
        <div className={style.whyMe} id="why-me">

            <div className={style.whyMeIntroText}>
                <h3>Why Choose Me?</h3>

                <div className={style.star}>
                    <hr />
                    <FaStar className={style.whyMeIntroTextIcon} />
                    <hr />
                </div>

            </div>

            <div className={style.whyMeInner}>
                {/* <Swiper
                          style={{
                            "--swiper-navigation-size": "20px",
                            "--swiper-navigation-color": "#063fa3",
                            "--swiper-pagination-size": "30px",
                            "--swiper-pagination-color": "#063fa3",
                          }}
                          pagination={{
                            dynamicBullets: true,
                        }}
                          modules={[Pagination, Navigation]}
                          navigation={true}
                          slidesPerView={1}
                         
                          slidesPerGroup={1}
                          loop={true}>
                            
                          {WhyMeData.map((slide) => (
                            <SwiperSlide className={style.whyMeBox} key={slide.why}>
                              <h3>{slide.why}</h3>
                            </SwiperSlide>
                          ))}
                        </Swiper> */}


                <div className={style.whyMeBox} id={style.img} data-aos="fade-right" data-aos-duration="1200">
                    <img src={library} alt="" />
                </div>

                <div className={style.whyMeBox} id={style.text} data-aos="fade-left" data-aos-duration="1200">
                    {
                        WhyMeData.map((data) => (
                            <p data-aos="fade-up" data-aos-duration="1200"><FaCheck className={style.whyMeIcon} />{data.why}</p>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default WhyMe 