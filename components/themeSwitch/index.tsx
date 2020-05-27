import React from 'react';
import style from "./style.module.css";
import { useTheme } from "../../src/hooks/theme";

const { theme_switch, lever } = style;

const ThemeSwitch = () => {

    const [darkMode, switchTheme] = useTheme();

    const leverProp = [{ 'left': '5%', 'backgroundColor': '#f5ed28', 'borderColor': '#e3c83a' },
    { 'left': '40%', 'backgroundColor': '#fffdf1', 'borderColor': '#e1e5c3' }];


    return (
        <div className={theme_switch} onClick={switchTheme as any}>
            <div className={lever} style={!darkMode ? leverProp[0] : leverProp[1]}>
            </div>
        </div>
    )
}

export default React.memo(ThemeSwitch);