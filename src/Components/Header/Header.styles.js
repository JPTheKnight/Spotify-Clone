import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 80px;
    background-color: black;
    min-width: 100px;
    user-select: none;

    a{text-decoration: none;}

    @media (max-width: 1000px)
    {
        height: 50px;
    }
`;

export const Content = styled.div`
    display: flex;
    color: white;
    justify-content: space-between;
    margin-left: 0;
    position: relative;

    .logo{
        height: 40px;
        margin: 20px 0;
        margin-left: 100px;

        @media (max-width: 1000px)
        {
            height: 30px;
            margin: 10px 15px;
        }
    }

    .text{
        margin: 15px 100px;
        font-size: 1rem;
        display: flex;
        align-items: center;

        @media (max-width: 1000px)
        {
            display: none;
        }

        .link{
            margin-right: 35px;

            :hover{
                cursor: pointer;
                color: #1ED760;
            }

            -webkit-animation-name: slideInRight;
            animation-name: slideInRight;
            -webkit-animation-duration: 0.7s;
            animation-duration: 0.7s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }

        @-webkit-keyframes slideInRight {
            0% {
            -webkit-transform: translateX(200%);
            transform: translateX(200%);
            visibility: visible;
            opacity: 0;
            }
            40%{
                opacity: 0;
            }
            100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
            }
        }

        @keyframes slideInRight {
            0% {
            -webkit-transform: translateX(200%);
            transform: translateX(200%);
            visibility: visible;
            opacity: 0;
            }
            40%{
                opacity: 0;
            }
            100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
            }
        }

        .pic{
            margin-right: 15px;

            :hover{
                cursor: pointer;
                color: #1ED760;
            }
            animation: unset;
        }

        .profile-pic{
            margin-top: 5px;
            border-radius: 50%;
            height: 40px;
        }
    }

    .hamburger{
        display: none;

        @media (max-width: 1000px)
        {
            display: flex;
            margin-right: 1%;

            .pic{
                margin-right: 10px;
            }      

            .profile-pic{
                margin-top: 8px;
                border-radius: 50%;
                height: 35px;
            }

            .hamburger-icon{
                margin-top: 15px;
                height: 20px;

                :hover{
                    cursor: pointer;
                }
            }
        }
    }

    .profile-options{
        position: absolute;
        background-color: white;
        color: #9F9496;
        display: flex;
        flex-direction: column;
        text-align: left;
        bottom: -65px;
        right: 100px;
        padding: 15px 70px 15px 15px;
        border-radius: 3px;

        span{
            :hover{
                color: #1ED760;
                cursor: pointer;
            }
        }

        span:first-child{
            margin-bottom: 10px;

            a{
                color: black;

                :hover{
                    color: #1ED760;
                    cursor: pointer;
                }
            }
        }

        .triangle{
            position: absolute;
            top: -15px;
            right: 7px;
            width: 0; 
            height: 0; 
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 15px solid white;
        }
    }
`;