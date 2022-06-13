import "./Component.css";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import list from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function Component() {
  return (
    <div>
      <div className="first-div">
        {" "}
        <nav className="navbar">
          <img className="logo-image" src={ironhackLogo} alt="ironhack logo" />
          <img className="logo-image" src={list} alt="list" />
        </nav>
        <div className="body">
          {" "}
          <div className="react explanation">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              becoma a super Ninja developer.
            </p>
          </div>
          <div className="react btn">
            <button>Awesome!</button>
          </div>
        </div>
      </div>

      <div className="second-div">
        <div className="container-div">
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="container-div">
          <img src={icon2} alt="icon2" />
          <h3>Component</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="container-div">
          <img src={icon3} alt="icon3" />
          <h3>Single-way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="container-div">
          <img src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
