import React, { useContext, useEffect, useRef } from 'react';
import MediaTile from './MediaTile';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { ThemeContext } from '../App';

SwiperCore.use([Navigation]);

function updateActiveSlideBorder(e) {
    // Removes border from every slide & adds border to the actively selected slide
    // Needed to be looped for each slide because Swiper lets you move more than one slide at a time, causing
    // the old border to not be removed when only removing previous & next slide's border
    e.slides.forEach((slide, index) => {
        slide.style.border = '';

        if (index === e.activeIndex) {
            slide.style.border = `1px solid ${e.borderColor}`;
        }
    });
}

export default function MediaContainer({ media, category }) {
    const { theme } = useContext(ThemeContext);
    const swiperElement = useRef(null);

    // Change Swiper's navigation button colors on theme update. Needed because swiper API (as far as I'm aware)
    // doesn't give reference to elements color and can only be updated through css
    useEffect(() => {
        swiperElement.current.swiper.navigation.nextEl.style.color = theme.secondaryColor;
        swiperElement.current.swiper.navigation.prevEl.style.color = theme.secondaryColor;

        // Update active slide border color to current theme's secondary color on theme change
        swiperElement.current.swiper.borderColor = theme.secondaryColor;
        updateActiveSlideBorder(swiperElement.current.swiper);
    }, [theme]);

    return (
        <section className='media-container'>
            {/* Shows category & option to view all movies of that category in a grid */}
            <div className='category-text'>
                <h3 style={{ color: theme.primaryText }}>{category}</h3>
                <h4 style={{ color: theme.primaryText }}>View All</h4>
            </div>

            {/* Horizontal Swiper */}
            <Swiper
                spaceBetween={25}
                slidesPerView={'auto'}
                navigation
                // Only turns on looping if there's enough tiles, otherwise it shows duplicates
                loop={media.length >= 5 ? true : false}
                centeredSlides={true}
                ref={swiperElement}
                onSlideChange={(e) => updateActiveSlideBorder(e)}
            >
                {media.map((movie) => (
                    <SwiperSlide key={movie.img}>
                        <MediaTile image={movie.img} title={movie.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
