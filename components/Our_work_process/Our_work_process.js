import Image from 'next/image';
import React from 'react'
import * as s from "./our_work_process.module.scss"
import circleImg from "../../image/our-work-process/circle.png"
import Img from "../../image/our-work-process/man-with-mobile.png"

import {TbHeartRateMonitor}  from "react-icons/tb"
import { BsFillSunFill } from "react-icons/bs"
import { TfiLightBulb } from "react-icons/tfi"
import { SiAirplayvideo } from "react-icons/si"
import { ImProfile } from "react-icons/im"

function Our_work_process() {
  return (
    <div className={s.our__work__process__section}>
      <div className="container">
        <div className={s.our__work__process__section__header}>
          <h2 className={s.our__work__process__section__header__title}>
            Our Work Process
          </h2>
          <p className={s.our__work__process__section__header__description}>
            Efficient six-step process: Identify needs, plan strategically, design creatively, 
            develop technically, test rigorously, and launch effectively for impactful results.
          </p>
        </div>
        <div className={s.our__work__process__section__content}>
          
          <div className={s.our__work__process__section__content__thumbnail}>
            <Image src={Img} alt="our work process img" />
          </div>

          <div
            className={s.our__work__process__section__content__process__list}
          >
            <div
              className={
                s.our__work__process__section__content__process__list__single
              }
            >
              <div
                className={`${s.our__work__process__section__content__process__list__single__icon} ${s.our__work__process__section__content__process__list__single__icon__one}`}
              >
                <TbHeartRateMonitor size={41} />
              </div>
              <h3
                className={
                  s.our__work__process__section__content__process__list__single__title
                }
              >
                Identification
              </h3>
              <span
                className={
                  s.our__work__process__section__content__process__list__single__meta
                }
              >
                Preliminary Analysis
              </span>
            </div>

            <div
              className={
                s.our__work__process__section__content__process__list__single
              }
            >
              <div
                className={`${s.our__work__process__section__content__process__list__single__icon} ${s.our__work__process__section__content__process__list__single__icon__two}`}
              >
                <ImProfile />
              </div>
              <h3
                className={
                  s.our__work__process__section__content__process__list__single__title
                }
              >
                Planning
              </h3>
              <span
                className={
                  s.our__work__process__section__content__process__list__single__meta
                }
              >
                Defined Strategy
              </span>
            </div>

            <div
              className={
                s.our__work__process__section__content__process__list__single
              }
            >
              <div
                className={`${s.our__work__process__section__content__process__list__single__icon} ${s.our__work__process__section__content__process__list__single__icon__three}`}
              >
                <SiAirplayvideo />
              </div>
              <h3
                className={
                  s.our__work__process__section__content__process__list__single__title
                }
              >
                Design
              </h3>
              <span
                className={
                  s.our__work__process__section__content__process__list__single__meta
                }
              >
                Conceptual Creation
              </span>
            </div>

            <div
              className={
                s.our__work__process__section__content__process__list__single
              }
            >
              <div
                className={`${s.our__work__process__section__content__process__list__single__icon} ${s.our__work__process__section__content__process__list__single__icon__four}`}
              >
                <ImProfile />
              </div>
              <h3
                className={
                  s.our__work__process__section__content__process__list__single__title
                }
              >
                Development
              </h3>
              <span
                className={
                  s.our__work__process__section__content__process__list__single__meta
                }
              >
                Technical Implementation
              </span>
            </div>

            <div
              className={
                s.our__work__process__section__content__process__list__single
              }
            >
              <div
                className={`${s.our__work__process__section__content__process__list__single__icon} ${s.our__work__process__section__content__process__list__single__icon__five}`}
              >
                <TfiLightBulb />
              </div>
              <h3
                className={
                  s.our__work__process__section__content__process__list__single__title
                }
              >
                Launch
              </h3>
              <span
                className={
                  s.our__work__process__section__content__process__list__single__meta
                }
              >
                Final Deployment
              </span>
            </div>

            <div
              className={
                s.our__work__process__section__content__process__list__single
              }
            >
              <div
                className={`${s.our__work__process__section__content__process__list__single__icon} ${s.our__work__process__section__content__process__list__single__icon__six}`}
              >
                <BsFillSunFill />
              </div>
              <h3
                className={
                  s.our__work__process__section__content__process__list__single__title
                }
              >
                Implement
              </h3>
              <span
                className={
                  s.our__work__process__section__content__process__list__single__meta
                }
              >
                Lunch/Analyse
              </span>
            </div>
          </div>

          <Image
            className={s.our__work__process__section__content__circle__img}
            src={circleImg}
            alt="circle image"
          />
        </div>
      </div>
    </div>
  );
}

export default Our_work_process