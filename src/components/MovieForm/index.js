import React, { useState, useEffect } from "react";
import "./styles.scss";

const MovieForm = ({ initialMovie, onSubmit }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(initialMovie || {});
  }, [initialMovie]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="movie-form">
      <div className="row">
        <fieldset>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            data-testid="title-input"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="releaseDate">Release year</label>
          <input
            name="releaseDate"
            value={formData.releaseYear || ""}
            onChange={handleChange}
            data-testid="release-date-input"
          />
        </fieldset>
      </div>
      <div className="row">
        <fieldset>
          <label htmlFor="movieUrl">Movie url</label>
          <input
            name="movieUrl"
            value={formData.imageUrl || ""}
            onChange={handleChange}
            data-testid="movie-url-input"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="rating">Rating</label>
          <input
            name="rating"
            value={formData.score || ""}
            onChange={handleChange}
            data-testid="rating-input"
          />
        </fieldset>
      </div>
      <div className="row">
        <fieldset>
          <label htmlFor="genre">Genre</label>
          <input
            name="genre"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="runtime">Runtime</label>
          <input
            name="runtime"
            value={formData.duration || ""}
            onChange={handleChange}
            data-testid="runtime-input"
          />
        </fieldset>
      </div>
      <div className="row">
        <fieldset>
          <label htmlFor="overview">Overview</label>
          <textarea
            name="overview"
            rows="7"
            value={formData.description || ""}
            onChange={handleChange}
            data-testid="overview-input"
          />
        </fieldset>
      </div>
      <div className="action-row">
        <button className="reset" type="reset" data-testid="reset-button">
          Reset
        </button>
        <button className="primary" type="submit" data-testid="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
