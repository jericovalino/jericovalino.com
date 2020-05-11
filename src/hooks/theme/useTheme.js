import { useEffect, useState } from 'react';
import setTheme from "../../utils/setTheme";

export const useTheme = () => {

    const [darkMode, setDarkMode] = useState(false);

    const switchTheme = () => {
        localStorage.setItem('darkmode', !darkMode);
        setDarkMode(!darkMode)
        darkMode ? localStorage.removeItem('darkmode') : null;
    }

    useEffect(() => {
        if (darkMode) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [darkMode])

    useEffect(() => {
        if (localStorage.getItem("darkmode")) {
            switchTheme()
        }
    }, [])

    return [darkMode, switchTheme]
}