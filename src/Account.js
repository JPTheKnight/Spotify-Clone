import React from "react";
import styled from "styled-components";

import Header from "./Components/Header";
import HamSlide from "./Components/HamSlide";
import BigImage from "./Components/AccountComponents/BigImage";
import InformationPanel from "./Components/AccountComponents/InformationPanel";

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgb(32,43,57) 0%, rgb(8,12,24) 100%);
    position: relative;
    overflow: hidden;
`;

const Content = styled.div`
    @media (min-width: 1100px)
    {
        max-width: 1175px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const Account = () => {
    
    return (
        <Wrapper>
            <Header/>
            <HamSlide />
            <Content>
                <BigImage />
                <InformationPanel />
            </Content>
        </Wrapper>
    )
}

export default Account;