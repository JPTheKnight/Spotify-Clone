import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0;
    user-select: none;
    height: 100%;
    width: 100%;
    position: fixed;

    @media (max-width: 768px)
    {
        width: 101%;
    }

    a{
        text-decoration: none;
        color: white;

        :hover{
            cursor: pointer;
        }
    }
`;

export const LeftSide = styled.div`
    z-index: 10;
    background-color: black;
    position: fixed;
    float: left;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    overflow: hidden;

    @media (max-width: 768px)
    {
        display: none;
    }

    .left-content{
        color: white;

        .logo{
            height: 40px;
            margin-top: 25px;
            margin-left: -70px;
        }

        .column-1{
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            margin-left: 30px;
            .row{
                color: #8A8A8A;
                display: flex;
                text-align: left;
                align-items: center;
                padding-left: 20px;
                padding-top: 5px;
                margin-left: -20px;
                .text-img-container{
                    .text-img{
                        height: 25px;
                    }
                    margin-right: 20px;
                }

                :hover{
                    color: white;
                    transition: all ease-in 0.2s;
                    cursor: pointer;
                }
            }

            .row-clicked{
                color: white;
                display: flex;
                text-align: left;
                align-items: center;
                background-color: #282828;
                padding-left: 20px;
                padding-top: 5px;
                max-width: 95%;
                margin-left: -20px;
                border-radius: 5px;
                .text-img-container{
                    .text-img{
                        height: 25px;
                    }
                    margin-right: 20px;
                }

                :hover{
                    color: white;
                    transition: all ease-in 0.2s;
                    cursor: pointer;
                }
            }
        }

        .column-2{
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            margin-left: 30px;
            .row{
                color: #8A8A8A;
                display: flex;
                text-align: left;
                align-items: center;
                padding-left: 20px;
                padding-top: 5px;
                margin-left: -20px;
                .text-img-container{
                    .text-img{
                        height: 25px;
                    }
                    margin-right: 20px;
                }

                :hover{
                    color: white;
                    transition: all ease-in 0.2s;
                    cursor: pointer;
                }
            }

            .row-clicked{
                color: white;
                display: flex;
                text-align: left;
                align-items: center;
                background-color: #282828;
                padding-left: 20px;
                padding-top: 5px;
                max-width: 95%;
                margin-left: -20px;
                border-radius: 5px;
                .text-img-container{
                    .text-img{
                        height: 25px;
                    }
                    margin-right: 20px;
                }

                :hover{
                    color: white;
                    transition: all ease-in 0.2s;
                    cursor: pointer;
                }
            }
        }

        hr{
            border-top: 1px solid #8A8A8A;
            opacity: 0.4;
            margin-left: 30px;
            margin-right: 30px;
        }

        .column-3{
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            margin-left: 30px;
            .row{
                font-size: 0.9rem;
                color: #8A8A8A;
                margin-bottom: 10px;
                display: flex;
                text-align: left;
                align-items: center;

                :hover{
                    color: white;
                    transition: all ease-in 0.2s;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const BottomSide = styled.div`
    z-index: 100;
    background-color: #282828;
    position: fixed;
    bottom: -1px;
    width: 101%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .bottom-content{
        @media (max-width: 768px)
        {
            display: none;
        }

        display: flex;
        background-color: #181818;
        width: 100%;
        height: 90px;
        border-top: 1px solid #242424;
        align-items: center;
        justify-content: space-between;

        .left{
            display: flex;
            align-items: center;
            .album-img-container{
                margin: auto 20px;
                margin-right: 10px;
                .album-img{
                    display: flex;
                    height: 60px;
                }
            }
            .text{
                display: flex;
                flex-direction: column;
                .song-name{
                    color: white;
                    font-size: 0.9rem;
                }
                .singer-name{
                    color: gray;
                    font-size: 0.65rem;
                    white-space: nowrap;
                }
            }
            .heart-img-container{
                margin: auto 20px;
                .heart-img{
                    display: flex;
                    height: 15px;
                }
            }
        }

        .middle{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 15px;

            .top{
                display: flex;
                align-items: center;
                margin-bottom: -5px;
                .side-img-container{
                    margin: 5px 0px;
                    .side-img{
                        height: 15px;
                    }
                }
                .arrow-img-container{
                    margin: 5px 18px;
                    .arrow-img{
                        height: 20px;
                    }
                }
                .play-img-container{
                    .play-img{
                        height: 30px;
                    }
                }
            }

            .bottom{
                margin-bottom: 10px;
                .tiny-text{
                    color: white;
                }
            }
        }

        .right{
            margin-right: 40px;
            align-items: center;
            display: flex;
            .queue-img-container{
                .queue-img{
                    height: 15px;
                }
                margin-right: 10px;
            }

            .pc-img-container{
                .pc-img{
                    height: 15px;
                }
                margin-right: 10px;
            }
        }
    }

    .bottom-content-mobile{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        @media (min-width: 769px)
        {
            display: none;
        }

        .top{
            height: 40px;
            width: 100%;
            border-bottom: 2px solid #242424;
            border-top: 2px solid #403f3e;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .name-container{
                .text-white{
                    color: white;
                }
                .text{
                    color: gray;
                }
            }

            .icon-container{
                padding: 20px;
                display: flex;
                flex-direction: column;
                .icon{
                    height: 20px;
                    margin-bottom: 5px;
                }
            }
        }
        .bottom{
            height: 50px;
            margin-top: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 70%;
            color: white;

            .icon-container{
                display: flex;
                flex-direction: column;
                padding: 10px;
                .icon{
                    height: 20px;
                    margin-bottom: 5px;
                }
                .text{
                    font-size: 0.7rem;
                }
                :hover{
                    background-color: #181818;
                }
            }
        }
    }
`;

export const Body = styled.div`
    background: linear-gradient(to bottom right, rgb(33,17,95) 0%, rgb(0, 0, 0) 50%);
    margin-left: 250px;
    height: 100%;
    overflow-y: hidden;

    @media (max-width: 768px)
    {
        margin-left: 0px;
    }

    .body-content::-webkit-scrollbar {
        display: block;
        width: 15px;
    }
    .body-content::-webkit-scrollbar-track {
        background: transparent;
    }
        
    .body-content::-webkit-scrollbar-thumb {
        background-color: gray;
        border-right: none;
        border-left: none;
    }

    .body-content::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 180px; 
    }

    .body-content::-webkit-scrollbar-track-piece:start {
        background: transparent;
    }

    .body-content{
        height: 100%;
        margin-left: 30px;
        padding-top: 95px; 
        max-width: 100%;
        justify-content: center;
        overflow-x: hidden;

        @media (max-width: 768px)
        {
            display: none;
        }

        .header{
            z-index: 50;
            margin-left: -30px;
            position: fixed;
            display: flex;
            top: 0;
            align-items: center;
            height: 60px;
            background-color: rgba(32, 17, 93, 0);
            width: 100%;
            .upgrade-button-container{
                @media (max-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 220px;
                .upgrade-button{
                    letter-spacing: 1px;
                    width: 125px;
                    height: 35px;
                    border-radius: 20px;
                    border: 1px solid white;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;
                }
            }

            .profile-button-container{
                @media (max-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 30px;
                margin-left: 20px;
                .profile-button{
                    letter-spacing: 1px;
                    min-width: 65px;
                    max-width: 175px;
                    height: 30px;
                    border-radius: 15px;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;

                    .pic-container{
                        margin-top: 3px;
                        margin-left: -3px;
                        margin-right: 6px;
                        .pic{
                            height: 25px;
                            border-radius: 50%;
                        }
                    }

                    .name{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }

            .profile-pic-container{
                @media (min-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 20px;
                margin-left: 20px;
                .profile-pic{
                    letter-spacing: 1px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .pic-container{
                        margin-top: 3px;
                        margin-left: -3px;
                        .pic{
                            height: 35px;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }

        .good{
            text-align: left;
            font-size: 2rem;
            color: white;
        }

        .grid-1{
            width: 99.25%;
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
            grid-auto-columns: 300px;
            grid-row-gap: 15px;
            grid-column-gap: 15px;
            overflow-x: hidden;

            .cell-bg{
                width: 95%;
                min-width: 340px;
                height: 80px;
                display: flex;
                align-items: center;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 5px;
                overflow: hidden;
                position: relative;

                .img-container{
                    .img{
                        height: 80px;
                        box-shadow: 5px 0px 18px -6px rgba(41,41,41,0.75);
                        -webkit-box-shadow: 5px 0px 18px -6px rgba(41,41,41,0.75);
                        -moz-box-shadow: 5px 0px 18px -6px rgba(41,41,41,0.75);
                    }
                    margin-right: 20px;
                    margin-top: auto;
                    margin-bottom: auto;
                }

                .img-name{
                    color: white;
                }

                .play-img-container{
                    position: absolute;
                    right: 20px;
                    height: 35px;
                    width: 35px;
                    border-radius:50%;
                    border: none;
                    .play-img{
                        height: 35px;
                        object-fit: contain;
                        opacity: 0;
                    }
                }

                :hover{
                    transition: all ease-in 0.3s;
                    background-color: rgba(255, 255, 255, 0.3);
                    cursor: pointer;
                    .play-img-container{
                        cursor: pointer;
                        width: 35px;
                        height: 35px;
                        border-radius:50%;
                        box-shadow: 0 5px 10px 0px #181818;
                        .play-img{
                            height: 35px;
                            object-fit: contain;
                            opacity: 1;
                            transition: all ease-in 0.3s;
                        }
                    }
                }
            }
        }

        .made-for{
            text-align: left;
            font-size: 1.6rem;
            color: white;
            margin-top: 40px;
        }

        .grid-2{
            width: 100%;
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
            grid-row-gap: 40px;
            grid-column-gap: 10px;
            padding-bottom: 250px;
            overflow-x: hidden;

            .cell-bg{
                width: 95%;
                height: 105%;
                display: flex;
                flex-direction: column;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 5px;
                overflow: hidden;
                position: relative;

                .img-container{
                    position: relative;

                    .img{
                        height: 160px;
                        width: 160px;
                        object-fit: cover;
                        border-radius: 5px;
                    }
                    .img-svg-container{
                        display: none;
                        position: absolute;
                        width: 100%;
                        top: 1;
                        left: 0;
                        z-index: 10;
                        .img-svg{
                            height: 160px;
                            border-radius: 5px;
                        }
                    }
                    margin-top: 20px;
                    margin-bottom: 7px;
                }

                .img-name{
                    color: white;
                    text-align: left;
                    margin-left: 20px;
                }

                .play-img-container{
                    z-index: 99;
                    position: absolute;
                    right: 24px;
                    bottom: 75px;
                    height: 35px;
                    width: 35px;
                    border-radius:50%;
                    border: none;
                    .play-img{
                        height: 35px;
                        object-fit: contain;
                        opacity: 0;
                    }
                }

                :hover{
                    transition: all ease-in 0.3s;
                    background-color: rgba(255, 255, 255, 0.3);
                    cursor: pointer;
                    .play-img-container{
                        cursor: pointer;
                        right: 24px;
                        bottom: 80px;
                        transition: all ease-in 0.3s;
                        width: 35px;
                        height: 35px;
                        border-radius:50%;
                        box-shadow: 0 5px 10px 0px #181818;
                        .play-img{
                            height: 35px;
                            object-fit: contain;
                            opacity: 1;
                            transition: all ease-in 0.3s;
                        }
                    }
                }

                .img-desc{
                    color: #AEAEAE;
                    text-align: left;
                    margin-left: 20px;
                    font-size: 0.85rem;
                    max-width: 160px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
    }

    .body-content-mobile::-webkit-scrollbar {
        display: none;
    }

    .body-content-mobile{
        height: 100%;
        margin-left: 15px;
        margin-right: 15px;
        padding-top: 95px; 
        justify-content: center;
        overflow-x: hidden;

        @media (min-width: 769px)
        {
            display: none;
        }

        .profile-pic-container{
            z-index: 10;
            position: absolute;
            top: 20px;
            right: 20px;

            .pic-container{
                .pic{
                    height: 30px;
                }
            }
        }

        .shortcut{
            text-align: left;
            font-size: 1.2rem;
            color: white;
        }

        .grid-1{
            width: 100%;
            margin-top: 20px;
            overflow-x: hidden;
            display: flex;

            .cell-bg{
                .cell{
                    height: 190px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-radius: 5px;
                    overflow: hidden;
                    position: relative;

                    .img-container{
                        .img{
                            height: 150px;
                        }
                        margin-bottom: 10px;
                    }

                    .img-name{
                        color: white;
                        font-size: 0.8rem;
                    }
                }
            }
        }

        .made-for{
            text-align: left;
            font-size: 1.2rem;
            color: white;
            margin-top: 40px;
        }

        .grid-2{
            width: 100%;
            margin-top: 20px;
            padding-bottom: 500px;
            display: grid;
            grid-template-columns: repeat(5, 150px);
            grid-auto-columns: 300px;
            grid-row-gap: 15px;
            grid-column-gap: 15px;
            overflow-x: hidden;

            .cell-bg{
                .cell{
                    //width: 95%;
                    height: 190px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-radius: 5px;
                    overflow: hidden;
                    position: relative;

                    .img-container{
                        .img{
                            height: 150px;
                            width: 150px;
                            object-fit: cover;
                        }
                        margin-bottom: 10px;
                    }

                    .img-name{
                        color: white;
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }
`;

export const Search = styled.div`
    background: linear-gradient(to bottom right, rgb(33,17,95) 0%, rgb(0, 0, 0) 50%);
    margin-left: 250px;
    height: 100%;
    overflow-y: hidden;

    @media (max-width: 768px)
    {
        margin-left: 0px;
    }

    .body-content::-webkit-scrollbar {
        display: block;
        width: 15px;
    }
    .body-content::-webkit-scrollbar-track {
        background: transparent;
    }
        
    .body-content::-webkit-scrollbar-thumb {
        background-color: gray;
        border-right: none;
        border-left: none;
    }

    .body-content::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 180px; 
    }

    .body-content::-webkit-scrollbar-track-piece:start {
        background: transparent;
    }

    .body-content{
        height: 100%;
        margin-left: 30px;
        padding-top: 95px; 
        max-width: 100%;
        justify-content: center;
        overflow-x: hidden;

        @media (max-width: 768px)
        {
            display: none;
        }

        .header{
            z-index: 50;
            margin-left: -30px;
            position: fixed;
            display: flex;
            top: 0;
            align-items: center;
            height: 60px;
            background-color: rgba(32, 17, 93, 1);
            width: 100%;
            .search-bar{
                margin-left: 30px;

                .search{
                    height: 30px;
                    width: 300px;
                    border-radius: 20px;
                    border: 1px solid #181818;
                    padding-left: 10px;
                }
            }
            .upgrade-button-container{
                @media (max-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 220px;
                .upgrade-button{
                    letter-spacing: 1px;
                    width: 125px;
                    height: 35px;
                    border-radius: 20px;
                    border: 1px solid white;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;
                }
            }

            .profile-button-container{
                @media (max-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 30px;
                margin-left: 20px;
                .profile-button{
                    letter-spacing: 1px;
                    min-width: 65px;
                    max-width: 175px;
                    height: 30px;
                    border-radius: 15px;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;

                    .pic-container{
                        margin-top: 3px;
                        margin-left: -3px;
                        margin-right: 6px;
                        .pic{
                            height: 25px;
                            border-radius: 50%;
                        }
                    }

                    .name{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }

            .profile-pic-container{
                @media (min-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 20px;
                margin-left: 20px;
                .profile-pic{
                    letter-spacing: 1px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .pic-container{
                        margin-top: 3px;
                        margin-left: -3px;
                        .pic{
                            height: 35px;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }

        .made-for{
            text-align: left;
            font-size: 1.6rem;
            color: white;
        }

        .search-body{
            display: flex;
            .grid-2{
                width: 60%;
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
                grid-row-gap: 40px;
                grid-column-gap: 10px;
                padding-bottom: 250px;
                overflow-x: hidden;

                .cell-bg{
                    width: 95%;
                    height: 105%;
                    display: flex;
                    flex-direction: column;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 5px;
                    overflow: hidden;
                    position: relative;

                    .img-container{
                        position: relative;

                        .img{
                            height: 160px;
                            width: 160px;
                            object-fit: cover;
                            border-radius: 5px;
                        }
                        .img-svg-container{
                            display: none;
                            position: absolute;
                            width: 100%;
                            top: 1;
                            left: 0;
                            z-index: 10;
                            .img-svg{
                                height: 160px;
                                border-radius: 5px;
                            }
                        }
                        margin-top: 20px;
                        margin-bottom: 7px;
                    }

                    .img-name{
                        color: white;
                        text-align: left;
                        margin-left: 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 160px;
                    }

                    .play-img-container{
                        z-index: 99;
                        position: absolute;
                        right: 24px;
                        bottom: 75px;
                        height: 35px;
                        width: 35px;
                        border-radius:50%;
                        border: none;
                        .play-img{
                            height: 35px;
                            object-fit: contain;
                            opacity: 0;
                        }
                    }

                    :hover{
                        transition: all ease-in 0.3s;
                        background-color: rgba(255, 255, 255, 0.3);
                        cursor: pointer;
                        .play-img-container{
                            cursor: pointer;
                            right: 24px;
                            bottom: 80px;
                            transition: all ease-in 0.3s;
                            width: 35px;
                            height: 35px;
                            border-radius:50%;
                            box-shadow: 0 5px 10px 0px #181818;
                            .play-img{
                                height: 35px;
                                object-fit: contain;
                                opacity: 1;
                                transition: all ease-in 0.3s;
                            }
                        }
                    }

                    .img-desc{
                        color: #AEAEAE;
                        text-align: left;
                        margin-left: 20px;
                        font-size: 0.85rem;
                        max-width: 160px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }

            .lyrics::-webkit-scrollbar {
                display: block;
                width: 15px;
            }
            .lyrics::-webkit-scrollbar-track {
                background: transparent;
            }
                
            .lyrics::-webkit-scrollbar-thumb {
                background-color: gray;
                border-right: none;
                border-left: none;
            }

            .lyrics::-webkit-scrollbar-track-piece:end {
                background: transparent;
            }

            .lyrics::-webkit-scrollbar-track-piece:start {
                background: transparent;
            }

            .lyrics{
                color: white;
                width: 20%;
                height: 700px;
                margin: 0 auto;
                overflow-y: scroll;
                padding: 0 20px;
            }
        }
    }

    .body-content-mobile::-webkit-scrollbar {
        display: none;
    }

    .body-content-mobile{
        height: 100%;
        margin-left: 15px;
        margin-right: 15px;
        padding-top: 65px; 
        justify-content: center;
        overflow-x: hidden;

        @media (min-width: 769px)
        {
            display: none;
        }

        .search-bar{
                .search{
                    height: 30px;
                    width: 95%;
                    border-radius: 20px;
                    border: 1px solid #181818;
                    padding-left: 10px;
                }
            }
        .profile-pic-container{
            z-index: 10;
            position: absolute;
            top: 20px;
            right: 20px;

            .pic-container{
                .pic{
                    height: 30px;
                }
            }
        }

        .made-for{
            text-align: left;
            font-size: 1.2rem;
            color: white;
            margin-top: 20px;
            margin-left: 10px;
        }

        .grid-2{
            width: 100%;
            margin-top: 20px;
            padding-bottom: 50px;
            display: grid;
            grid-template-columns: repeat(5, 150px);
            grid-auto-columns: 300px;
            grid-row-gap: 15px;
            grid-column-gap: 15px;
            overflow-x: hidden;

            .cell-bg{
                .cell{
                    //width: 95%;
                    //height: 250px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-radius: 5px;
                    overflow: hidden;
                    position: relative;

                    .img-container{
                        .img{
                            height: 150px;
                            width: 150px;
                            object-fit: cover;
                        }
                        margin-bottom: 10px;
                    }

                    .img-name{
                        color: white;
                        font-size: 0.8rem;
                    }

                    .img-artist{
                        color: #AEAEAE;
                        font-size: 0.8rem;
                        margin-top: 5px;
                    }
                }
            }
        }

        .lyrics::-webkit-scrollbar {
            display: none;
        }

        .lyrics{
            color: white;
            width: 90%;
            height: 50%;
            margin: 0 auto;
            overflow-y: scroll;
            padding: 0 20px;
            padding-bottom: 200px;
        }
    }
`;

export const Album = styled.div`
    margin-left: 250px;
    height: 100%;

    @media (max-width: 768px)
    {
        margin-left: 0px;
    }

    .body-content::-webkit-scrollbar {
        display: block;
        width: 15px;
    }
    .body-content::-webkit-scrollbar-track {
        background: transparent;
    }
        
    .body-content::-webkit-scrollbar-thumb {
        background-color: gray;
        border-right: none;
        border-left: none;
    }

    .body-content::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 168px; 
    }

    .body-content::-webkit-scrollbar-track-piece:start {
        background: transparent;
    }

    .body-content{
        height: 100%;
        padding-top: 95px; 
        max-width: 100%;
        justify-content: center;
        overflow-y: scroll;

        @media (max-width: 768px)
        {
            display: none;
        }

        .header{
            z-index: 30;
            position: fixed;
            display: flex;
            top: 0;
            align-items: center;
            height: 60px;
            width: 100%;
            transition: ease-in all 0.1s;
            .back-button-container{
                @media (max-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                left: 265px;
                z-index: 30;
                .back-button{
                    height: 30px;
                }
                :hover{
                    cursor: pointer;
                }
            }
            .play-button-container{
                display: none;
                position: fixed;
                left: 325px;
                transition: ease-in all 0.5s;
                top: 7px;
                .play-button{
                    height: 40px;
                }
            }
            .album-title{
                display: none;
                font-size: 1.3rem;
                color: white;
                position: fixed;
                left: 375px;
                transition: ease-in all 0.5s;
            }
            .upgrade-button-container{
                @media (max-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 220px;
                .upgrade-button{
                    letter-spacing: 1px;
                    width: 125px;
                    height: 35px;
                    border-radius: 20px;
                    border: 1px solid white;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;
                }
            }

            .profile-button-container{
                @media (max-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 30px;
                margin-left: 20px;
                .profile-button{
                    letter-spacing: 1px;
                    width: 175px;
                    height: 30px;
                    border-radius: 15px;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .pic-container{
                        margin-top: 3px;
                        margin-left: -3px;
                        .pic{
                            height: 25px;
                            border-radius: 50%;
                        }
                    }

                    .name{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }

            .profile-pic-container{
                @media (min-width: 1000px)
                {
                    display: none;
                }
                position: fixed;
                right: 20px;
                margin-left: 20px;
                .profile-pic{
                    letter-spacing: 1px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: none;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .pic-container{
                        margin-top: 3px;
                        margin-left: -3px;
                        .pic{
                            height: 35px;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }

        .top{
            width: 100%;
            display: flex;
            padding-left: 30px;

            .img-container{
                box-shadow: 0px 0px 30px 0px #181818;
                height: 230px;
                width: 230px;
                position: relative;
                .img{
                    height: 230px;
                    width: 230px;
                    object-fit: cover;
                }
                .img-svg-container{
                    display: none;
                    position: absolute;
                    width: 100%;
                    top: 1;
                    left: 0;
                    z-index: 10;
                    .img-svg{
                        height: 230px;
                    }
                }
                .album-name{
                    display: none;
                    color: black;
                    font-size: 1.5rem;
                    position: absolute;
                    bottom: 15px;
                    left: 30px;
                    z-index: 20;
                }
            }

            .top-texts{
                display: flex;
                flex-direction: column;
                color: white;
                text-align: left;
                margin-top: 50px;
                margin-left: 25px;

                .playlist{
                    font-size: 0.8rem;
                    margin-bottom: 10px;
                }

                .album-name{
                    text-align: left;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    max-width: 700px;
                    font-size: 5.5rem;
                    @media (max-width: 965px)
                    {
                        font-size: 3.5rem;
                    }
                }

                .album-artists{
                    font-size: 0.9rem;
                    margin-bottom: 10px;
                    color: #BFB9B9;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }

                .duration{
                    font-size: 0.9rem;
                    color: #BFB9B9;

                    .spotify{
                        color: white;
                    }
                }
            }
        }

        .album-body{
            background: rgba(0, 0, 0, 0.4);
            width: 100%;
            margin-top: 30px;
            .icons{
                display: flex;
                padding-top: 20px;
                align-items: center;
                padding-left: 30px;
                .play-container{
                    margin-right: 30px;
                    height: 60px;
                    width: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .play{
                        height: 50px;
                        :hover{
                            cursor: pointer;
                            height: 60px;
                        }
                    }
                }

                .heart-container{
                    margin-right: 30px;
                    .heart{
                        height: 20px;
                    }
                    :hover{
                        cursor: pointer;
                    }
                }
            }

            .songs-top{
                color: #A2A1A1;
                font-size: 0.85rem;
                width: 95%;
                display: grid;
                grid-template-columns: 57% 35% 10%;
                @media (max-width: 1000px)
                {
                    grid-template-columns: 87% 12%;
                }
                margin-top: 20px;
                align-items: center;
                margin-left: 15px;
                text-align: left;
                padding-left: 30px;

                .head:nth-child(1){
                    width: 100%;
                }

                .head:nth-child(2)
                {
                    width: 100%;
                    @media (max-width: 1000px)
                        {
                            display: none;
                        }
                }

                .clock-container{
                    width: 100%;
                    .clock{
                        height: 15px;
                    }
                }
            }

            hr{
                border-bottom: 1px solid #383838;
                border-right: 0;
                border-left: 0;
                margin-right: 5%;
                margin-left: 30px;
            }

            .songs{
                margin-top: 20px;
                padding-left: 30px;
                padding-bottom: 200px;
                .song{
                    display: grid;
                    grid-template-columns: 58% 36% 7%;
                    @media (max-width: 1000px)
                    {
                        grid-template-columns: 90% 10%;
                    }
                    font-size: 0.9rem;
                    color: #A2A1A1;
                    width: 95%;
                    text-align: left;
                    align-items: center;
                    padding: 10px 5px 10px 10px;
                    margin-left: 4px;
                    border: none;
                    border-radius: 5px;
                    position: relative;

                    .title{
                        display: flex;
                        align-items: center;
                        width: 100%;
                        padding: 10px 0;
                        .img-container{
                            width: 40px;
                            height: 40px;
                            .img{
                                height: 40px;
                                width: 40px;
                            }
                            position: absolute;
                            left: 40px;
                        }

                        .song-info{
                            display: flex;
                            flex-direction: column;
                            text-align: left;
                            width: 40%;
                            position: absolute;
                            left: 95px;

                            .song-name{
                                color: white;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                            .song-artist{
                                font-size: 0.8rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }

                    .album-name{
                        width: 90%;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        @media (max-width: 1000px)
                        {
                            display: none;
                        }
                    }

                    .duration{
                        width: 100%;
                    }

                    :hover{
                        cursor: pointer;
                        background-color: rgba(55, 55, 55, 0.5);
                    }
                }
            }
        }
    }

    .body-content-mobile::-webkit-scrollbar {
        display: none;
    }

    .body-content-mobile{
        height: 100%;
        margin-left: 15px;
        margin-right: 15px;
        padding-top: 95px; 
        justify-content: center;
        overflow-x: hidden;

        @media (min-width: 769px)
        {
            display: none;
        }

        .profile-pic-container{
            z-index: 10;
            position: absolute;
            top: 20px;
            right: 20px;

            .pic-container{
                .pic{
                    height: 30px;
                }
            }
        }

        .top{
            width: 100%;
            display: flex;
            flex-direction: column;

            .img-container{
                box-shadow: 0px 0px 30px 0px #181818;
                height: 230px;
                width: 230px;
                position: relative;
                margin: 0 auto;
                .img{
                    height: 230px;
                    width: 230px;
                    object-fit: cover;
                }
                .img-svg-container{
                    display: none;
                    position: absolute;
                    width: 100%;
                    top: 1;
                    left: 0;
                    z-index: 10;
                    .img-svg{
                        height: 230px;
                        width: 230px;
                    }
                }
                .album-name{
                    display: none;
                    color: black;
                    font-size: 1.5rem;
                    position: absolute;
                    bottom: 15px;
                    left: 30px;
                    z-index: 20;
                }
            }
            .top-texts{
                display: flex;
                flex-direction: column;
                color: white;
                text-align: left;
                margin-top: 50px;
                text-align: center;

                .playlist{
                    font-size: 0.8rem;
                    margin-bottom: 10px;
                }

                .album-name{
                    font-size: 3.5rem;
                    @media (max-width: 265px)
                    {
                        font-size: 1.5rem;
                    }
                }

                .album-artists{
                    font-size: 0.9rem;
                    margin-bottom: 10px;
                    color: #BFB9B9;
                }

                .duration{
                    font-size: 0.7rem;
                    color: #BFB9B9;

                    .spotify{
                        color: white;
                    }
                }
            }
        }
        
        .album-body{
            width: 100%;
            margin-top: 10px;
            .icons{
                display: flex;
                padding-top: 20px;
                align-items: center;
                .play-container{
                    margin-right: 30px;
                    height: 60px;
                    width: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    .play{
                        height: 50px;
                        :hover{
                            cursor: pointer;
                            height: 60px;
                        }
                    }
                }
            }

            .songs{
                margin-top: 20px;
                padding-bottom: 200px;
                .song{
                    display: grid;
                    grid-template-columns: 58% 36% 7%;
                    @media (max-width: 1000px)
                    {
                        grid-template-columns: 87% 13%;
                    }
                    font-size: 0.9rem;
                    color: #A2A1A1;
                    width: 95%;
                    text-align: left;
                    align-items: center;
                    padding: 10px 5px 10px 10px;
                    border: none;
                    border-radius: 5px;
                    position: relative;

                    .title{
                        display: flex;
                        align-items: center;
                        padding: 10px 0;
                        .img-container{
                            width: 40px;
                            height: 40px;
                            .img{
                                height: 40px;
                                width: 40px;
                            }
                            position: absolute;
                            left: 40px;
                        }

                        .song-info{
                            display: flex;
                            flex-direction: column;
                            text-align: left;
                            position: absolute;
                            left: 95px;
                            width: 100%;

                            .song-name{
                                color: white;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                max-width: 40%;
                            }
                            .song-artist{
                                font-size: 0.8rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                max-width: 40%;
                            }
                        }
                    }

                    .album-name{
                        width: 90%;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        @media (max-width: 1000px)
                        {
                            display: none;
                        }
                    }

                    .duration{
                        width: 100%;
                    }

                    :hover{
                        cursor: pointer;
                        background-color: rgba(55, 55, 55, 0.5);
                    }
                }
            }
        }
    }
`;