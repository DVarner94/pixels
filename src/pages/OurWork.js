import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// animations
import { motion } from 'framer-motion';
import { fade, photoAnim, pageAnimation, lineAnim } from '../animation';


const OurWork = () => {
    return (
        <Work variants={pageAnimation} initial='hidden' animate='show'>
            <Movie>
                <motion.h1 variants={fade}>The Athlete</motion.h1>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <h1>The Racer</h1>
                <div className="line"></div>
                <Link to='/work/the-racer'>
                    <img src={theracer} alt="theracer" />
                </Link>
            </Movie>
            <Movie>
                <h1>Good Times</h1>
                <div className="line"></div>
                <Link to='/work/good-times'>
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`

export default OurWork;