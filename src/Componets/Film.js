import React, { Component } from "react";
import { Link } from "react-router-dom";
import Img from "../plus.png";
import ImgDel from "../close-button.png";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = { added: false };
  }
  componentDidMount() {
    const { film } = this.props;
    this.setState({
      added: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList")).find(
            (e) => e.id === film.id
          )
        : false,
    });
  }

  render() {
    const { film, addToWatchList, deleteFromWatchList } = this.props;
    const { i, id, l, q, rank, s, y } = film;
    const { added } = this.state;
    return (
      <div className="film row">
        <img src={i.imageUrl} alt={l} />
        <span>{l}</span>
        <span>{q}</span>
        <span>{rank}</span>
        <span>{s}</span>
        <span>{y}</span>
        <div className="fixed row">
          <Link to={`/filmInfo/${id}`}>More</Link>
          {added ? (
            <button
              onClick={() => {
                deleteFromWatchList(film);
                this.setState({ added: false });
              }}
            >
              <img src={ImgDel} alt="" className="icon" />
            </button>
          ) : (
            <button
              onClick={() => {
                addToWatchList(film);
                this.setState({ added: true });
              }}
            >
              <img src={Img} alt="" className="icon" />
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Film;
