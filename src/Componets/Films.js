import React, { Component } from "react";
import Film from "./Film";

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searchValue: "",
      watchList: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList"))
        : [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.addToWatchList = this.addToWatchList.bind(this);
    this.deleteFromWatchList = this.deleteFromWatchList.bind(this);
  }

  componentDidMount() {}

  addToWatchList(film) {
    const { watchList } = this.state;
    this.setState({ watchList: [...watchList, film] });
  }

  deleteFromWatchList(film) {
    const { watchList } = this.state;
    this.setState({ watchList: watchList.filter((e) => e.id !== film.id) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { watchList } = this.state;

    if (prevState.watchList !== watchList) {
      localStorage.setItem("watchList", JSON.stringify(watchList));
      console.log(prevState);
    }
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleClick() {
    this.setState({ searchValue: "" });
    const { searchValue } = this.state;
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchValue}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dde05af90bmsh85cca10b493bae1p1300aejsn7261fc663b7e",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ films: data.d });
        console.log(data);
      });
  }

  render() {
    const { films, searchValue } = this.state;
    return (
      <div>
        <div className="films">
          <input onChange={this.handleChange} value={searchValue} type="text" />
          <button onClick={this.handleClick}>Search</button>
        </div>
        <div className="wrap">
          {films.length > 0 &&
            films.map((film) => (
              <Film
                film={film}
                addToWatchList={this.addToWatchList}
                deleteFromWatchList={this.deleteFromWatchList}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Films;
