import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span key={movie.id} className="saved-movie">
          {movie.title}
        </span>
      ))}
      <Link to="/" className="home-button">
        Home
      </Link>
      {/* <div className="home-button">Home</div> */}
    </div>
  );
}
