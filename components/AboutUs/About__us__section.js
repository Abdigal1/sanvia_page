import React from "react";
import Image from "next/image";
import * as s from "./about_us_section.module.scss";
import img from "../../image/about-us/about-img1.jpg";

function About__us__section() {
  return (
    <div className={s.about__us__section}>
      <div className="container">
        <div className={s.about__us__section__content}>
          <div className={s.about__us__section__content__thumbnail}>
            <Image src={img} alt="about us image" />
          </div>
          <div className={s.about__us__section__content__text}>
            <div className={s.about__us__section__content__text__section__top}>
              <h2
                className={
                  s.about__us__section__content__text__section__top__title
                }
              >
                About Us
              </h2>
              <p
                className={
                  s.about__us__section__content__text__section__top__description
                }
              >
                We are a Brazil-based consultancy, specialized in democratizing access to
                AI and cloud systems for all skill levels, committed to providing innovative, 
                globally-reaching solutions that transform businesses and empower our 
                international clients.
              </p>
            </div>
            <div
              className={s.about__us__section__content__text__section__bottom}
            >
              <h4
                className={
                  s.about__us__section__content__text__section__bottom__title
                }
              >
                Who We Are
              </h4>
              <p
                className={
                  s.about__us__section__content__text__section__bottom__description
                }
              >
                Established by three accomplished graduates with industry experience, 
                our consultancy pioneers AI solutions. We leverage expertise to address 
                real-world challenges, crafting bespoke strategies for transformative outcomes.
              </p>
            </div>
            <div
              className={s.about__us__section__content__text__section__bottom}
            >
              <h4
                className={
                  s.about__us__section__content__text__section__bottom__title
                }
              >
                Our History
              </h4>
              <p
                className={
                  s.about__us__section__content__text__section__bottom__description
                }
              >
                Founded by young, highly-educated researchers specialized in generative AI
                 and cloud technology, we united to revolutionize tech with AI, driven by 
                 innovation and a commitment to transformative solutions that reshape the future.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About__us__section;
