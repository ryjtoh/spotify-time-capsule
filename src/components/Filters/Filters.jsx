import React, { useEffect, useState } from "react";
import axios from "axios";
import {Dropdown} from "react-bootstrap";

const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists?limit=50";
const USER_ID_ENDPOINT = "https://api.spotify.com/v1/me";
const GET_PLAYLIST_ITEMS_ENDPOINT = "https://api.spotify.com/v1/playlists/4W1Wy1pUz8rYfWYGlkAjhA/tracks"

function Filters() {
  const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState({});
  const [userId, setUserId] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"))
    }
  }, []);

  useEffect(() => {
    console.log(playlists)
    console.log(token)
    console.log(userId)
  }, []);

  const handleGetPlaylists = () => {
    axios.get(PLAYLIST_ENDPOINT, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      var temp = response.data["items"]
      setPlaylists(temp)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleGetUserId = () => {
    axios.get(USER_ID_ENDPOINT, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((id) => {
      setUserId(id.data["display_name"])
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleFilterPlaylists = () => {
    axios.get(GET_PLAYLIST_ITEMS_ENDPOINT, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((songs) => {
      console.log(songs.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return(
    <>
      <button onClick={() => {
        handleGetPlaylists();
        handleGetUserId();
        handleFilterPlaylists();
      }}>results</button>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="season-dropdown">
          Season
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Winter</Dropdown.Item>
          <Dropdown.Item>Spring</Dropdown.Item>
          <Dropdown.Item>Summer</Dropdown.Item>
          <Dropdown.Item>Fall</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="season-dropdown">
          Year
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>2008</Dropdown.Item>
          <Dropdown.Item>2009</Dropdown.Item>
          <Dropdown.Item>2010</Dropdown.Item>
          <Dropdown.Item>2011</Dropdown.Item>
          <Dropdown.Item>2012</Dropdown.Item>
          <Dropdown.Item>2013</Dropdown.Item>
          <Dropdown.Item>2014</Dropdown.Item>
          <Dropdown.Item>2015</Dropdown.Item>
          <Dropdown.Item>2016</Dropdown.Item>
          <Dropdown.Item>2017</Dropdown.Item>
          <Dropdown.Item>2018</Dropdown.Item>
          <Dropdown.Item>2019</Dropdown.Item>
          <Dropdown.Item>2020</Dropdown.Item>
          <Dropdown.Item>2021</Dropdown.Item>
          <Dropdown.Item>2022</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Filters;