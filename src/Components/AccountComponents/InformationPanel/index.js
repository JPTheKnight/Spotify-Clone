import React, { useState } from "react";

import { Wrapper, LeftContent, RightContent } from "./InformationPanel.styles";

import home_logo from '../../../Images/home-logo.png';
import pen_logo from '../../../Images/pen-logo.png';
import down_arrow from '../../../Images/right-arrow.png';

const InformationPanel = () => {

    const [showProfile, setShowProfile] = useState(true);
    const [showGender, setShowGender] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showMonths, setShowMonths] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const selectButton = (event) => {

        document.getElementsByClassName('button-clicked')[0].className='button';
        event.currentTarget.className='button-clicked';

        switch(event.currentTarget.getElementsByClassName('option')[0].textContent)
        {
            case 'Account overview': setShowProfile(true); break;
            case 'Edit profile': setShowProfile(false); break;
            default: setShowProfile(true); break;
        }
    }

    const gender_dropdown = () => {
        setShowGender(!showGender);
    }

    const location_dropdown = () => {
        setShowLocation(!showLocation);
    }

    const months_dropdown = () => {
        setShowMonths(!showMonths);
    }

    const options_dropdown = () => {
        setShowOptions(!showOptions);
    }

    return (
        <Wrapper>
            <LeftContent>
                <img className='profile-pic' src='https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2336237053150681&height=50&width=50&ext=1634043720&hash=AeQ46RXHL-plGpa4q8M' alt='' />
                <div className='button-clicked' onClick={selectButton}>
                    <span><img src={home_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Account overview</span>
                </div>
                <div className='button' onClick={selectButton}>
                    <span><img src={pen_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Edit profile</span>
                </div>
                <div className='button' onClick={selectButton}>
                    <span><img src={home_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Change password</span>
                </div>
                <div className='button' onClick={selectButton}>
                    <span><img src={home_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Notification settings</span>
                </div>
                <div className='button' onClick={selectButton}>
                    <span><img src={home_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Privacy settings</span>
                </div>
                <div className='button' onClick={selectButton}>
                    <span><img src={home_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Recover playlists</span>
                </div>
                <div className='button' onClick={selectButton}>
                    <span><img src={home_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Receipts</span>
                </div>
                <div className='button' onClick={selectButton}>
                    <span><img src={home_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Apps</span>
                </div>
                <div className='button' onClick={selectButton}>
                    <span><img src={home_logo} alt='' className='logo-img'/></span>
                    <span className='option'>Redeem</span>
                </div>
            </LeftContent>
            <RightContent>
                <div className='dropdown-button'>
                    <button onClick={options_dropdown}>
                        <span className='img-container-option'><img src={home_logo} alt='' className='icon' /></span>
                        <span className='text-option'>Account Overview</span>
                        <span className='arrow-container'><img src={down_arrow} alt='' className='arrow' /></span>
                    </button>
                </div>
                {showOptions && <div className='dropdown'>
                    <span className='row' onClick={() => {
                        document.getElementsByClassName('text-option')[0].textContent='Account Overview';
                        document.getElementsByClassName('icon')[0].src={home_logo};
                        setShowProfile(true);
                        setShowOptions(false);
                    }}>
                        <span className='img-container'><img src={home_logo} alt='' className='icon' /></span>
                        <span className='text'>Account Overview</span>
                    </span>
                    <span className='row' onClick={() => {
                        document.getElementsByClassName('text-option')[0].textContent='Edit Profile';
                        document.getElementsByClassName('icon')[0].src={pen_logo};
                        setShowProfile(false);
                        setShowOptions(false);
                    }}>
                        <span className='img-container'><img src={pen_logo} alt='' className='icon' /></span>
                        <span className='text'>Edit Profile</span>
                    </span>
                </div>}
                {showProfile ? <div>
                    <div className='title'>Account overview</div>
                    <div className='profile'>
                        <div className='profile-text'>Profile</div>
                        <div className='profile-table'>
                            <div className='profile-row'>
                                <span className='username'>Username</span>
                                <span className='actual-username'>jptheknight</span>
                            </div>
                            <hr/>
                            <div className='profile-row'>
                                <span className='username'>Email</span>
                                <span className='actual-username'>j.psaba_2002@hotmail.fr</span>
                            </div>
                            <hr/>
                            <div className='profile-row'>
                                <span className='username'>Date of birth</span>
                                <span className='actual-username'>January 21, 1985</span>
                            </div>
                            <hr/>
                            <div className='profile-row'>
                                <span className='username'>Country or region</span>
                                <span className='actual-username'>Lebanon</span>
                            </div>
                            <hr/>
                            <div className='edit-profile'>
                                <button className='edit-profile-button'>Edit profile</button>
                            </div>
                        </div>
                    </div>
                    <div className='plan'>
                        <div className='plan-text'>Your Plan</div>
                        <div className='plan-table'>
                            <div className='spotify-free'><div className='text'>Spotify Free</div></div>
                            <div className='text'>
                                <span className='play'>Play music in shuffle mode only, with ads.</span>
                                <span className='free'>Free</span>
                            </div>
                        </div>
                        <div className='join-premium'>
                            <button className='join-premium-button'>Join premium</button>
                        </div>
                    </div>
                    <div className='signout'>
                        <div className='signout-text'>Sign out everywhere</div>
                        <div className='signout-table'>
                            <div className='text'>This logs you out of Spotify everywhere you’re logged in, including the mobile, tablet, web player and desktop apps. This doesn't include partner devices (e.g. speakers, games consoles, and TVs), so for those go to your apps page and choose REMOVE ACCESS.</div>
                            <div className='note'>
                                <span className='msg'>Note: It can take up to 1 hour for sign out to take effect on the web player.</span>
                            </div>
                        </div>
                        <div className='sign-out'>
                            <button className='sign-out-button'>Sign out everywhere</button>
                        </div>
                    </div>
                </div> : 
                <div>
                    <div className='title'>Edit profile</div>
                    <div className='editprofile'>
                        <div className='profile-table'>
                            <div className='profile-row'>
                                <span className='email'>Email</span>
                                <span className='email-input'><input type='email' /></span>
                            </div>
                            <div className='profile-row'>
                                <span className='email'>Password</span>
                                <span className='email-input'><input type='password' disabled/></span>
                            </div>
                            <div className='profile-row'>
                                <span className='email'>Gender</span>
                                <span className='email-button'>
                                    <button onClick={gender_dropdown}>
                                        <span className='gender'>Male</span>
                                        <span><img src={down_arrow} alt='' /></span>
                                    </button>
                                </span>
                                {showGender && <span className='dropdown'>
                                    <span onClick={() => {
                                        document.getElementsByClassName('gender')[0].textContent='Male';
                                        setShowGender(false);
                                    }}>Male</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('gender')[0].textContent='Female';
                                        setShowGender(false);
                                    }}>Female</span>
                                </span>}
                            </div>
                            <div className='profile-row'>
                                <span className='email'>Date of birth</span>
                                <span className='email-several-input'>
                                    <input type='text' />
                                    <button onClick={months_dropdown}>
                                        <span className='month'>January</span>
                                        <span><img src={down_arrow} alt='' /></span>
                                    </button>
                                    <input type='text' />
                                    {showMonths && <span className='dropdown-months'>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='January';
                                        setShowMonths(false);
                                    }}>January</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='February';
                                        setShowMonths(false);
                                    }}>February</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='March';
                                        setShowMonths(false);
                                    }}>March</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='April';
                                        setShowMonths(false);
                                    }}>April</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='May';
                                        setShowMonths(false);
                                    }}>May</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='June';
                                        setShowMonths(false);
                                    }}>June</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='July';
                                        setShowMonths(false);
                                    }}>July</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='August';
                                        setShowMonths(false);
                                    }}>August</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='September';
                                        setShowMonths(false);
                                    }}>September</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='October';
                                        setShowMonths(false);
                                    }}>October</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='November';
                                        setShowMonths(false);
                                    }}>November</span>
                                    <span onClick={() => {
                                        document.getElementsByClassName('month')[0].textContent='December';
                                        setShowMonths(false);
                                    }}>December</span>
                                </span>}
                                </span>
                            </div>
                            <div className='profile-row'>
                                <span className='email'>Country or region</span>
                                <span className='email-button'>
                                    <button onClick={location_dropdown}>
                                        <span className='location'>Lebanon</span>
                                        <span><img src={down_arrow} alt='' /></span>
                                    </button>
                                </span>
                                {showLocation && <span className='dropdown-location'>
                                    <span onClick={() => {
                                        document.getElementsByClassName('location')[0].textContent='Lebanon';
                                        setShowLocation(false);
                                    }}>Lebanon</span>
                                </span>}
                            </div>
                            <hr/>
                            <div className='cancel-submit'>
                                <button className='cancel-button'>CANCEL</button>
                                <button className='submit-button'>SAVE PROFILE</button>
                            </div>
                        </div>
                    </div>                 
                </div>}
            </RightContent>
        </Wrapper>
    )
}

export default InformationPanel;