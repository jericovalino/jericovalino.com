import React from 'react';
import { theme_switch, lever, light, dark } from "./style.module.css";

import { useTheme } from "../../src/hooks/theme";

const ThemeSwitch = () => {

    const [darkMode, switchTheme] = useTheme();

    return (
        <div className={theme_switch} onClick={switchTheme}>
            <div className={!darkMode
                ? [lever, light].join(' ')
                : [lever, dark].join(' ')}>
            </div>
        </div>
    )
}

export default ThemeSwitch;