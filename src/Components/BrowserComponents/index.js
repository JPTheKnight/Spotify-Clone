import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { useDataLayerValue } from "../../DataLayer";

import {
  Wrapper,
  LeftSide,
  BottomSide,
  Body,
  Album,
  Search,
} from "./Browser.styles";
import { AlbumSong } from "./AlbumSong";
import { AlbumThumbnail } from "./AlbumThumbnail";

import spotify_logo from "../../Images/spotify-logo.png";
import home_logo from "../../Images/home-button.svg";
import search_logo from "../../Images/search.svg";
import library_logo from "../../Images/book.svg";
import add_logo from "../../Images/add.svg";
import heart_logo from "../../Images/heart-in-square.svg";

import soad from "../../Images/soad.jpg";
import heart from "../../Images/heart.svg";
import queue from "../../Images/queue.svg";
import pc from "../../Images/desktop.svg";
import shuffle from "../../Images/shuffle-crossing-arrows.svg";
import back from "../../Images/back.svg";
import play from "../../Images/play-button.svg";
import play_green from "../../Images/play-button-green.svg";
import next from "../../Images/next.svg";
import repeat from "../../Images/repeat-button.svg";
import three_dots from "../../Images/three-dots.svg";
import back_arrow from "../../Images/back-arrow.svg";

import soad_icon from "../../Images/soad-icon.jpg";

import settings from "../../Images/settings.svg";
import play_nobg from "../../Images/play.svg";
import icon_svg from "../../Images/album-icon-svg.svg";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { useEffect } from "react";
import { AlbumMiniThumbnail } from "./AlbumMiniThumbnail";
import { AlbumMobileThumbnail } from "./AlbumMobileThumbnail";
import { Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
SwiperCore.use([Pagination]);

const spotify = new SpotifyWebApi();

const Browser = () => {
  const [
    {
      user,
      token,
      playlists,
      recom_playlists,
      cur_playlist_selected,
      cur_song_selected_lyrics,
    },
  ] = useDataLayerValue();
  console.log(recom_playlists);
  spotify.setAccessToken(token);

  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [home, setHome] = useState(true);

  const theme = useTheme();
  var hr = new Date().getHours();

  const duration = 200; // seconds
  const [position, setPosition] = React.useState(0);
  const formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  };

  const TinyText = styled(Typography)({
    fontSize: "0.75rem",
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
  });

  const selectRow = (event) => {
    document.getElementsByClassName("row-clicked")[0].className = "row";
    event.currentTarget.className = "row-clicked";

    if (event.currentTarget.children[1].textContent === "Home") {
      setHome(true);
      setInterval(() => {
        timeTeller();
      }, 1000);
    } else if (event.currentTarget.children[1].textContent === "Search")
      setHome(false);
  };

  const selectRowMobile = (event) => {
    if (event.currentTarget.children[1].textContent === "Home") {
      setHome(true);
      if (user && document.getElementById("Album").style.display !== "none") {
        BackToMain();
      }
      setInterval(() => {
        timeTeller();
      }, 1000);
    } else if (event.currentTarget.children[1].textContent === "Search")
      setHome(false);
  };

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const modifyScroll = () => {
    if (user && document.getElementById("Album").style.display === "none") {
      document.documentElement.dataset.scroll = document
        .getElementById("Body")
        .getElementsByClassName("body-content")[0].scrollTop;
      document
        .getElementById("Body")
        .getElementsByClassName("header")[0].style.backgroundColor =
        "rgba(32, 17, 93, 0.3)".replace(
          /[^,]+(?=\))/,
          document.documentElement.dataset.scroll / 1135
        );
    } else if (
      user &&
      document.getElementById("Album").style.display !== "none"
    ) {
      document.documentElement.dataset.scroll =
        document.getElementsByClassName("body-content")[0].scrollTop;
      if (document.documentElement.dataset.scroll > 400) {
        document
          .getElementById("Album")
          .getElementsByClassName("header")[0].style.backgroundColor =
          String(
            document.getElementById("Album").getElementsByClassName("header")[0]
              .style.backgroundColor
          ).split("0)")[0] + "1)";
        document
          .getElementById("Album")
          .getElementsByClassName("body-content")[0]
          .getElementsByClassName("header")[0]
          .getElementsByClassName("play-button-container")[0].style.display =
          "block";
        document
          .getElementById("Album")
          .getElementsByClassName("body-content")[0]
          .getElementsByClassName("header")[0]
          .getElementsByClassName("album-title")[0].style.display = "block";
      } else {
        document
          .getElementById("Album")
          .getElementsByClassName("header")[0].style.backgroundColor =
          String(
            document.getElementById("Album").getElementsByClassName("header")[0]
              .style.backgroundColor
          )
            .split("(")
            .join("a(")
            .split(")")[0] + ", 0)";
        document
          .getElementById("Album")
          .getElementsByClassName("body-content")[0]
          .getElementsByClassName("header")[0]
          .getElementsByClassName("play-button-container")[0].style.display =
          "none";
        document
          .getElementById("Album")
          .getElementsByClassName("body-content")[0]
          .getElementsByClassName("header")[0]
          .getElementsByClassName("album-title")[0].style.display = "none";
      }
    }
  };

  const timeTeller = () => {
    try {
      if (hr >= 0 && hr < 6)
        document.getElementsByClassName("good")[0].textContent =
          "Go To Sleep Dude!";
      else if (hr >= 6 && hr < 12)
        document.getElementsByClassName("good")[0].textContent =
          "Good Morning!";
      else if (hr >= 12 && hr < 18)
        document.getElementsByClassName("good")[0].textContent =
          "Good Afternoon!";
      else if (hr >= 18 && hr < 24)
        document.getElementsByClassName("good")[0].textContent =
          "Good Evening!";
    } catch {
      return;
    }
  };

  const [albumDur, setAlbumDur] = useState("0hr 00min");
  const calculateAlbumDur = () => {
    try {
      var tot = 0;

      for (
        let i = 0;
        i < recom_playlists[cur_playlist_selected].body.tracks.total;
        i++
      ) {
        tot +=
          recom_playlists[cur_playlist_selected].body?.tracks?.items[i]?.track
            .duration_ms;
      }

      setAlbumDur(
        Math.floor(tot / 3600000) +
          "hr " +
          String(
            Math.floor((tot / 3600000 - Math.floor(tot / 3600000)) * 60)
          ).padStart(2, "0") +
          "min"
      );
    } catch {
      return;
    }
  };

  const BackToMain = () => {
    document.getElementById("Body").style.display = "block";
    document.getElementById("Album").style.display = "none";
    document
      .getElementById("Album")
      .getElementsByClassName("body-content")[0].scrollTop = 0;
  };

  const searchForTrack = () => {
    var text =
      window.screen.width >= 769
        ? document
            .getElementById("Search")
            .getElementsByClassName("body-content")[0]
            .getElementsByClassName("header")[0]
            .getElementsByClassName("search")[0].value
        : document
            .getElementById("Search")
            .getElementsByClassName("body-content-mobile")[0]
            .getElementsByClassName("header")[0]
            .getElementsByClassName("search")[0].value;
    if (String(text).startsWith(" ")) {
      alert("Please write something");
      setLoading(false);
    }
    if (text === "") setLoading(false);
    if (token && text !== "" && text !== " ") {
      spotify
        .searchTracks(text, { limit: 10 })
        .then((t) => {
          setTimeout(() => {
            setTracks(t?.body?.tracks?.items);
            console.log(tracks);
          }, 0);
        })
        .catch((err) => {
          alert("Please write something");
        });
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [tracks]);

  useEffect(() => {
    if (loading) {
      searchForTrack();
    }
  }, [loading]);

  useEffect(() => {
    timeTeller();
    if (home)
      document
        .getElementById("Body")
        .getElementsByClassName("body-content")[0]
        .addEventListener("scroll", modifyScroll);
    if (user) {
      document
        .getElementById("Album")
        .getElementsByClassName("body-content")[0]
        .addEventListener("scroll", modifyScroll);
      document.getElementById("Album").style.display = "none";
    }
  }, []);

  useEffect(() => {
    calculateAlbumDur();
  }, [cur_playlist_selected]);

  return (
    <Wrapper>
      <LeftSide>
        <div className="left-content">
          <div>
            <Link to="/">
              <img src={spotify_logo} alt="" className="logo" />
            </Link>
          </div>
          <div className="column-1">
            <span className="row-clicked" onClick={selectRow}>
              <span className="text-img-container">
                <img src={home_logo} alt="" className="text-img" />
              </span>
              <span className="text">Home</span>
            </span>
            <span className="row" onClick={selectRow}>
              <span className="text-img-container">
                <img src={search_logo} alt="" className="text-img" />
              </span>
              <span className="text">Search</span>
            </span>
            <span className="row" onClick={selectRow}>
              <span className="text-img-container">
                <img src={library_logo} alt="" className="text-img" />
              </span>
              <span className="text">Your Library</span>
            </span>
          </div>
          <div className="column-2">
            <span className="row" onClick={selectRow}>
              <span className="text-img-container">
                <img src={add_logo} alt="" className="text-img" />
              </span>
              <span className="text">Create Playlists</span>
            </span>
            <span className="row" onClick={selectRow}>
              <span className="text-img-container">
                <img src={heart_logo} alt="" className="text-img" />
              </span>
              <span className="text">Liked Songs</span>
            </span>
          </div>
          <hr />
          <div className="column-3">
            {playlists?.body?.items?.map((playlist) => {
              return <span className="row">{playlist.name}</span>;
            })}
          </div>
        </div>
      </LeftSide>

      {user && (
        <Album id="Album">
          <div className="body-content">
            <div className="header">
              <div className="back-button-container" onClick={BackToMain}>
                <img src={back_arrow} alt="" className="back-button" />
              </div>
              <div className="play-button-container">
                <img src={play_green} alt="" className="play-button" />
              </div>
              <div className="album-title">
                {recom_playlists[cur_playlist_selected].body.name}
              </div>
              <div className="upgrade-button-container">
                <button className="upgrade-button">
                  <b>UPGRADE</b>
                </button>
              </div>
              <div className="profile-button-container">
                {user ? (
                  <button className="profile-button">
                    <span className="pic-container">
                      <img
                        src={user ? user?.body?.images[0]?.url : ""}
                        alt=""
                        className="pic"
                      />
                    </span>
                    <span className="name">{user.body.display_name}</span>
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="profile-button">
                      <span className="pic-container">
                        <img
                          src={user ? user?.body?.images[0]?.url : ""}
                          alt=""
                          className="pic"
                        />
                      </span>
                      <span className="name">LOG IN</span>
                    </button>
                  </Link>
                )}
              </div>
              <div className="profile-pic-container">
                <button className="profile-pic">
                  <span className="pic-container">
                    <img
                      src={user.body ? user?.body?.images[0]?.url : ""}
                      alt=""
                      className="pic"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="top">
              <div className="img-container">
                <img
                  src={
                    recom_playlists[cur_playlist_selected].body.images[0].url
                  }
                  alt=""
                  className="img"
                />
                <span className="img-svg-container">
                  <img src={icon_svg} alt="" className="img-svg" />
                </span>
                <span className="album-name">
                  {recom_playlists[cur_playlist_selected].body.name}
                </span>
              </div>
              <div className="top-texts">
                <span className="playlist">PLAYLIST</span>
                <span className="album-name">
                  {recom_playlists[cur_playlist_selected].body.name}
                </span>
                <span className="album-artists">
                  {recom_playlists[cur_playlist_selected].body.description}
                </span>
                <span className="duration">
                  <span className="spotify">Spotify • </span>
                  <span className="nums">
                    {recom_playlists[cur_playlist_selected].body.tracks.total}{" "}
                    songs,{" "}
                  </span>
                  <span className="time">{albumDur}</span>
                </span>
              </div>
            </div>
            <div className="album-body">
              <div className="icons">
                <span className="play-container">
                  <img src={play_green} alt="" className="play" />
                </span>
                <span className="heart-container">
                  <img src={heart} alt="" className="heart" />
                </span>
                <span className="heart-container">
                  <img src={three_dots} alt="" className="heart" />
                </span>
              </div>
              <div className="songs-top">
                <span className="head">
                  #&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TITLE
                </span>
                <span className="head">ALBUM</span>
                <span className="clock-container">
                  <img src={heart} alt="" className="clock" />
                </span>
              </div>
              <hr />
              <div className="songs">
                {recom_playlists[
                  cur_playlist_selected
                ].body?.tracks?.items?.map((track, i) => {
                  return (
                    <AlbumSong
                      num={i + 1}
                      img={track.track.album.images[2].url}
                      name={track.track.name}
                      artist={track.track.artists[0].name}
                      album={track.track.album.name}
                      duration={track.track.duration_ms / 1000}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="body-content-mobile">
            <div className="header">
              <div className="profile-pic-container">
                <span className="pic-container">
                  <img src="" alt="" className="pic" />
                </span>
              </div>
            </div>
            <div className="top">
              <div className="img-container">
                <img
                  src={
                    recom_playlists[cur_playlist_selected].body.images[0].url
                  }
                  alt=""
                  className="img"
                />
                <span className="img-svg-container">
                  <img src={icon_svg} alt="" className="img-svg" />
                </span>
                <span className="album-name">
                  {recom_playlists[cur_playlist_selected].body.name}
                </span>
              </div>
              <div className="top-texts">
                <span className="playlist">PLAYLIST</span>
                <span className="album-name">
                  {recom_playlists[cur_playlist_selected].body.name}
                </span>
                <span className="album-artists">
                  {recom_playlists[cur_playlist_selected].body.description}
                </span>
                <span className="duration">
                  <span className="spotify">Spotify • </span>
                  <span className="nums">
                    {recom_playlists[cur_playlist_selected].body.tracks.total}{" "}
                    songs,{" "}
                  </span>
                  <span className="time">{albumDur}</span>
                </span>
              </div>
            </div>
            <div className="album-body">
              <div className="icons">
                <span className="play-container">
                  <img src={play_green} alt="" className="play" />
                </span>
              </div>
              <div className="songs">
                {recom_playlists[
                  cur_playlist_selected
                ]?.body?.tracks?.items?.map((track, i) => {
                  return (
                    <AlbumSong
                      num={i + 1}
                      img={track.track.album.images[2].url}
                      name={track.track.name}
                      artist={track.track.artists[0].name}
                      album={track.track.album.name}
                      duration={track.track.duration_ms / 1000}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Album>
      )}

      {home && (
        <Body id="Body">
          <div className="body-content">
            <div className="header">
              <div className="upgrade-button-container">
                <button className="upgrade-button">
                  <b>UPGRADE</b>
                </button>
              </div>
              <div className="profile-button-container">
                <button className="profile-button">
                  <span className="pic-container">
                    <img
                      src={user ? user?.body?.images[0]?.url : ""}
                      alt=""
                      className="pic"
                    />
                  </span>
                  {user ? (
                    <span className="name">{user.body.display_name}</span>
                  ) : (
                    <Link to="/login">
                      <span className="name">LOG IN</span>
                    </Link>
                  )}
                </button>
              </div>
              <div className="profile-pic-container">
                <button className="profile-pic">
                  <span className="pic-container">
                    <img
                      src={user ? user?.body?.images[0]?.url : ""}
                      alt=""
                      className="pic"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="good"></div>
            <div className="grid-1">
              <AlbumMiniThumbnail
                thumbimg={soad_icon}
                name="System of a down"
              />
              <AlbumMiniThumbnail
                thumbimg={soad_icon}
                name="System of a down"
              />
              <AlbumMiniThumbnail
                thumbimg={soad_icon}
                name="System of a down"
              />
              <AlbumMiniThumbnail
                thumbimg={soad_icon}
                name="System of a down"
              />
              <AlbumMiniThumbnail
                thumbimg={soad_icon}
                name="System of a down"
              />
              <AlbumMiniThumbnail
                thumbimg={soad_icon}
                name="System of a down"
              />
            </div>
            <div className="made-for">
              {user
                ? "Made for " + user.body.display_name
                : "Login to see your playlists"}
            </div>
            <div className="grid-2">
              {recom_playlists?.map((track, i) => {
                return (
                  <AlbumThumbnail
                    thumbimg={recom_playlists[i].body.images[0].url}
                    thumbcolornb={icon_svg}
                    name={recom_playlists[i].body.name}
                    artists={recom_playlists[i].body.description}
                    id={i}
                  />
                );
              })}
            </div>
          </div>
          <div className="body-content-mobile">
            <div className="header">
              <div className="profile-pic-container">
                {!user && (
                  <Link to="/login">
                    <span className="pic-container">
                      <img src={settings} alt="" className="pic" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
            <div className="shortcut">Shortcuts</div>
            <Swiper
              slidesPerView={window.screen.width / 190}
              spaceBetween={0}
              freeMode={true}
              pagination={{ clickable: false }}
              className="grid-1"
            >
              <SwiperSlide className="cell-bg">
                <AlbumMobileThumbnail
                  thumbimg={soad_icon}
                  name="System of a down"
                />
              </SwiperSlide>
              <SwiperSlide className="cell-bg">
                <AlbumMobileThumbnail
                  thumbimg={soad_icon}
                  name="System of a down"
                />
              </SwiperSlide>
              <SwiperSlide className="cell-bg">
                <AlbumMobileThumbnail
                  thumbimg={soad_icon}
                  name="System of a down"
                />
              </SwiperSlide>
              <SwiperSlide className="cell-bg">
                <AlbumMobileThumbnail
                  thumbimg={soad_icon}
                  name="System of a down"
                />
              </SwiperSlide>
              <SwiperSlide className="cell-bg">
                <AlbumMobileThumbnail
                  thumbimg={soad_icon}
                  name="System of a down"
                />
              </SwiperSlide>
              <SwiperSlide className="cell-bg">
                <AlbumMobileThumbnail
                  thumbimg={soad_icon}
                  name="System of a down"
                />
              </SwiperSlide>
            </Swiper>
            <div className="made-for">
              {user
                ? "Made for " + user.body.display_name
                : "Login to see your playlists"}
            </div>
            <Swiper
              slidesPerView={window.screen.width / 190}
              spaceBetween={0}
              freeMode={true}
              pagination={{ clickable: false }}
              className="grid-2"
            >
              {recom_playlists?.map((track, i) => {
                return (
                  <SwiperSlide className="cell-bg">
                    <AlbumMobileThumbnail
                      thumbimg={recom_playlists[i].body.images[0].url}
                      name={recom_playlists[i].body.name}
                      id={i}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Body>
      )}

      {!home && (
        <Search id="Search">
          <div className="body-content">
            <div className="header">
              <div className="search-bar">
                <input
                  type="text"
                  className="search"
                  placeholder="Search for track..."
                  onChange={() => {
                    setLoading(true);
                  }}
                />
              </div>
              <div className="upgrade-button-container">
                <button className="upgrade-button">
                  <b>UPGRADE</b>
                </button>
              </div>
              <div className="profile-button-container">
                <button className="profile-button">
                  <span className="pic-container">
                    <img
                      src={user ? user?.body?.images[0]?.url : ""}
                      alt=""
                      className="pic"
                    />
                  </span>
                  {user ? (
                    <span className="name">{user.body.display_name}</span>
                  ) : (
                    <Link to="/login">
                      <span className="name">LOG IN</span>
                    </Link>
                  )}
                </button>
              </div>
              <div className="profile-pic-container">
                <button className="profile-pic">
                  <span className="pic-container">
                    <img
                      src={user ? user?.body?.images[0]?.url : ""}
                      alt=""
                      className="pic"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="made-for">
              {user ? "Search result" : "Login to search for tracks"}
            </div>
            <div className="search-body">
              <div className="grid-2">
                {!loading &&
                  tracks.map((track, i) => {
                    return (
                      <AlbumThumbnail
                        thumbimg={track.album.images[1].url}
                        thumbcolornb={icon_svg}
                        name={track.name}
                        artists={track.artists[0].name}
                        id={i}
                        clickable={false}
                      />
                    );
                  })}
              </div>
              <div className="lyrics">
                {String(cur_song_selected_lyrics.lyrics)
                  .split("\n\n")
                  .map((str) => (
                    <p>{str}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="body-content-mobile">
            <div className="header">
              <div className="search-bar">
                <input
                  type="text"
                  className="search"
                  placeholder="Search for track..."
                  onChange={() => {
                    setLoading(true);
                  }}
                />
              </div>
              <div className="profile-pic-container">
                {!user && (
                  <Link to="/login">
                    <span className="pic-container">
                      <img src={settings} alt="" className="pic" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
            <div className="made-for">
              {user ? "Search results" : "Login to search for tracks"}
            </div>
            <Swiper
              slidesPerView={window.screen.width / 190}
              spaceBetween={0}
              freeMode={true}
              pagination={{ clickable: false }}
              className="grid-2"
            >
              {!loading &&
                tracks.map((track, i) => {
                  return (
                    <SwiperSlide className="cell-bg">
                      <AlbumMobileThumbnail
                        thumbimg={track.album.images[1].url}
                        name={track.name}
                        artist={track.artists[0].name}
                        id={i}
                        clickable={false}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div className="lyrics">
              {String(cur_song_selected_lyrics.lyrics)
                .split("\n\n")
                .map((str) => (
                  <p>{str}</p>
                ))}
            </div>
          </div>
        </Search>
      )}

      <BottomSide>
        <div className="bottom-content">
          <div className="left">
            <span className="album-img-container">
              <img src={soad} alt="" className="album-img" />
            </span>
            <span className="text">
              <span className="song-name">Suggestions</span>
              <span className="singer-name">System of a down</span>
            </span>
            <span className="heart-img-container">
              <img src={heart} alt="" className="heart-img" />
            </span>
          </div>
          <div className="middle">
            <span className="top">
              <span className="side-img-container">
                <img src={shuffle} alt="" className="side-img" />
              </span>
              <span className="arrow-img-container">
                <img src={back} alt="" className="arrow-img" />
              </span>
              <span className="play-img-container">
                <img src={play} alt="" className="play-img" />
              </span>
              <span className="arrow-img-container">
                <img src={next} alt="" className="arrow-img" />
              </span>
              <span className="side-img-container">
                <img src={repeat} alt="" className="side-img" />
              </span>
            </span>
            <span className="bottom">
              <Box sx={{ width: 500 }}>
                <Slider
                  aria-label="time-indicator"
                  size="small"
                  value={position}
                  min={0}
                  step={1}
                  max={duration}
                  onChange={(_, value) => setPosition(value)}
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? "#fff"
                        : "rgba(255,255,255,0.87)",
                    height: 4,
                    "& .MuiSlider-thumb": {
                      width: 8,
                      height: 8,
                      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                      "&:before": {
                        boxShadow: "0 2px 12px 0 rgba(255,255,255,0.4)",
                      },
                      "&:hover, &.Mui-focusVisible": {
                        boxShadow: `0px 0px 0px 8px ${
                          theme.palette.mode === "dark"
                            ? "rgb(255 255 255 / 16%)"
                            : "rgb(0 0 0 / 16%)"
                        }`,
                      },
                      "&.Mui-active": {
                        width: 20,
                        height: 20,
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.28,
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: -2,
                  }}
                >
                  <TinyText className="tiny-text">
                    {formatDuration(position)}
                  </TinyText>
                  <TinyText className="tiny-text">
                    -{formatDuration(duration - position)}
                  </TinyText>
                </Box>
              </Box>
            </span>
          </div>
          <div className="right">
            <span className="queue-img-container">
              <img src={queue} alt="" className="queue-img" />
            </span>
            <span className="pc-img-container">
              <img src={pc} alt="" className="pc-img" />
            </span>
            <span className="volume">
              <Box sx={{ width: 150 }}>
                <Stack
                  spacing={1}
                  direction="row"
                  sx={{ mb: 0.75 }}
                  alignItems="center"
                >
                  <VolumeDown htmlColor="white" />
                  <Slider
                    aria-label="Volume"
                    defaultValue={30}
                    sx={{
                      color:
                        theme.palette.mode === "dark"
                          ? "#fff"
                          : "rgba(255,255,255,0.87)",
                      "& .MuiSlider-track": {
                        border: "none",
                      },
                      "& .MuiSlider-thumb": {
                        width: 16,
                        height: 16,
                        backgroundColor: "#fff",
                        "&:before": {
                          boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                        },
                        "&:hover, &.Mui-focusVisible, &.Mui-active": {
                          boxShadow: "none",
                        },
                      },
                    }}
                    onChanged={handleChange}
                  />
                  <VolumeUp htmlColor="white" />
                </Stack>
              </Box>
            </span>
          </div>
        </div>
        <div className="bottom-content-mobile">
          <span className="top">
            <span className="icon-container">
              <img src={heart} alt="" className="icon" />
            </span>
            <span className="name-container">
              <span className="text-white">Suggestions • </span>
              <span className="text">System of a down</span>
            </span>
            <span className="icon-container">
              <img src={play_nobg} alt="" className="icon" />
            </span>
          </span>
          <span className="bottom">
            <span className="icon-container" onClick={selectRowMobile}>
              <img src={home_logo} alt="" className="icon" />
              <span className="text">Home</span>
            </span>
            <span className="icon-container" onClick={selectRowMobile}>
              <img src={search_logo} alt="" className="icon" />
              <span className="text">Search</span>
            </span>
            <span className="icon-container">
              <img src={library_logo} alt="" className="icon" />
              <span className="text">Library</span>
            </span>
          </span>
        </div>
      </BottomSide>
    </Wrapper>
  );
};

export default Browser;
