import React, { Component } from "react";
import Film from "./Film";

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList"))
        : [],
    };

    this.addToWatchList = this.addToWatchList.bind(this);
    this.deleteFromWatchList = this.deleteFromWatchList.bind(this);
  }

  addToWatchList(film) {
    const { list } = this.state;
    this.setState({ list: [...list, film] });
  }

  deleteFromWatchList(film) {
    const { list } = this.state;
    this.setState({ list: list.filter((e) => e.id !== film.id) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { list } = this.state;

    if (prevState.list !== list) {
      localStorage.setItem("watchList", JSON.stringify(list));
      console.log(prevState);
    }
  }

  render() {
    console.log(localStorage.getItem("watchList"));
    const { list } = this.state;
    return (
      <div className="list">
        {list.length > 0 ? (
          list.map((film) => (
            <Film
              film={film}
              addToWatchList={this.addToWatchList}
              deleteFromWatchList={this.deleteFromWatchList}
            />
          ))
        ) : (
          <h1>List zero</h1>
        )}
      </div>
    );
  }
}

export default WatchList;
