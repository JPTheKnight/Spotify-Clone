import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #282828;
    height: 100%;
    overflow: hidden;
`;

export const Header = styled.div`
    height: 90px;
    background-color: #181818;
    box-shadow: 10px 0 20px 0 #181818;

    .logo-container{
        display: flex;
        justify-content: center;
        .logo{
            height: 50px;
            margin: 20px 0;
        }
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: min(15%, 100px);
    justify-content: center;
    width: 100%;

    .container{
        display: flex;
        flex-direction: column;
        text-align: center;

        @media (max-width: 768px)
        {
            width: 100%;
        }

        .text{
            font-size: 1.2rem;
            color: #fff;
            margin-bottom: 10px;
            margin-top: 30px;
            text-align: left;
            margin-left: 4.5%;
        }

        .input{
            input{
                width: 400px;
                height: 40px;
                font-size: 1.1rem;

                @media (max-width: 768px)
                {
                    width: 90%;
                }
            }
        }
    }

    .sign-in{
        margin-top: 40px;
        @media (max-width: 768px)
        {
            width: 100%;
        }

        .sign-in-button{
            background-color: #282828;
            font-size: 0.92rem;
            color: white;
            font-weight: 700;
            width: 300px;
            height: 45px;
            border-radius: 50px;
            letter-spacing: 1px;
            border: 4px solid #181818;
            outline: none;

            @media (max-width: 768px)
            {
                width: 200px;
            }

            :hover{
                cursor: pointer;
                background-color: #181818;
                transition: ease-in all 0.2s;
            }
        }
    }

    .sign-up{
        margin-top: 10px;

        @media (max-width: 768px)
        {
            width: 100%;
        }

        .sign-up-button{
            font-size: 0.92rem;
            background-color: #282828;
            color: white;
            font-weight: 700;
            width: 300px;
            height: 45px;
            letter-spacing: 1px;
            border: none;
            outline: none;

            @media (max-width: 768px)
            {
                width: 90%;
            }

            :hover{
                cursor: pointer;
                color: #181818;
            }
        }
    }

    .footer{
        background-color: #181818;
        height: 200px;
        margin-top: max(65%, 200px);
        z-index: 10;
        width: 100%;
        box-shadow: -10px 0 20px 0 #181818;

        .text{
            width: 255px;
            display: flex;
            margin: 0 auto;
            margin-top: 75px;
            color: white;
            font-size: 2rem;
            //animation: textcolor infinite 1s;
            transition: ease-in 1.5s all;

            .inchars{
                color: #181818;
            }

            @keyframes textcolor{
                0%{
                    background: linear-gradient(to right, black 0% 0em, red 0em 1.19em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                7%{
                    background: linear-gradient(to right, black 0% 1.19em, red 1.19em 2.71em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                14%{
                    background: linear-gradient(to right, black 0% 2.71em, red 2.71em 3.5em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                21%{
                    background: linear-gradient(to right, black 0% 3em, red 3em 4.2em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                29%{
                    background: linear-gradient(to right, black 0% 3.5em, red 3.5em 4.8em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                36%{
                    background: linear-gradient(to right, black 0% 4.2em, red 4.2em 5.6em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                43%{
                    background: linear-gradient(to right, black 0% 4.8em, red 4.8em 5.8em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                51%{
                    background: linear-gradient(to right, black 0% 5.6em, red 5.6em 6.4em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                58%{
                    background: linear-gradient(to right, black 0% 5.8em, red 5.8em 7em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                65%{
                    background: linear-gradient(to right, black 0% 6.4em, red 6.4em 7.6em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                73%{
                    background: linear-gradient(to right, black 0% 7em, red 7em 7.8em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                80%{
                    background: linear-gradient(to right, black 0% 7.6em, red 7.6em 8.4em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                87%{
                    background: linear-gradient(to right, black 0% 7.8em, red 7.8em 9.2em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                94%{
                    background: linear-gradient(to right, black 0% 8.6em, red 8.6em 10em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                100%{
                    background: linear-gradient(to right, black 0% 0em, red 0em 1.2em, black 1.9em 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }
`;