import React, { Component } from "react";

class FilmInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = window.location.pathname.split("/")[2];
    console.log(id, "??");
    fetch(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dde05af90bmsh85cca10b493bae1p1300aejsn7261fc663b7e",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ film: data });
        console.log(data);
      });
  }

  render() {
    const { film } = this.state;
    return (
      <div className="more_list">
        <div className="more">
          {film ? (
            <>
              <img src={film.image.url} alt={film.title} />
              <span>{film.title}</span>
              <span>{film.titleType}</span>
              <span>
                {film.seriesStartYear}-{film.seriesEndYear}
              </span>
            </>
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
    );
  }
}

export default FilmInfo;
