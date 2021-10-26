import React from "react";
import HamSlide from "./Components/HamSlide";
import styled from "styled-components";

import Header from "./Components/Header";
import BigImage from "./Components/HomeComponents/BigImage";
import BigImageLower from "./Components/HomeComponents/BigImageLower";

import { useDataLayerValue } from "./DataLayer";

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const Home = () => {
    
    const [{user}] = useDataLayerValue();

    return (
        <Wrapper>
            <Header />
            <HamSlide />
            <BigImage />
            <BigImageLower title='Listening is everything' desc='Millions of songs. No credit card needed.' button='GET SPOTIFY FREE' clickable = {false}/>
            {user && <BigImageLower title='Looking for music?' desc='Start listening to the best new releases.' button='OPEN WEB PLAYER' clickable = {true}/>}
        </Wrapper>
    )
}

export default Home;