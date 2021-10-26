import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./HamSlide.styles";
import spotify_logo from '../../Images/spotify-logo.png';
import { useDataLayerValue } from "../../DataLayer";

const HamSlide = () => {

    const [{user}] = useDataLayerValue();

    const useShowSideMenu = () => {
        document.getElementsByClassName('slide')[0].style.margin = '0 -650px 0 0';
        document.getElementsByClassName('slide')[0].style.transition = "all 0.5s ease-in";
        document.getElementsByClassName('x')[0].style.opacity='0';
        document.getElementsByClassName('x')[0].style.transition='0.5s';
    }

    return (
        <Wrapper className='slide'>
            <div className='x' onClick={useShowSideMenu}>&#10005;</div>
            <Content>
                <div className='top-text'>
                    <span>Premium</span>
                    <span>Support</span>
                    <span>Download</span>
                </div>
                <div className='bottom-text'>
                    <Link to='/account'><span>Account</span></Link>
                    {user ? <span>Log out</span>
                    :<Link to='/login'><span>Log in</span></Link>}
                </div>
                <div className='logo-container'><img src={spotify_logo} alt='' className='logo'/></div>
            </Content>
        </Wrapper>
    )
}

export default HamSlide;