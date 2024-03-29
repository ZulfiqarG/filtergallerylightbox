import { useEffect } from "react";

function Filter({setActiveGenre, activeGenre, setFiltered, popular}){

    useEffect(()=> {
        if (activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie)=> 
        movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    }, [activeGenre, setFiltered, popular]);
    return(
        <div className="filter-container">  
            <button className={activeGenre === 0? "active" : ""}  //active class by the genre id
            onClick={()=> setActiveGenre(0)}>All</button>
            <button className={activeGenre === 35? "active" : ""} //active class by the genre id
            onClick={()=> setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 28? "active" : ""} //active class by the genre id
            onClick={()=> setActiveGenre(28)}>Action</button>
        </div>    
    )
}
export default Filter;