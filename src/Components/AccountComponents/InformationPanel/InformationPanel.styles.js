import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    user-select: none;
`;

export const LeftContent = styled.div`
    background-color: #1C1C1C;
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px)
    {
        display: none;
    }

    .profile-pic{
        margin: 30px auto;
        border-radius: 50%;
        height: 65px;
        width: 65px;
    }

    .button{
        font-size: 1rem;
        border-top: 1px solid #272727;
        border-bottom: 1px solid #161616;
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: left;
        color: gray;

        :hover{
            border-left: 5px solid #1ED760;
            cursor: pointer;
        }

        .logo-img{
            height: 20px;
            margin: 0 25px;

            @media (max-width: 1100px)
            {
                display: none;
            }
        }

        .option{
            @media (max-width: 1100px)
            {
                margin-left: 30px;
            }
        }
    }

    .button-clicked{
        font-size: 1rem;
        border-top: 1px solid #272727;
        border-bottom: 1px solid #161616;
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: left;
        color: white;
        border-left: 5px solid #1ED760;

        .logo-img{
            height: 20px;
            margin: 0 25px;

            @media (max-width: 1100px)
            {
                display: none;
            }
        }

        .option{
            @media (max-width: 1100px)
            {
                margin-left: 30px;
            }
        }
    }
`;

export const RightContent = styled.div`
    flex: 3;
    background-color: white;
    text-align: left;

    @media (max-width: 1000px)
    {
        width: 60%;
    }

    .dropdown-button{
        display: none;
        position: absolute;
        top: 90px;

        @media (max-width: 768px)
        {
            margin-left: 2%;
            margin-top: -20px;
            display: block;
            width: 96%;
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
        position: absolute;
        top: 110px;

        @media (max-width: 768px)
        {
            display: flex;
            flex-direction: column;
            background-color: white;
            border-radius: 5px;
            z-index: 10;
            text-align: left;
            width: 96%;
            margin-left: 2%;
            overflow: hidden;
            .row{
                padding-top: 10px;
                padding-left: 15px;
                padding-bottom: 10px;

                .img-container{
                    img{
                        height: 15px;
                        z-index: 10;
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

    .title{
        font-size: 3rem;
        font-weight: 700;
        color: #1C1C1C;
        margin-left: 50px;
        margin-top: 55px;

        @media (max-width: 768px)
        {
            margin-top: 55px;
            margin-left: 10px;
            font-size: 1.8rem;
        }
    }

    .profile{
        margin-left: 50px;

        @media (max-width: 768px)
        {
            margin-left: 10px;
        }

        .profile-text{
            font-size: 1.5rem;
            margin-top: 32px;
            color: #1C1C1C;
        }

        .profile-table{
            margin-top: 40px;
            font-family: Arial, Helvetica, sans-serif;

            hr{
                border-top: 1px solid #DEDEDE;
                margin-right: 50px;

                @media (max-width: 768px)
                {
                    margin-right: 10px;
                }
            }
        }

        .profile-row{
            margin-bottom: 20px;
            margin-top: 20px;
            display: flex;

            .username{
                color: #B3B3B3;
                flex: 1;
            }

            .actual-username{
                flex: 1;
                @media (max-width: 768px)
                {
                    text-align: right;
                    margin-right: 5px;
                }
            }
        }

        .edit-profile{
            margin-top: 30px;

            .edit-profile-button{
                height: 45px;
                width: 150px;
                border: 1px solid #878787;
                border-radius: 22px;
                outline: none;
                background-color: white;
                font-family: Circular Spotify Tx T Bold;
                font-size: 0.85rem;

                :hover{
                    width: 155px;
                    height: 47px;
                    font-size: 0.92rem;
                    cursor: pointer;
                    margin-right: -3px;
                    margin-top: -1px;
                    color: black;
                }
            }
        }
    }

    .plan{
        margin-left: 50px;

        @media (max-width: 768px)
        {
            margin-left: 10px;
        }

        .plan-text{
            font-size: 1.5rem;
            margin-top: 82px;
            color: #1C1C1C;
        }

        .plan-table{
            margin-top: 20px;
            border: 1px solid #D9DADC;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            width: 95%;
            height: 400px;
            overflow: hidden;

            @media (max-width: 1000px)
            {
                width: 90%;
            }

            @media (max-width: 768px)
            {
                width: 98%;
                margin-right: auto;
            }

            .spotify-free{
                flex: 1;
                font-size: 3rem;
                color: white;
                background: linear-gradient(to bottom, rgb(182,43,190) 0%, rgb(150,34,185) 100%);

                .text{
                    margin-top: 70px;
                    margin-left: 30px;
                    padding: 5px 0;

                    @media (max-width: 768px)
                    {
                        margin-left: 10px;
                        font-size: 2.5rem;
                    }
                }
            }

            .text{
                flex: 1;
                display: flex;
                flex-direction: column;
                
                .play{
                    margin-top: 50px;
                    margin-left: 30px;
                    font-size: 1rem;

                    @media (max-width: 768px)
                    {
                        margin-left: 10px;
                    }
                }

                .free{
                    margin-top: 60px;
                    margin-left: 30px;
                    font-size: 1.2rem;

                    @media (max-width: 768px)
                    {
                        margin-left: 10px;
                    }
                }
            }
        }

        .join-premium{
            margin-top: 30px;

            .join-premium-button{
                height: 45px;
                width: 150px;
                border: 1px solid #878787;
                border-radius: 22px;
                outline: none;
                background-color: white;
                font-family: Circular Spotify Tx T Bold;
                font-size: 0.85rem;

                :hover{
                    width: 155px;
                    height: 47px;
                    font-size: 0.92rem;
                    cursor: pointer;
                    margin-right: -3px;
                    margin-top: -1px;
                    color: black;
                }
            }
        }       
    }

    .signout{
        margin-left: 50px;

        @media (max-width: 768px)
        {
            margin-left: 10px;
        }

        .signout-text{
            font-size: 1.5rem;
            margin-top: 82px;
            color: #1C1C1C;
        }

        .signout-table{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            width: 775px;

            @media (max-width: 1000px)
            {
                width: 90%;
            }

            .text{
                padding: 5px 0;
                font-family: Arial, Helvetica, sans-serif;
                letter-spacing: 1px;
            }
        }

        .note{
            margin-top: 40px;
            margin-bottom: 50px;
            width: 775px;

            @media (max-width: 1000px)
            {
                width: 500px;
            }

            @media (max-width: 768px)
            {
                display: none;
            }

            .msg{
                border: 1px solid #D9DADC;
                background-color: #F8F8F8;
                width: 775px;              
                padding-top: 20px;
                padding-bottom: 20px;
                padding-left: 15px;
                padding-right: 215px;

                @media (max-width: 1000px)
                {
                    padding-right: 10px;
                    font-size: 0.75rem;
                }            
            }
        }

        .sign-out{
            padding-bottom: 125px;
            margin-top: 20px;

            .sign-out-button{
                height: 45px;
                width: 175px;
                border: 1px solid #878787;
                border-radius: 22px;
                outline: none;
                background-color: white;
                font-family: Circular Spotify Tx T Bold;
                font-size: 0.85rem;

                :hover{
                    width: 180px;
                    height: 47px;
                    font-size: 0.92rem;
                    cursor: pointer;
                    margin-right: -3px;
                    margin-top: -1px;
                    color: black;
                }
            }
        }     
    }

    .editprofile{
        margin-left: 50px;
        margin-top: 30px;

        @media (max-width: 768px)
        {
            margin-left: 10px;
            margin-right: 15px;
        }

        hr{
            border-top: 1px solid #DEDEDE;
            margin-right: 50px;

            @media (max-width: 768px)
            {
                margin-right: 20px;
            }
        }
        
        .profile-table{
            .profile-row{
                display: flex;
                flex-direction: column;
                margin-bottom: 30px;
                position: relative;

                @media (max-width: 1000px)
                {
                    width: 90%;
                }

                @media (max-width: 768px)
                {
                    width: 100%;
                }

                .email{
                    font-size: 0.8rem;
                    margin-bottom: 8px;
                }

                .email-input{
                    input{
                        height: 45px;
                        border-radius: 7px;
                        outline: none;
                        border: 1px solid #878787;
                        font-size: 1.1rem;
                        width: 775px;

                        @media (max-width: 1000px)
                        {
                            width: 450px;
                        }

                        @media (max-width: 768px)
                        {
                            width: 100%;
                        }

                        :focus{
                            border: 3px solid black;
                        }
                    }
                }

                .email-button{

                    button{
                        height: 55px;
                        border-radius: 7px;
                        outline: none;
                        border: 1px solid #878787;
                        font-size: 1rem;
                        width: 780px;

                        @media (max-width: 1000px)
                        {
                            width: 455px;
                        }

                        @media (max-width: 768px)
                        {
                            width: 101%;
                        }

                        text-align: left;
                        background-color: white;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        
                        :focus{
                            border: 3px solid black;
                        }
                        
                        span{
                            margin-left: 10px;
                        }

                        img{
                            height: 7px;
                            margin-right: 10px;
                        }
                    }
                }

                .email-several-input{
                    display: flex;
                    width: 101%;

                    button{
                        margin: 0 25px;
                        height: 54px;
                        border-radius: 7px;
                        outline: none;
                        border: 1px solid #878787;
                        font-size: 1rem;
                        width: 150px;

                        @media (max-width: 1000px)
                        {
                            width: 100px;
                        }

                        @media (max-width: 768px)
                        {
                            width: 29%;
                        }

                        text-align: left;
                        background-color: white;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        
                        :focus{
                            border: 3px solid black;
                        }
                        
                        span{
                            margin-left: 10px;

                            @media (max-width: 1000px)
                            {
                                margin-left: 0;
                            }
                        }
    
                        img{
                            height: 7px;
                            margin-right: 10px;

                            @media (max-width: 1000px)
                            {
                                margin-right: 0;
                            }
                        }
                    }

                    input{
                        height: 50px;
                        border-radius: 7px;
                        outline: none;
                        border: 1px solid #878787;
                        font-size: 1.1rem;
                        width: 200px;

                        @media (max-width: 1000px)
                        {
                            width: 146px;
                        }

                        @media (max-width: 768px)
                        {
                            width: 34%;
                        }

                        :focus{
                            border: 3px solid black;
                        }
                    }
                }
            }

            .dropdown{
                z-index: 10;
                position: absolute;
                display: flex;
                flex-direction: column;
                border: 1px solid #878787;
                width: 775px;

                @media (max-width: 1000px)
                {
                    width: 450px;
                }

                @media (max-width: 768px)
                {
                    width: 100%;
                    left: -2%;
                    border-radius: 0;
                }

                top: 79px;
                bottom: -60px;
                left: 1px;
                background-color: white;
                box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);
                -webkit-box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);
                -moz-box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);

                span{
                    padding-left: 5px;
                    padding-top: 5px;

                    :hover{
                        background-color: #249EE6;
                    }
                }
            }

            .dropdown-location{
                z-index: 10;
                position: absolute;
                display: flex;
                flex-direction: column;
                border: 1px solid #878787;
                width: 775px;

                @media (max-width: 1000px)
                {
                    width: 450px;
                }

                @media (max-width: 768px)
                {
                    width: 100%;
                }

                bottom: -26px;
                left: 1px;
                background-color: white;
                box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);
                -webkit-box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);
                -moz-box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);

                span{
                    padding-left: 5px;
                    padding-top: 5px;

                    :hover{
                        background-color: #249EE6;
                    }
                }
            }

            .dropdown-months{
                z-index: 10;
                position: absolute;
                display: flex;
                flex-direction: column;
                border: 1px solid #878787;
                width: 150px;

                @media (max-width: 1000px)
                {
                    width: 100px;
                    left: 175px;
                }

                @media (max-width: 768px)
                {
                    width: 100px;
                    left: 50%;
                }

                bottom: -50px;
                left: 230px;
                background-color: white;
                box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);
                -webkit-box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);
                -moz-box-shadow: 0px 17px 35px -9px rgba(123,123,123,0.75);

                span{
                    padding-left: 5px;
                    padding-top: 5px;

                    :hover{
                        background-color: #249EE6;
                    }
                }
            }
        }

        .cancel-submit{
            padding-bottom: 125px;
            letter-spacing: 1px;
            display: flex;
            justify-content: right;
            margin-right: 45px;
            margin-top: 20px;

            @media (max-width: 768px)
            {
                margin-right: 25px;
            }

            .cancel-button{
                height: 45px;
                width: 175px;
                border: none;
                outline: none;
                background-color: white;
                font-family: Circular Spotify Tx T Bold;
                font-size: 0.85rem;
                color: gray;

                :hover{
                    width: 180px;
                    height: 47px;
                    font-size: 0.92rem;
                    cursor: pointer;
                    margin-right: -3px;
                    margin-top: -1px;
                    color: black;
                }
            }

            .submit-button{
                height: 45px;
                width: 175px;
                color: black;
                border: none;
                background-color: #1ED760;
                border-radius: 22px;
                outline: none;
                font-family: Circular Spotify Tx T Bold;
                font-size: 0.85rem;

                :hover{
                    width: 180px;
                    height: 47px;
                    font-size: 0.92rem;
                    cursor: pointer;
                    margin-right: -3px;
                    margin-top: -1px;
                }
            }
        }     
    }
`;