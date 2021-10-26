import styled from "styled-components";

export const Wrapper = styled.div`
    height: 600px;
    background-color: #2941AB;
    position: relative;
    overflow: hidden;

    .dot1 {
        position: absolute;
        top: -90px;
        left: 44%;
        height: 150px;
        width: 150px;
        background-color: #1ED760;
        border-radius: 50%;
        display: inline-block;

        @media (max-width: 1200px)
        {
            top: -30px;
            left: 64%;
            height: 200px;
            width: 200px;
        }

        @media (max-width: 750px)
        {
            top: -250px;
            left: 54%;
            height: 300px;
            width: 300px;
        }
    }
    .dot2 {
        position: absolute;
        top: -100px;
        right: -475px;
        height: 600px;
        width: 600px;
        background-color: #1ED760;
        border-radius: 50%;
        display: inline-block;

        @media (max-width: 1200px)
        {
            top: 400px;
            right: 10%;
            height: 100px;
            width: 100px;
        }

        @media (max-width: 750px)
        {
            top: 450px;
            right: 12%;
            height: 125px;
            width: 125px;
        }
    } 
    .dot3 {
        position: absolute;
        right: 50px;
        bottom: -700px;
        height: 900px;
        width: 900px;
        background-color: #1ED760;
        border-radius: 50%;
        display: inline-block;
        z-index: 0;

        @media (max-width: 1200px)
        {
            bottom: -60px;
            right: 70%;
            height: 250px;
            width: 250px;
        }

        @media (max-width: 750px)
        {
            bottom: -200px;
            right: 50%;
            height: 325px;
            width: 325px;
        }
    } 
    .dot4 {
        position: absolute;
        right: 350px;
        bottom: 50px;
        height: 300px;
        width: 300px;
        background-color: #1ED760;
        border-radius: 50%;
        display: inline-block;
        z-index: 0;

        @media (max-width: 1200px)
        {
            bottom: 30px;
            right: 65%;
            height: 100px;
            width: 100px;
        }

        @media (max-width: 750px)
        {
            bottom: -50px;
            right: 44%;
            height: 100px;
            width: 100px;
        }
    }       
`;

export const Content = styled.div`
    text-align: left;
    display: flex;
    margin-left: 100px;
    margin-right: 100px;
    justify-content: space-between;

    @media (max-width: 1200px)
    {
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info{
        margin-top: 90px;
        color: #1ED760;

        @media (max-width: 1200px)
        {
            margin-top: 120px;
        }

        .title{
            margin-top: 45px;
            font-size: 3.5rem;
            font-weight: 900;

            @media (max-width: 750px)
            {
                font-size: 200%;
                white-space: nowrap;
            }
        }

        .desc{
            margin-top: 40px;
            font-size: 1.4rem;
            font-weight: unset;
            max-width: 700px;
        }

        .three-months{
            margin-top: 45px;

            .three-months-button{
                background-color: #1ED760;
                font-size: 0.9rem;
                color: #2941AB;
                font-weight: 700;
                width: 250px;
                height: 45px;
                border-radius: 50px;
                letter-spacing: 1px;
                border: none;
                outline: none;

                :hover{
                    width: 255px;
                    height: 47px;
                    font-size: 0.92rem;
                    cursor: pointer;
                    margin-left: -3px;
                    margin-top: -1px;
                }
            }
        }
    }

    .info-pic{
        margin-right: 100px;
        margin-top: 90px;

        .listen-pic{

        }
    }
`;