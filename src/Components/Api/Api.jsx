import axios from "axios";
import { useEffect, useState } from "react"
import "./Api.css"

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
                        <div className="col-md-3" key={index}>
                            <figure>
                                <img src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path} alt="" className="w-100" />
                                <figcaption className="text-center">{movie.title}</figcaption>
                            </figure>
                        </div>
                    ): <div className="background position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-spinner fa-spin fa-2xl"></i>
                    </div>  } 
                </div>
            </div>
        </>
    
}
