import React from 'react';
import { navigation__bar, theme_switch } from './style.module.css';

import Stacks from './stacks';
import ThemeSwitch from '../themeSwitch';
import NavigationItem from './navigationItem';
import { UserIcon, ProjectsIcon, BlogsIcon, ContactIcon,} from '../../public/vectors/navIcons';

const Navigation = () => {
    return (
        <nav className={navigation__bar}>

            <Stacks />

            <NavigationItem link={'/'} name={'Home'}>
                <UserIcon width="95%" height="95%" />
            </NavigationItem>

            <NavigationItem link={'/portfolio'} name={'Project'}>
                <ProjectsIcon width="100%" height="100%" />
            </NavigationItem>

            <NavigationItem link={'/blogs'} name={'Blog'}>
                <BlogsIcon width="85%" height="85%" />
            </NavigationItem>

            <NavigationItem link={'/contact'} name={'Contact'}>
                <ContactIcon width="95%" height="95%" />
            </NavigationItem>

            <div className={theme_switch}>
                <ThemeSwitch />
            </div>
        </nav>
    )
}

export default React.memo(Navigation);