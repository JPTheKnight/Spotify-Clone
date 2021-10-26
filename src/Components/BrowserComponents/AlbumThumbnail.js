import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import play_green from '../../Images/play-button-green.svg';

export const AlbumThumbnail = ({thumbimg, thumbcolornb, name, artists, id, clickable=true}) => {

    const [{user}, dispatch] = useDataLayerValue();

    async function searchLyrics()  
    {
        const nameFix = fix(name);
        const artistFix = fix(artists);
        const res = await fetch(`https://api.lyrics.ovh/v1/${artistFix}/${nameFix}`);
        const data = await res.json();

        dispatch({
            type: 'SET_CUR_SONG_SELECTED',
            cur_song_selected_lyrics: data,
        });
    }

    const fix = (name) => {
        return name.split(' ').join('%20');
    }

    const AlbumClick = () => {
        if (!clickable)
        {
            searchLyrics();
            return;
        }

        const rand = Math.floor(Math.random() * 255);
        const rand1 = Math.floor(Math.random() * 255);
        const rand2 = Math.floor(Math.random() * 255);

        if (user)
        {
            document.getElementById('Body').style.display='none';
            document.getElementById('Album').style.display='block';
            document.getElementById('Body').getElementsByClassName('body-content')[0].scrollTop = 0;

            document.getElementById('Album').style.background=`linear-gradient(to bottom, rgb(${rand}, ${rand1}, ${rand2}) 0%, rgb(${rand/2}, ${rand1/2}, ${rand2/2}) 100%)`;
            document.getElementById('Album').getElementsByClassName('header')[0].style.backgroundColor=`rgba(${rand}, ${rand1}, ${rand2}, 0)`;
            dispatch({
                type: 'SET_CUR_PS_SELECTED',
                cur_playlist_selected: id,
            })
        }
    }

    return (
        <div className='cell-bg' onClick={AlbumClick}>
            <span className='img-container'>
                <img src={thumbimg} alt='' className='img' />
                <span className='img-svg-container'>
                    <img src={thumbcolornb} alt='' className='img-svg' />
                </span>
            </span>
            <span className='img-name'>{name}</span>
            <span className='img-desc'>{artists}</span>
            <span className='play-img-container'><img src={play_green} alt='' className='play-img'/></span>
        </div>
    )
}