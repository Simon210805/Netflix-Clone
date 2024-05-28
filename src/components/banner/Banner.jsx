import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [videoNotFound, setVideoNotFound] = useState(false); // State to track if video is not found

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const opts = {
    height: "485",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
            setVideoNotFound(false); // Reset videoNotFound state if video is found
          } else {
            setVideoNotFound(true); // Set videoNotFound state to true if video is not found
          }
        })
        .catch((error) => {
          console.log(error);
          setVideoNotFound(true); // Set videoNotFound state to true if there's an error
        });
    }
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "63vh",
        color: "white",
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="button button1" onClick={() => handleClick(movie)}>
            Play
          </button>
          <button className="button button2">My List</button>
        </div>
        <h1 className="description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="fade_bottom video-not-found-message"></div>
      {videoNotFound && (
        <div className="video-not-found-message">
          <h1>Video not found</h1>
        </div>
      )}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Banner;
