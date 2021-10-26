import React from "react";

export const AlbumSong = ({num, img, name, artist, album, duration}) => {

    var dur = 0;

    const durationReturn = () => {
        dur = Math.floor(duration / 60) + ":" + String(Math.floor(duration % 60)).padStart(2, '0');    
    }

    durationReturn();

    return (
        <div className='song'>
            <div className='title'>
                <span className='number'>{num}</span>
                <span className='img-container'><img src={img} alt='' className='img' /></span>
                <span className='song-info'>
                    <span className='song-name'>{name}</span>
                    <span className='song-artist'>{artist}</span>
                </span>
            </div>
            <div className='album-name'>{album}</div>
            <div className='duration'>{dur}</div>
        </div>
    )
}