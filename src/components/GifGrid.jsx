import useFetchGifs from "../hooks/useFetchGifs";
import {GifItem} from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    (!isLoading && images.length >= 1)
                        ? images.map(img => (
                            <GifItem key={img.id}
                                {...img}
                            />
                        ))
                        : (<h2>No images for this category</h2>)
                }
            </div>
        </>
    )
};
