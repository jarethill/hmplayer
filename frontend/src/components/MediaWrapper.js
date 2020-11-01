import React from 'react';
import MediaContainer from '../components/MediaContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';

import Rambo from '../assets/mock-images/rambo.jpg';
import Doom from '../assets/mock-images/Doom.webp';
import JohnWick from '../assets/mock-images/john-wick.jpg';
import Terminator from '../assets/mock-images/terminator-cover.jpg';
import MenInBlack from '../assets/mock-images/mib.jpg';

SwiperCore.use([Navigation, Scrollbar]);

// Mock Data
const categories = [
    {
        category: 'Action',
        media: [
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
        ],
    },
    {
        category: 'Horror',
        media: [
            {
                title: 'Berserker',
                img: 'https://www.grayflannelsuit.net/blog/wp-content/uploads/2012/05/berserker_poster_1987.jpg',
            },
            {
                title: 'Trick or Treat',
                img: 'https://www.grayflannelsuit.net/blog/wp-content/uploads/2012/05/trick_or_treat_poster-19863.jpg',
            },
            {
                title: 'Hell Night',
                img: 'https://www.grayflannelsuit.net/blog/wp-content/uploads/2012/05/hell_night_poster_1981.jpg',
            },
            {
                title: 'Friday the 13th',
                img:
                    'https://www.grayflannelsuit.net/blog/wp-content/uploads/2012/05/friday_the_13th-movie-poster1.jpg',
            },
            {
                title: 'The Evil Dead',
                img: 'https://www.grayflannelsuit.net/blog/wp-content/uploads/2012/05/the-evil-dead-movie-poster.jpg',
            },
            {
                title: 'A Nightmare on Elm Street',
                img:
                    'https://www.grayflannelsuit.net/blog/wp-content/uploads/2012/04/a-nightmare_on_elm_street_movie-poster-1984.jpg',
            },
        ],
    },
    {
        category: 'Comedy',
        media: [
            {
                title: 'Ace Ventura When Nature Calls',
                img:
                    'https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/ace-ventura-when-nature-calls-movie-poster.jpg',
            },
            {
                title: 'American Pie',
                img: 'https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/american-pie-movie-poster.jpg',
            },
            {
                title: 'Animal House',
                img: 'https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/animal-house-movie-poster.jpg',
            },
            {
                title: 'Napoleon Dynamite',
                img:
                    'https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/napoleon-dynamite-movie-poster.jpg',
            },
            {
                title: 'Role Models',
                img: 'https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/role-models-movie-poster.jpg',
            },
            {
                title: 'The Naked Gun',
                img: 'https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/the-naked-gun-movie-poster.jpg',
            },
        ],
    },
];

export default function MediaWrapper() {
    return (
        <section id='media-wrapper'>
            {/* Vertical swiper, used to browse categories */}
            <Swiper
                direction={'vertical'}
                spaceBetween={25}
                slidesPerView={1}
                loop={true}
                scrollbar={{ draggable: true }}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.category}>
                        <MediaContainer category={category.category} media={category.media} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
