import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gifitem } from "./Gifitem";


export const GifGrid = ({category}) => {

    // Custom Hook
    const {images, isLoading} = useFetchGifs(category);
   
    
    return (
        <>
            <h3>{ category }</h3>  
            {
                isLoading && (<h2>Cargando..</h2>)
            }
            
            <div className="card-grid">
                {/* images.map */}
                {
                    images.map( (image) => (
                        <Gifitem key={image.id}
                            {...image}
                        />
                        
                    ))
                }
            </div>                    
        </>
    )
}

GifGrid.protype = {
    catgegory: PropTypes.string.isRequired
}
