import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category, onRemoveCategory }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        { isLoading && <h2>Loading...</h2> }
        {
          images.map( ( image ) => (
              <GifItem
                key={ image.id }
                { ...image }
              />
            )
          )
        }
      </div>
    </>
  )
}
