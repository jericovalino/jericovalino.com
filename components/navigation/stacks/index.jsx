import React, { useState } from 'react';
import style from './style.module.css';

import { motion } from 'framer-motion';

import {ReactIcon, NodeIcon, PsqlIcon, GraphqlIcon} from '../../../public/vectors/stackIcons';

const { main__nav__item, js, html, css, react, nodejs, psql, graphql } = style;

const Stacks = () => {

    const [show, setShow] = useState(false);
    
    return (
        <div className={style.stacks}>
            <div className={[main__nav__item, js].join(' ')}
                onClick={() => setShow(!show)}>
                <h1>{show ? 'JS' : 'JV'}</h1>
            </div>
            <motion.div className={[main__nav__item, html].join(' ')}
                animate={{ left: show ? '50px' : '0px' }}>
                <p>5</p>
                <h1>HTML</h1>
            </motion.div>
            <motion.div className={[main__nav__item, css].join(' ')}
                animate={{ left: show ? '100px' : '0px' }}>
                <p>3</p>
                <h1>CSS</h1>
            </motion.div>
            <motion.div className={[main__nav__item, react].join(' ')}
                animate={{ left: show ? '150px' : '0px' }}>
                    <ReactIcon width="80%" height="80%" />
            </motion.div>
            <motion.div className={[main__nav__item, nodejs].join(' ')}
                animate={{ left: show ? '200px' : '0px' }}>
                    <NodeIcon width="80%" height="80%" />
            </motion.div>
            <motion.div className={[main__nav__item, psql].join(' ')}
                animate={{ left: show ? '250px' : '0px' }}>
                    <PsqlIcon width="80%" height="80%" />
            </motion.div>
            <motion.div className={[main__nav__item, graphql].join(' ')}
                animate={{ left: show ? '300px' : '0px' }}>
                    <GraphqlIcon width="80%" height="80%" />
            </motion.div>
        </div>
    )
}

export default Stacks;