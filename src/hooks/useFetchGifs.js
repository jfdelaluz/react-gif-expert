import { useState, useEffect } from "react";
import { getGifByCategory } from "../helpers/getGifByCategory";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState( [] );
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async () => {
    const imagesList = await getGifByCategory(category);
    setImages( imagesList );
    setIsLoading( false );
  }

  useEffect( () => {
    getImages();
  }, [] );

  return {
    images,
    isLoading
  }
}
