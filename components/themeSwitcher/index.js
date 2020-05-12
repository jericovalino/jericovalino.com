import React from 'react';
import style from "./style.module.css";
import { useTheme } from "../../src/hooks/theme";

const ThemeSwitch = () => {

    const [ darkMode, switchTheme ] =  useTheme();

    const leverProp = [{'left' : '5%', 'backgroundColor' : '#f5ed28', 'borderColor': '#e3c83a'},
                       {'left' : '40%', 'backgroundColor' : '#fffdf1', 'borderColor': '#e1e5c3'}];

    const switchProp = {'backgroundColor' : '#484848', 'borderColor': '#202020'};

    return (
        <div className={style.ToggleSwitch} onClick={switchTheme} style={switchProp}>
            <div className={style.lever} style={!darkMode ? leverProp[0] : leverProp[1]}>
            </div>
        </div>
    )
}

export default React.memo(ThemeSwitch);