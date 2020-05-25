import style from './style.module.css'

const LinkedinIcon = (props) => {
    return (
        <a href={'https://www.linkedin.com/in/jerico-valino-27437318a/'}>
            <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={style.linkedin} fillRule="evenodd" clipRule="evenodd" d="M27.7792 0H2.21413C0.992484 0 0 0.96832 0 2.16226V27.8348C0 29.0298 0.992484 29.9996 2.21413 29.9996H27.7792C29.0029 29.9996 30 29.0298 30 27.8348V2.16226C30 0.96832 29.0029 0 27.7792 0ZM6.67343 4.13013C8.09633 4.13013 9.25215 5.28615 9.25215 6.70926C9.25215 8.1334 8.09633 9.28985 6.67343 9.28985C5.24762 9.28985 4.09326 8.1334 4.09326 6.70926C4.09326 5.28615 5.24762 4.13013 6.67343 4.13013ZM4.44784 11.2469H8.89736V25.5636H4.44784V11.2469ZM15.9567 11.247H11.6882V25.5637H16.1346V18.4813C16.1346 16.6138 16.4892 14.8051 18.8048 14.8051C21.0864 14.8051 21.1171 16.9405 21.1171 18.6015V25.5637H25.5635V17.7107C25.5635 13.8559 24.7316 10.8907 20.2258 10.8907C18.0613 10.8907 16.6096 12.0776 16.0159 13.203H15.9567V11.247Z" />
            </svg>
        </a>
    )
}

export default LinkedinIcon;

