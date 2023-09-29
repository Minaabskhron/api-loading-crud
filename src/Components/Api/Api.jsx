import axios from "axios";
import { useEffect, useState } from "react"
import Movie from "../Movie/Movie";
import Loading from "../Loading/Loading";

export default function Api(props) {
    
    const [trendingMovies,setTrendingMovies] = useState([]);
    const [loadingDone,setLoading] = useState(false);
    
    async function getTrendingMovies()
    {
        setLoading(false);
        let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=e36c3e61b34e1069d3d7c555b48d9041");
        setTrendingMovies(data.results)
        // console.log(data.results);
        setLoading(true);
    }

    useEffect(()=>{getTrendingMovies()},[])

    return <>
            <div className="container pt-5">
                <div className="row">
                    {loadingDone? trendingMovies.map((movie,index)=>
                    <Movie key={index} movie={movie} />

                    ): <Loading/> } 
                </div>
            </div>
        </>
    
}
