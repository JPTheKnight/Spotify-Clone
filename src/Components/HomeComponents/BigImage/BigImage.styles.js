import styled from "styled-components";

export const Wrapper = styled.div`
    height: 545px;
    background-color: #B49BC8;

    @media (max-width: 1200px)
    {
        height: 1000px;
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .info{
        margin-top: 90px;
        letter-spacing: 1px;

        .premium{
            font-size: 0.9rem;

            @media (max-width: 1000px)
            {
                font-size: 0.8rem;
            }

            @media (max-width: 700px)
            {
                font-size: 0.7rem;
            }
        }

        .title{
            margin-top: 45px;
            font-size: 3.5rem;
            font-weight: 900;

            @media (max-width: 1000px)
            {
                font-size: 3.2rem;
            }

            @media (max-width: 700px)
            {
                font-size: 2.6rem;
            }

            @media (max-width: 500px)
            {
                font-size: 2.2rem;
            }
        }

        .desc{
            margin: 0 auto;
            margin-top: 35px;
            font-size: 1.4rem;
            font-weight: unset;
            max-width: 700px;

            @media (max-width: 1000px)
            {
                font-size: 1.2rem;
            }

            @media (max-width: 700px)
            {
                font-size: 1rem;
            }
        }

        .three-months{
            margin-top: 40px;

            .three-months-button{
                background-color: black;
                font-size: 0.9rem;
                color: white;
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
        margin: 0 auto;
        margin-top: 90px;

        @media (max-width: 1000px)
            {
                margin: 90px 100px;
            }

            @media (max-width: 700px)
            {
                margin: 90px 100px;
            }

        .listen-pic{
            @media (max-width: 1000px)
            {
                height: 350px;
            }

            @media (max-width: 700px)
            {
                height: 250px;
            }
        }
    }
`;