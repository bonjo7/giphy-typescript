import { useState } from "react";
import axios from "axios";
import { useSharedStore } from "../Store/SahredStore";

const UseRoutes = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const baseURL = `https://api.giphy.com/v1/gifs/`;
  const { gifs, addGif } = useSharedStore ();

  const getGifsData = async () => {
    try {
      await axios
        .get(`${baseURL}trending?api_key=${API_KEY}&limit=27&rating=g`)
        .then((res: object) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const searchGifs = async (searchItem: string) => {
    try {
      await axios
        .get(
          `${baseURL}search?api_key=${API_KEY}&q=${searchItem}&rating=g&lang=en`
        )
        .then((res) => {
            console.log(res)
            addGif(res.data.data);

            console.log("gifs", gifs)
        });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getGifsData,
    searchGifs
  };
};

export default UseRoutes;
