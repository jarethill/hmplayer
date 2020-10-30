import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import playCircle from '../assets/svg/play-circle.svg';
import plusCircle from '../assets/svg/plus-circle.svg';

// Placeholder image, to be removed after backend can send image data
import Rambo from '../assets/First_blood_poster.jpg';

export default function Preview() {
    const { theme, dispatch } = useContext(ThemeContext);

    return (
        <section id='preview'>
            {/* Vignette Effect, causes black shadow around corners of image */}
            <div className='vignette'>
                {/* Movie Background Image */}
                <img src={Rambo} alt='Rambo' />
            </div>

            <div id='preview-container' className='container' style={{ zIndex: 999 }}>
                {/* Movie Title */}
                <h2 style={{ color: theme.primaryText }}>Rambo First Blood</h2>

                {/* Play & To List Buttons */}
                <div id='preview-controls'>
                    <button
                        className='btn'
                        style={{ marginRight: '1em', background: theme.primaryColor, color: theme.primaryText }}
                    >
                        Play
                        <img src={playCircle} alt='Play Button' className={theme.filterClass} />
                    </button>

                    <button className='btn' style={{ background: theme.secondaryColor, color: theme.primaryText }}>
                        To List
                        <img src={plusCircle} alt='To List Button' className={theme.filterClass} />
                    </button>
                </div>
            </div>
        </section>
    );
}
