import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './Header.styles';

import spotify_logo from '../../Images/spotify-logo.png';
import hamburger from '../../Images/hamburger.png';
import { useDataLayerValue } from '../../DataLayer';

const Header = () => {

    const [profilePressed, setProfilePressed] = useState(false);
    const [{user}] = useDataLayerValue();

    const useShowSideMenu = () => {
        document.getElementsByClassName('slide')[0].style.margin = '0 0 0 0';
        document.getElementsByClassName('slide')[0].style.transition = "all 0.5s ease-in";
        document.getElementsByClassName('x')[0].style.opacity='1';
        document.getElementsByClassName('x')[0].style.transition='0.5s';
    }

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <div className='logo-container'><img src={spotify_logo} alt='' className='logo'/></div>
                </Link>
                <div className='text'>
                    <span className='link'>Premium</span>
                    <span className='link'>Support</span>
                    <span className='link'>Download</span>
                    <span className='link'>|</span>
                    <span className='pic'><img src={user ? user?.body?.images[0]?.url:''} className='profile-pic' alt=''/></span>
                    <span className='pic' onClick={() => setProfilePressed(!profilePressed)}>{(profilePressed) ? 'Profile ⮙':'Profile ⮛'}</span>
                </div>
                <div className='hamburger'>
                    <span className='pic'><img src={user ? user?.body?.images[0]?.url:''} className='profile-pic' alt=''/></span>
                    <span className='pic' onClick={useShowSideMenu}><img src={hamburger} className='hamburger-icon' alt=''/></span>
                </div>
                {profilePressed &&
                <div className='profile-options'>
                    <span><Link to='/account'>Account</Link></span>
                    {user != null ? 
                        <span>Log out</span>
                        :
                        <span><Link to='/login'>Log in</Link></span>
                    }
                    <span className='triangle'></span>
                </div>}
            </Content>
        </Wrapper>
    )
}

export default Header;