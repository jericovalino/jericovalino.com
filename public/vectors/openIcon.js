import style from './style.module.css'

const openIcon = (props) => {
    return (
        <a target="_blank" href={'https://github.com/jericovalino'}>
            <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={style.open} fillRule="evenodd" clipRule="evenodd" d="M7 0C3.13401 0 0 3.13401 0 7V33C0 36.866 3.13401 40 7 40H33C36.866 40 40 36.866 40 33V23H36V32C36 34.2091 34.2091 36 32 36H8C5.79086 36 4 34.2091 4 32V8C4 5.79086 5.79086 4 8 4H17V0H7ZM21 4H33.0614L17 20.0614L19.8284 22.8898L36 6.71826V19H40V0H37.0614H21V4Z" fill="#000" />
            </svg>
        </a>
    )
}

export default openIcon;