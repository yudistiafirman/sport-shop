import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../supports/css/Utils.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import ApiUrl from "../supports/constant/apiUrl";
import LoginModal from "../componen/loginModal";

class Navbar extends Component {
  state = {
    openToggle: false,
    isLogin: false,
    data: null,
    label: 0,
  };

  componentDidMount() {
    this.getIdUser();
  }

  onLogout = () => {
    if (window.confirm("are you sure want to logout??")) {
      localStorage.removeItem("id");
      window.location = "/";
    }
  };

  getIdUser = () => {
    var id = localStorage.getItem("id");

    if (id) {
      this.setState({ isLogin: true });
      Axios.get(ApiUrl + "users/" + id)
        .then((res) => {
          if (res.data.email) {
            this.setState({ data: res.data.email });
          } else {
            this.setState({ data: res.data.phone });
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    } else {
      this.setState({ isLogin: false });
    }
    // get value di localstorage
    // kalau value ada
    // set is login = true
  };

  render() {
    return (
      <div className="sporteens-bg-main-dark py-4 ">
        <div className="container">
          <div className="row justify-content-between px-4">
            {/* Header Logo */}
            <div className="sporteens-light sporteens-logo-header sporteens-clickable-el d-none d-md-block  ">
              <Link to="/" className="sporteens-link ">
                Logo
              </Link>
            </div>

            {/* Header Items */}
            <div className="sporteens-light sporteens-items-header d-none d-md-block">
              <span className="mr-md-3 sporteens-clickable-el">
                <Link to="/" className="sporteens-link">
                  Home
                </Link>
              </span>
              <span className="mr-md-3 sporteens-clickable-el">
                <Link to="/list-product" className="sporteens-link">
                  Products
                </Link>
              </span>
              <span className="mr-md-3 sporteens-clickable-el">
                <Link to="/brands" className="sporteens-link">
                  Brands
                </Link>
              </span>

              {this.state.isLogin ? (
                <span>
                  <span className="mr-md-3 sporteens-clickable-el">
                    <Link to="/carts" className="sporteens-link">
                      <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </Link>
                  </span>
                  <span className="d-inline-block mr-md-3 sporteens-clickable-el">
                    <img
                      width="30px"
                      className="mr-2"
                      src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"
                      alt="avatar-circle"
                    />
                    <Link
                      to="/"
                      onClick={this.onLogout}
                      className="sporteens-link h-100 d-inline-block"
                    >
                      {this.state.data
                        ? this.state.data.slice(0, 4) + "..."
                        : null}
                    </Link>
                  </span>
                </span>
              ) : (
                <span>
                  <span className="mr-md-3 sporteens-clickable-el">
                    <LoginModal isi="Login" />
                  </span>
                  <span className="mr-md-3 sporteens-clickable-el">
                    <Link to="/register" className="sporteens-link">
                      Register
                    </Link>
                  </span>
                </span>
              )}
            </div>

            {/* Header Icons Mobile */}
            <div className="sporteens-light sporteens-items-mobile d-md-none  ">
              {this.state.openToggle || this.state.login ? (
                <div>
                  <div
                    className=" sporteens-clickable-el   d-flex justify-content-between"
                    style={{ width: "440px" }}
                  >
                    <div>
                      <img
                        width="30px"
                        className={
                          this.state.isLogin === false
                            ? "d-none"
                            : "d-inline-block mr-2"
                        }
                        src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"
                        alt="avatar-circle"
                      />
                      <Link
                        onClick={this.onLogout}
                        className="sporteens-link h-100 d-inline-block"
                      >
                        {this.state.data ? this.state.data : null}
                      </Link>
                    </div>
                    <div
                      style={
                        this.state.isLogin === false
                          ? { width: "4px" }
                          : { width: "none" }
                      }
                    >
                      <div
                        onClick={() => this.setState({ openToggle: false })}
                        className="sporteens-clickable-el  "
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => this.setState({ openToggle: true })}
                  className="sporteens-clickable-el  text-right"
                  style={{ width: "445px" }}
                >
                  <FontAwesomeIcon icon={faBars} />
                </div>
              )}
            </div>
          </div>

          {/* Header Items Mobile */}
          {this.state.openToggle ? (
            <div className="sporteens-light sporteens-header-items-mobile px-2 d-md-none">
              {this.state.isLogin === false ? (
                <div>
                  <div className="mt-3 border-bottom sporteens-clickable-el">
                    <Link className="sporteens-link" to="/register">
                      Register
                    </Link>
                  </div>
                  <div className="mt-3 border-bottom sporteen-clickable-el">
                    <LoginModal
                      className="sporteens-clickable-el"
                      isi="Login"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mt-3 border-bottom sporteens-clickable-el">
                    <Link to="/carts" className="sporteens-link">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                  </div>
                </div>
              )}
              <div className="mt-3 border-bottom sporteens-clickable-el">
                <Link className="sporteens-link" to="/">
                  Home
                </Link>
              </div>
              <div className="mt-3 border-bottom sporteens-clickable-el">
                <Link className="sporteens-link" to="/list-product">
                  Products
                </Link>
              </div>
              <div className="mt-3 border-bottom sporteens-clickable-el">
                <Link className="sporteens-link" to="/brands">
                  Brands
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Navbar;
