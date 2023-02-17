const apiUrl = 'https://api.giphy.com/v1/gifs/search',
      apiKey = 'ZtTtLL8AqsS4knXcnr4xJ9ooll2syEPJ',
      gifQuantity = 10;

export const getGifByCategory = async ( category ) => {
  const response = await fetch( `${ apiUrl }?api_key=${ apiKey }&q=${ category }&limit=${ gifQuantity }` );
  const { data } = await response.json();

  const gifList = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    };
  });

  return gifList;
}
