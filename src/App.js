import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Films from "./Componets/Films";
import WatchList from "./Componets/WatchList";
import FilmInfo from "./Componets/FilmInfo";
import icon from "./cinema-screen.png";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">
            <span>Home page</span>
          </Link>
          <Link to="/films">
            <span>Films</span>
          </Link>
          <Link to="/watchList">
            <span>Watch List</span>
          </Link>
        </header>

        <Switch>
          <Route exact path="/">
            <div className="main">
              <img src={icon} alt="" />
              <p>
                <strong>
                  <u>Cinematography</u>
                </strong>{" "}
                - (from ancient Greek κίνημα, kìnema "movement" and γράφειν,
                gràphein "to write") is the art of motion picture photography.
                <br />
                &nbsp;Cinematographers use a lens to focus reflected light from
                objects into a real image that is transferred to some image
                sensor or light-sensitive material inside a movie camera.
                <br />
                &nbsp;These exposures are created sequentially and preserved for
                later processing and viewing as a motion picture. Capturing
                images with an electronic image sensor produces an electrical
                charge for each pixel in the image, which is electronically
                processed and stored in a video file for subsequent processing
                or display.
                <br />
                &nbsp;Images captured with photographic emulsion result in a
                series of invisible latent images on the film stock, which are
                chemically "developed" into a visible image. The images on the
                film stock are projected for viewing the motion picture.
                <br />
              </p>
            </div>
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/watchList">
            <WatchList />
          </Route>
          <Route path="/filmInfo/:id">
            <FilmInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
