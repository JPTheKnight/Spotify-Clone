import React, { useEffect, useState } from 'react';
import { Wrapper, Header, Inputs } from './Login.styles';

import spotify_logo from '../../Images/spotify-logo.png';
import { loginUrl } from '../../spotify';

const Login = () => {

    let id = 0;

    const [signup, setSignup] = useState(false);

    const phraseColor = () => {
        const text = ['W', 't', 'f', '&#160', 'y', 'o', 'u', '&#160', 'l', 'o', 'o', 'k', 'i', 'n', '&#160', 'a', 't'];
        const footerText = document.getElementsByClassName('footer')[0].getElementsByClassName('text')[0];

        for (let i=0;i<footerText.getElementsByClassName('inchars').length; i++)
            footerText.getElementsByClassName('inchars')[0].remove();
        for (let i=0;i<text.length;i++)
            footerText.insertAdjacentHTML('beforeend', '<span id="inchars">' + text[i] + '</span>');
        footerText.getElementsByTagName('span')[0].style.color='red';
        footerText.getElementsByTagName('span')[1].style.color='red';
        id++;
        setInterval(() => {
            footerText.getElementsByTagName('span')[0].style.color='#202020';
            footerText.getElementsByTagName('span')[id-1].style.color='#202020';
            footerText.getElementsByTagName('span')[id].style.color='red';
            footerText.getElementsByTagName('span')[id+1].style.color='red';
            id++;
            if (id===text.length-1)
            {
                id = 1;
                footerText.getElementsByTagName('span')[0].style.color='red';
                footerText.getElementsByTagName('span')[1].style.color='red';
                setTimeout(() => {
                    footerText.getElementsByTagName('span')[text.length-2].style.color='#202020';
                    footerText.getElementsByTagName('span')[text.length-1].style.color='#202020';
                }, 100);
            }
        }, 100);
    }

    const SignUp = () => {
        setSignup(!signup);
    }

    useEffect(() => {
        phraseColor();
    }, []);

    return (
        <Wrapper>
            <Header>
                <div className='logo-container'><img src={spotify_logo} alt='' className='logo'/></div>
            </Header>
            <Inputs>
                {signup && <div className='container'>
                    <span className='text'>USERNAME:</span>
                    <span className='input'><input type='text' /></span>
                </div>}
                <div className='container'>
                    <span className='text'>EMAIL:</span>
                    <span className='input'><input type='email' /></span>
                </div>
                <div className='container'>
                    <span className='text'>PASSWORD:</span>
                    <span className='input'><input type='password' /></span>
                </div>
                <a href={loginUrl} >
                    <div className='sign-in'>
                        <button className='sign-in-button'><b>{signup ? 'REGISTER':'SIGN IN'}</b></button>
                    </div>
                </a>
                <div className='sign-up'>
                    <button className='sign-up-button' onClick={SignUp}><b>{signup ? 'SIGN IN':'SIGN UP'}</b></button>
                </div>
                <div className='footer'>
                    <span className='text'>
                        <span className='inchars'>W</span>
                    </span>
                </div>
            </Inputs>
        </Wrapper>
    )
}

export default Login;