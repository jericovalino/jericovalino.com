import React from 'react';
import style from '../src/pages_styles/index.module.css';
import ThemeSwitch from '../src/components/themeSwitcher';
import UserIcon from '../src/public/vectors/userIcon';
import ProjectsIcon from '../src/public/vectors/projectsIcon';
import HomeIcon from '../src/public/vectors/homeIcon';




const WaterMark = () => {
  return (
    <div className={style.watermark}>
      <text>JER</text>
      <text>ICO</text>
    </div>
  )
}

const IndexPage = () => {
  return (
    <div className={style.Index}>

      <nav className={style.navbar}>
        <div className={style.main__nav__item}><h1>JV</h1></div>

        <div className={style.nav__item}>
          <UserIcon width="30px" height="30px" />
        </div>
        <div className={style.nav__item}>
          <ProjectsIcon width="30px" height="30px" />
        </div>
        <div className={style.nav__item}>
          <HomeIcon width="25px" height="25px" />
        </div>

        <div className={style.ThemeSwitch}>
          <ThemeSwitch />
        </div>
      </nav>

      <WaterMark />

    </div>
  )
}

export default IndexPage