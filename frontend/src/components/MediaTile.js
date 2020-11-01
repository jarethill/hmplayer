import React from 'react';

export default function MediaTile({ image, title }) {
    return (
        <div className='media-tile'>
            {/* Shows media title over a black, translucent banner */}
            <div className='media-info'>
                <h3>{title}</h3>
            </div>

            {/* Shows media image */}
            <img src={image} alt={title} />
        </div>
    );
}
