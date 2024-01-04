import React from 'react'
import * as s from "./hero_section2.module.scss"

function HeroSection2({ title }) {
  return (
    <div className={s.hero__section}>
        <div className="container">
            <h2 className={s.hero__section__title}>
                {title}
            </h2>
        </div>
    </div>
  )
}

HeroSection2.defaultProps = {
  title: "Our Services" // Set the default value here
};

export default HeroSection2