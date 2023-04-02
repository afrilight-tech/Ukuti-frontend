import style from '../InnerComponents/assets/Css/About.module.css'




function About() {

    return (

        <div className={style.about} id="about" data-aos="fade-up" data-aos-duration="1200">
            <div className={style.aboutOverlay}>
                <div className={style.aboutImage} >

                </div>
            </div>

            <div className={style.aboutText}>
                <div className={style.aboutTextInner}>
                    <h3 className={style.blue} data-aos="fade-up" data-aos-duration="1200">- About Me</h3>
                    <p data-aos="fade-up" data-aos-duration="1200">Born Tuesday, March 5, 1963 in Sapele, Delta State of Nigeria. I am Ukuti Tuale Okoro, an expert in the English language with a strong command of grammar and proficiency in both spoken and written forms. My experience as a self-trained proofreader and editor, coupled with my expertise in essay writing, technical writing, and public speaking, allows me to provide exceptional composition and analysis services. </p>
                    <p data-aos="fade-up" data-aos-duration="1200"> I also have a talent for literary appreciation, and an eye for detail that allows me to restructure sentences and paragraphs for logical flow and concord between thoughts and statements. With experience editing articles, projects, manuals and books, my goal is to create beautiful, comprehensible and valuable works for my clients.</p>
                </div>
            </div>

        </div>
    )

}

export default About