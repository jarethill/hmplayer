import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { ThemeContext } from '../App';

import Rambo from '../assets/mock-images/rambo.jpg';
import Doom from '../assets/mock-images/Doom.webp';
import JohnWick from '../assets/mock-images/john-wick.jpg';
import Terminator from '../assets/mock-images/terminator-cover.jpg';
import MenInBlack from '../assets/mock-images/mib.jpg';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination]);

const mockMovies = [
    {
        title: 'Rambo First Blood',
        img: Rambo,
    },
    {
        title: 'The Terminator',
        img: Terminator,
    },
    {
        title: 'John Wick',
        img: JohnWick,
    },
    {
        title: 'Men In Black',
        img: MenInBlack,
    },
    {
        title: 'Doom',
        img: Doom,
    },
];

export default function MediaContainer() {
    const { theme, dispatch } = useContext(ThemeContext);

    return (
        <section id='media-container'>
            <div className='category-text'>
                <h3 style={{ color: theme.primaryText }}>Action</h3>
                <h4 style={{ color: theme.primaryText }}>View All</h4>
            </div>

            <Swiper
                spaceBetween={25}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {mockMovies.map((movie) => (
                    <SwiperSlide key={movie.title}>
                        <img src={movie.img} alt='Movie Slide' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
