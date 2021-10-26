import React from "react";

import { Wrapper, Content } from "./BigImageLower.styles";

import {Link} from 'react-router-dom';

const BigImageLower = ({title, desc, button, clickable}) => {

    return(
        <Wrapper>
            <span className='dot1'></span>
            <span className='dot2'></span>
            <span className='dot3'></span>
            <span className='dot4'></span>
            <Content>
                <div className='info'>
                    <div className='title'>{title}</div>
                    <div className='desc'>{desc}</div>
                    <div className='three-months'>
                        {clickable ? 
                        <Link to='/browser'>
                            <button className='three-months-button'><b>{button}</b></button>
                        </Link> : <button className='three-months-button'><b>{button}</b></button>}
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default BigImageLower;