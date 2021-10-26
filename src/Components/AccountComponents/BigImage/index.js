import React, {useState} from "react";

import { Wrapper, Content } from "./BigImage.styles";

import listen_pic from '../../../Images/listen-image2.jpg';

const BigImage = () => {

    return(
        <Wrapper>
            <Content>
                <div className='info'>
                    <div className='title'>Get 3 months of Premium for free</div>
                    <div className='desc'>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</div>
                    <div className='three-months'><button className='three-months-button'><b>GET 3 MONTHS FREE</b></button></div>
                    <div className='warning'>Individual plan only. USD 4.99/month after. Open only to users who haven't already tried Premium. <a href='/'>Terms and conditions apply.</a> Offer ends 28 September 2021.</div>
                </div>
                <div className='info-pic'><img src={listen_pic} alt='' className='listen-pic'/></div>
            </Content>
        </Wrapper>
    )
}

export default BigImage;