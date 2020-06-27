import React from 'react';
import style from './style.module.css';

import Stacks from './stacks';
import NavigationItem from './navigationItem';
import ThemeSwitch from '../themeSwitch';
import UserIcon from '../../public/vectors/userIcon';
import ProjectsIcon from '../../public/vectors/projectsIcon';
import HomeIcon from '../../public/vectors/homeIcon';
import BlogIcon from '../../public/vectors/blogIcon';

const { navigation__bar, theme_switch } = style;

const Navigation = () => {

    return (
        <nav className={navigation__bar}>

            <Stacks />

            <NavigationItem link={'/'} name={'Home'}>
                <UserIcon width="100%" height="100%" />
            </NavigationItem>

            <NavigationItem link={'/portfolio'} name={'Project'}>
                <ProjectsIcon width="100%" height="100%" />
            </NavigationItem>

            <NavigationItem link={'/blogs'} name={'Blog'}>
                <BlogIcon width="90%" height="90%" />
            </NavigationItem>
            
            <NavigationItem link={'/contact'} name={'Contact'}>
                <HomeIcon width="90%" height="90%" />
            </NavigationItem>

            <div className={theme_switch}>
                <ThemeSwitch />
            </div>
        </nav>
    )
}

export default React.memo(Navigation);