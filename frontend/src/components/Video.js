import React from 'react';

export default function Video() {
    return (
        <video id='video-player' controls>
            <source src='http://localhost:3001/videos/Vue.mp4' type='video/mp4' />
        </video>
    );
}
