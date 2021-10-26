import styled from "styled-components";

export const Wrapper = styled.div`
    height: 545px;
    background-color: #B49BC8;
    user-select: none;
`;

export const Content = styled.div`
    text-align: left;
    display: flex;
    margin-left: 20px;
    justify-content: space-between;

    .dropdown-button{
        display: none;

        @media (max-width: 768px)
        {
            margin-left: -15px;
            margin-top: -20px;
            display: block;
            position: absolute;
            width: 105%;
            top: 0;
            button{
                position: relative;
                width: 100%;
                height: 40px;
                outline: none;
                border: none;
                border-radius: 5px;
                text-align: left;
                background-color: white;
                .img-container-option{
                    margin-left: 10px;
                    img{
                        height: 20px;
                    }
                }
                .text-option{
                    margin-left: 20px;
                    font-size: 1.2rem;
                }
                .arrow-container{
                    position: absolute;
                    right: 15px;
                    top: 15px;
                    img{
                        height: 10px;
                    }
                }
            }
        }
    }

    .dropdown{
        display: none;

        @media (max-width: 768px)
        {
            display: flex;
            flex-direction: column;
            background-color: white;
            border-radius: 5px;
            z-index: 10;
            text-align: left;
            width: 105%;
            margin-left: -15px;
            overflow: hidden;
            .row{
                padding-top: 10px;
                padding-left: 15px;
                padding-bottom: 10px;

                .img-container{
                    img{
                        height: 15px;
                    }
                }
                .text{
                    margin-left: 20px;
                    font-size: 1rem;
                }

                :hover{
                    background-color: gray;
                }
            }
        }
    }

    .info{
        margin-top: 45px;
        letter-spacing: 1px;

        @media (max-width: 1000px)
        {
            margin-left: 75px;
            width: 500px;
        }

        @media (max-width: 768px)
        {
            margin-left: 5px;
            width: 95%;
        }

        .premium{
            font-size: 0.9rem;
        }

        .title{
            margin-top: 45px;
            font-size: 3.5rem;
            font-weight: 900;

            @media (max-width: 768px)
            {
                font-size: 2rem;
            }
        }

        .desc{
            margin-top: 35px;
            font-size: 1.4rem;
            font-weight: unset;

            @media (max-width: 768px)
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

        .warning{
            font-size: 0.75rem;
            font-family: Arial, Helvetica, sans-serif;
            margin-top: 40px;
            letter-spacing: 0px;
            color: black;
        }
    }

    .info-pic{
        margin-right: 100px;
        margin-top: 90px;

        .listen-pic{
            height: 300px;
            width: 300px;
            border-radius: 50%;
            object-fit: cover;
        }

        @media (max-width: 1000px)
        {
            display: none;
        }
    }
`;