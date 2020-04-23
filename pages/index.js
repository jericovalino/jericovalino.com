import React from 'react';
import style from '../src/pages_styles/index.module.css';
import UserIcon from '../src/public/vectors/userIcon';


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

      <nav className={style.sidenav}>
        <div className={style.nav__item}>
          <UserIcon width="40px" height="40px" />
        </div>
      </nav>

      <WaterMark />

    </div>
  )
}

export default IndexPage