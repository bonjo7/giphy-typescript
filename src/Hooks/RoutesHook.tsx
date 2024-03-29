import { useState } from "react";
import axios from "axios";
import { useSharedStore } from "../Store/SahredStore";

const UseRoutes = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const baseURL = `https://api.giphy.com/v1/gifs/`;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { addGif } = useSharedStore();

  const getGifsData = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(`${baseURL}trending?api_key=${API_KEY}&limit=27&rating=g`)
        .then((res) => {
          addGif(res.data.data);
          setIsLoading(false);
          setError(false);
        });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const searchGifs = async (searchItem: string) => {
    setIsLoading(true);
    setError(false);
    if (searchItem !== "") {
      try {
        await axios
          .get(
            `${baseURL}search?api_key=${API_KEY}&q=${searchItem}&rating=g&lang=en`
          )
          .then((res) => {
            setIsLoading(false);
            setError(false);
            addGif(res.data.data);
          });
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    } else {
      setError(true);
      setIsLoading(false);
    }
  };

  return {
    getGifsData,
    searchGifs,
    isLoading,
    error,
  };
};

export default UseRoutes;
