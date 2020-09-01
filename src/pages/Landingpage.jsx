import React, { Component } from "react";
import Jumbotron from "../componen/jumbotron";
import "../supports/css/LandingPage.css";
import Sale from "../componen/Sale.jsx";
import BestSeller from "../componen/BestSeller";
import Brand from "../componen/brand";
import Subrcribe from "../componen/subrcribe";

export class Landingpage extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        {/* sale section */}
        <Sale />

        {/* Bestseller Section */}
        <BestSeller />

        {/* Brands Section */}
        <Brand />

        {/* Banner Section Email Subscription */}
        <Subrcribe />
      </div>
    );
  }
}

export default Landingpage;
