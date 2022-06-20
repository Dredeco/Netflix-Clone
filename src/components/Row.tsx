import React, { useEffect } from "react";
import {getMovies} from "../api.js"

const imageHost = "https://image.tmdb.org/t/p/original/"

export function Row({ title , path }) {
    const [ movies, setMovies ] = React.useState([]);

    const fetchMovies = async (_path) => {
        try {
            const data=await getMovies(_path);
            setMovies(data?.results);
        } catch(error) {
            console.log("fetch Movies error: ",error);
        }
    };

    useEffect(() => {
        fetchMovies(path);
    }, [path]);

  return (
    <div className="relative py-5 -top-28"> 
        <h2 className="text-2xl font-semibold mb-2 ml-[4%]">{title}</h2>
        <div className="flex w-auto h-52 ml-[4%]">
            {movies?.map((movie) => {
                return (
                    <img 
                        className="px-2 hover:scale-125 hover:px-4"
                        key={movie.id} 
                        src={`${imageHost}${movie.poster_path}`}
                        alt={movie.name}
                    />
                )
            })}
        </div>
    </div>);
}