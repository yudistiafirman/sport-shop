import React, { Component } from "react";
import "../supports/css/componen.css";
import LoginModal from "../componen/loginModal";
import Axios from "axios";
import apiUrl from "../supports/constant/apiUrl";
import LoadingPage from "../componen/LoadingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class ProductDetails extends Component {
  state = {
    data: null,
    image: "",
    isLogin: false,
  };

  componentDidMount() {
    this.getDataProductsById();
    this.getUserId();
  }

  getDataProductsById = () => {
    // console.log(this.props.location.pathname.split('/')[2])
    var id = this.props.match.params.bebas;
    Axios.get(apiUrl + "products/" + id)
      .then((res) => {
        console.log(res.data.image1);
        this.setState({ data: res.data });
        this.setState({ image: res.data.image1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getUserId = () => {
    var id = localStorage.getItem("id");
    if (id) {
      this.setState({ isLogin: true });
    } else {
      alert("anda harus login dulu bosku");
    }
  };

  render() {
    if (this.state.data === null) {
      return <LoadingPage />;
    }
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5">
              <img src={this.state.image} width="400px" height="420px" alt="" />

              <div className="container">
                <div className="row justify-content-center mt-4">
                  <div className="col-4 ">
                    <img
                      className="sporteens-clickable-el"
                      src={this.state.data.image1}
                      width="100px"
                      height="120px"
                      alt=""
                      onClick={() =>
                        this.setState({ image: this.state.data.image1 })
                      }
                    />
                  </div>
                  <div className="col-4 ">
                    <img
                      className="sporteens-clickable-el"
                      src={this.state.data.image2}
                      width="100px"
                      height="120px"
                      alt=""
                      onClick={() =>
                        this.setState({ image: this.state.data.image2 })
                      }
                    />
                  </div>
                  <div className="col-4 ">
                    <img
                      className="sporteens-clickable-el"
                      src={this.state.data.image3}
                      width="100px"
                      height="120px"
                      alt=""
                      onClick={() =>
                        this.setState({ image: this.state.data.image3 })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 d-flex flex-column   justify-content-between">
              <div className="product-details-font-title ">
                {this.state.data.name}
              </div>
              <p className="product-details-font-small ">Terjual 5 Produk</p>
              {this.state.data.discount ? (
                <div>
                  <p className="product-details-font-title">
                    <del>{`Rp.${this.state.data.price.toLocaleString(
                      "id-ID",
                    )}`}</del>
                    <span className="font-weight-bolder">
                      {` -${this.state.data.discount}%`} Off
                    </span>
                    <p className="product-details-font-title font-weight-bold text-warning">
                      {`Rp.${(
                        this.state.data.price -
                        (this.state.data.price * this.state.data.discount) / 100
                      ).toLocaleString("id-ID")}`}
                    </p>
                  </p>
                </div>
              ) : (
                <p className="product-details-font-title">
                  Rp.{this.state.data.price.toLocaleString("id-ID")}
                </p>
              )}

              <p className="border border-bottom"></p>
              <div className="product-details-font-small font-weight-bold">
                Stock
              </div>
              <div className="product-details-font-small">
                {this.state.data.stock} Pcs
              </div>
              <div className="product-details-font-small font-weight-bold">
                Berat
              </div>
              <p className="product-details-font-small">350gr</p>
              <p className="border border-bottom"></p>
              <div className="product-details-font-small font-weight-bold">
                Description
              </div>
              <p className="product-details-font-small ">
                {this.state.data.description}
              </p>
              <div className="row">
                <div className="d-flex flex-column col-6 col-md-9">
                  {this.state.isLogin ? (
                    <input
                      type="button"
                      value="Add To Cart"
                      className="btn rounded-0 w-100 sporteens-bg-main text-white"
                    />
                  ) : (
                    <LoginModal
                      isi="Add to cart"
                      className="btn rounded-0 w-100 sporteens-bg-main text-white"
                    />
                  )}
                </div>
                <div className="d-flex flex-column col-6 col-md-3 ">
                  {this.state.isLogin ? (
                    <FontAwesomeIcon icon={faHeart} className="text-danger" />
                  ) : (
                    <LoginModal
                      isi={
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-danger"
                        />
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
