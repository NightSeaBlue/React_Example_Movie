import React from "react";
import ProtoTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, summary, poster }) {
    return (
        <div className="movie">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <div className="movie__summary">{summary}</div>
            <img src={poster} />
        </div>
    );
}

// 자료형을 지정하는 것이 좋음
Movie.ProtoTypes = {
    year: ProtoTypes.number.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    poster: ProtoTypes.string.isRequired,
};

export default Movie;
