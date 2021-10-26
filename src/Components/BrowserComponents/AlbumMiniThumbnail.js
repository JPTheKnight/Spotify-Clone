import React from "react";
import play_green from '../../Images/play-button-green.svg';

export const AlbumMiniThumbnail = ({thumbimg, name}) => {

    return (
        <div className='cell-bg'>
            <span className='img-container'><img src={thumbimg} alt='' className='img' /></span>
            <span className='img-name'>{name}</span>
            <span className='play-img-container'><img src={play_green} alt='' className='play-img'/></span>
        </div>
    )
}