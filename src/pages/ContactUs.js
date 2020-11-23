import React from 'react';
// animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const ContactUs = () => {
    return (
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <h1>Contact</h1>
        </motion.div>
    );
};

export default ContactUs;