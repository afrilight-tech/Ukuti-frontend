import style from './assets/Css/Faqs.module.css'
import { FaLaptopCode, FaStar, FaPrayingHands } from "react-icons/fa";


function Faqs() {
    return (
        <div className={style.faqs} id="faqs">

            <div className={style.faqsIntroText}>
                <h3>Frequently Asked Questions</h3>
                <div className={style.star}>
                    <hr />
                    <FaStar className={style.faqsIntroTextIcon} />
                    <hr />
                </div>
            </div>

            <div className={style.faqsInner}>

                <div className={style.faqsBox} data-aos="fade-up" data-aos-duration="1200">
                    <details >
                        <summary>What types of services do you offer?</summary>
                        <p data-aos="fade-up" data-aos-duration="1200">I offer proofreading, editing, writing, technical writing and literary appreciation services.</p>
                    </details>
                </div>

                <div className={style.faqsBox} data-aos="fade-up" data-aos-duration="1200">
                    <details >
                        <summary>Do you specialize in any specific style of English?</summary>
                        <p data-aos="fade-up" data-aos-duration="1200">I have a good grasp of both British English and American English and can use either version of the language to serve my clients.</p>
                    </details>
                </div>

                <div className={style.faqsBox} data-aos="fade-up" data-aos-duration="1200">
                    <details >
                        <summary>What is your approach to editing?</summary>
                        <p data-aos="fade-up" data-aos-duration="1200">My approach to editing involves scrutinizing every sentence and paragraph and restructure any illogical sentences or paragraphs to make them flow logically, while maintaining the writer's intention and ensuring that the work is flawless, comprehensible and beautiful.</p>
                    </details>
                </div>

                <div className={style.faqsBox} data-aos="fade-up" data-aos-duration="1200">
                    <details >
                        <summary>Do you have any experience working on technical writing?</summary>
                        <p data-aos="fade-up" data-aos-duration="1200">Yes, I have experience with technical writing and can help with describing something or making narratives in a clear and concise manner.</p>
                    </details>
                </div>


                <div className={style.faqsBox} data-aos="fade-up" data-aos-duration="1200">
                    <details >
                        <summary>Can you help with literary appreciation?</summary>
                        <p data-aos="fade-up" data-aos-duration="1200">Yes, I have excellent comprehension ability, which enables me to understand a speaker or writer and objectively appraise the work by pointing out its virtues and defects, if any.</p>
                    </details>
                </div>


            </div>


        </div>


    )
}

export default Faqs 