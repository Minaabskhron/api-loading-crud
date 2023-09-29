import React from "react";

export default function ({movie}) {
  return (
    <>
      <div className="col-md-3" >
        <figure>
          <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} className="w-100" />
          <figcaption className="text-center">{movie.title}</figcaption>
        </figure>
      </div>
    </>
  );
}
