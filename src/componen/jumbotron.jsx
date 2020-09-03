import React from "react";
import "../supports/css/LandingPage.css";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div className="sporteens-bg-secondary sporteens-jumbotron p-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-6 text-center text-md-left">
            <h1 className="sporteens-light"> WIN YOUR DAY WITH US !!!!</h1>
            <Link to="/list-product">
              <button className="btn btn-success mt-4">SHOP NOW</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
