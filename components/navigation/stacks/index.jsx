import React, { useState } from 'react';
import { stacks, main__nav__item, js, html, css, react, redux } from './style.module.css';

import { motion } from 'framer-motion';
import { ReactIcon, ReduxIcon } from '../../../public/vectors/stackIcons';

const Stacks = () => {

    const [show, setShow] = useState(false);
    const combinedClass = (classname) => [main__nav__item, classname].join(' ');

    return (
        <div className={stacks}>
            <div className={combinedClass(js)}
                onClick={() => setShow(!show)}>
                <h1>{show ? 'JS' : 'JV'}</h1>
            </div>
            <motion.div className={combinedClass(html)}
                animate={{ left: show ? '50px' : '0px' }}>
                <p>5</p>
                <h1>HTML</h1>
            </motion.div>
            <motion.div className={combinedClass(css)}
                animate={{ left: show ? '100px' : '0px' }}>
                <p>3</p>
                <h1>CSS</h1>
            </motion.div>
            <motion.div className={combinedClass(react)}
                animate={{ left: show ? '150px' : '0px' }}>
                <ReactIcon width="80%" height="80%" />
            </motion.div>
            <motion.div className={combinedClass(redux)}
                animate={{ left: show ? '200px' : '0px' }}>
                <ReduxIcon width="80%" height="80%" />
            </motion.div>
        </div>
    );
}

export default Stacks;