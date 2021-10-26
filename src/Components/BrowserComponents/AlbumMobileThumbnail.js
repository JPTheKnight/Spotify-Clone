import React from "react";
import { useDataLayerValue } from "../../DataLayer";

export const AlbumMobileThumbnail = ({thumbimg, name, artist, id, clickable=true}) => {

    const [{user}, dispatch] = useDataLayerValue();

    async function searchLyrics()  
    {
        const nameFix = fix(name);
        const artistFix = fix(artist);
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
            document.getElementById('Body').getElementsByClassName('body-content-mobile')[0].scrollTop = 0;

            document.getElementById('Album').style.background=`linear-gradient(to bottom, rgb(${rand}, ${rand1}, ${rand2}) 0%, rgb(${rand/2}, ${rand1/2}, ${rand2/2}) 100%)`;
            document.getElementById('Album').getElementsByClassName('header')[0].style.backgroundColor=`rgba(${rand}, ${rand1}, ${rand2}, 0)`;
            dispatch({
                type: 'SET_CUR_PS_SELECTED',
                cur_playlist_selected: id,
            })
        }
    }

    return (
        <div className='cell' onClick={AlbumClick}>
            <span className='img-container'><img src={thumbimg} alt='' className='img' /></span>
            <span className='img-name'>{name}</span>
            {!clickable && <span className='img-artist'>{artist}</span>}
        </div>
    )
}