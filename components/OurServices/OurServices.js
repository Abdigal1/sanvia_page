import React from "react";
import * as s from "./our_services.module.scss"
import {RiMessage2Line, RiUserStarLine, RiCloudLine, RiLineChartLine, RiSecurePaymentLine, RiSlideshowLine, RiBarChartBoxLine } from "react-icons/ri";


function OurServices() {
  return (
    <div className={s.our__services__section}>
      <div className="container">
        <h2 className={s.our__services__section__title}>Our Services</h2>
        <p className={s.our__services__section__description}>
        Offering AI-driven solutions in application development, data analytics, 
        automation, security, virtual assistance, and cloud optimization for diverse 
        client needs.
        </p>
        <div className={s.our__services__section__cards}>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiSlideshowLine />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Custom Application Development
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Creating tailor-made applications that utilize AI to provide 
              specific customer solutions, seamlessly integrating with 
              cloud infrastructure.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiLineChartLine />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Advanced Data Analytics
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Using AI algorithms to analyze large data sets in the cloud, 
              providing valuable insights and patterns for business 
              decision-making.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiBarChartBoxLine />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Business Process Automation
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Implementing AI systems in the cloud to automate repetitive tasks, 
              improving efficiency and reducing human errors.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiSecurePaymentLine />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              AI-Enhanced Security Services
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Using AI to enhance cloud security, including real-time threat 
              detection and automated incident response.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiUserStarLine />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Virtual Assistants and Chatbots
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Developing AI-powered virtual assistants and chatbots capable 
              of performing complex tasks and providing customer support in the cloud.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiCloudLine />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Cloud Infrastructure Optimization
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Applying AI to optimize the usage and performance of cloud infrastructure, 
              helping to reduce costs and improve operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
