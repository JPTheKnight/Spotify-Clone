import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    margin: 0;
    right: 0;
    top: 0;
    height: 100%;
    background-color: black;
    width: 300px;
    z-index: 10;
    user-select: none;
    margin-right: -1050px;
    overflow-y: auto;

    a{text-decoration: none; color: white;}

    .x{
        position: absolute;
        color: white;
        font-size: 1.5rem;
        top: 30px;
        right: 30px;
    }
`;

export const Content = styled.div`
    z-index: 11;
    color: white;
    display: flex;
    flex-direction: column;

    .top-text{
        display: flex;
        flex-direction: column;
        font-size: 2.2rem;
        text-align: left;
        margin-top: 35px;
        margin-left: 35px;

        span{
            margin-bottom: 20px;

            :hover{
                color: #1ED760;
                cursor: pointer;
            }
        }
    }

    .bottom-text{
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        text-align: left;
        margin-top: 45px;
        margin-left: 35px;

        a{
            margin-bottom: 20px;
        }

        span{
            margin-bottom: 20px;

            :hover{
                color: #1ED760;
                cursor: pointer;
            }
        }
    }

    .logo-container{
        position: absolute;
        bottom: 20px;
        left: 30px;
        .logo{
            height: 30px;
        }
    }
`;