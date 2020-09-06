import React, { Component } from "react";
import "../supports/css/componen.css";
import AddtoCartModal from "../componen/addtoCartModal";
import Axios from "axios";
import apiUrl from "../supports/constant/apiUrl";
import LoadingPage from "../componen/LoadingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ApiUrl from "../supports/constant/apiUrl";
import { ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import PhoneNumberValidator from "../supports/function/phoneValid";
import EmailValidator from "../supports/function/emailValid";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "mdbreact/dist/css/mdb.css";
class ProductDetails extends Component {
  state = {
    data: null,
    image: "",

    modal: false,
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
    }
  };

  addTocCart = (product_id) => {
    var id = localStorage.getItem("id");
    console.log(product_id);
    console.log(id);
    Axios.get(ApiUrl + "carts?id_user=" + id + "&id_product=" + product_id)
      .then((res) => {
        if (res.data.length === 0) {
          Axios.post(apiUrl + "carts", {
            id_user: id,
            id_product: product_id,
            qty: 1,
          }).catch((err) => console.log(err));
          window.location = "/carts/";
        } else {
          this.setState({ modal: !this.state.modal });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  modalOnSubmitBtn = (product_id) => {
    var data = this.refs.emaildata.value;
    var passData = this.refs.passwordData.value;

    if (Number(data[0] >= 0)) {
      if (PhoneNumberValidator(data) === true) {
        this.sendData(
          { phone: data, email: "" },
          { password: passData },
          product_id,
        );
      } else {
        alert(PhoneNumberValidator(data));
      }
    } else {
      if (EmailValidator(data) === true) {
        this.sendData(
          { email: data, phone: "" },
          { password: passData },
          product_id,
        );
      } else {
        alert(EmailValidator(data));
      }
    }
  };

  sendData = (data_email, data_password, id) => {
    var datatype = data_email.phone ? "phone" : "email";
    var dataValue = data_email.phone ? data_email.phone : data_email.email;
    var dataPassType = "password";
    var dataPassValue = data_password.password;

    Axios.get(
      ApiUrl +
        "users?" +
        datatype +
        "=" +
        dataValue +
        "&" +
        dataPassType +
        "=" +
        dataPassValue,
    ).then((res) => {
      console.log(res.data);
      if (res.data.length === 0) {
        alert("anda belum register silahkan register");
      } else {
        window.location = "/carts/" + id;
        localStorage.setItem("id", res.data[0].id);
      }
    });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    if (this.state.data === null) {
      return <LoadingPage />;
    }
    return (
      <div>
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              <h5>Sport shop</h5>
            </MDBModalHeader>
            <MDBModalBody>
              You've been added this selected product to cart
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() =>
                  this.toProductList((window.location = "/list-product"))
                }
              >
                Continue Shopping
              </MDBBtn>
              <MDBBtn
                onClick={() => this.toCartPage((window.location = "/carts"))}
                color="primary"
              >
                {" "}
                Check your Cart??
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
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
                      onClick={() => this.addTocCart(this.state.data.id)}
                      type="button"
                      value="Add To Cart"
                      className="btn rounded-0 w-100 sporteens-bg-main text-white"
                    />
                  ) : (
                    <AddtoCartModal
                      isi="addTocart"
                      className="btn rounded-0 w-100 sporteens-bg-main text-white"
                    >
                      <ModalBody>
                        <input
                          type="text"
                          placeholder="enter your phone / email"
                          className="form-control"
                          ref="emaildata"
                        />
                        <input
                          type="password"
                          placeholder="enter your password"
                          className="form-control mt-3"
                          ref="passwordData"
                        />
                        <input
                          type="button"
                          className="btn btn-info mt-4"
                          onClick={() =>
                            this.modalOnSubmitBtn(this.state.data.id)
                          }
                          value="submit"
                        />
                      </ModalBody>
                      <ModalFooter>
                        <p className="text-center sporteens-font-14">
                          Don't have account yet?
                          <Link to="/register" className="sporteens-link">
                            <span className="sporteens-clickable-el sporteens-main-dark font-weight-bold">
                              Register here
                            </span>
                          </Link>
                        </p>
                      </ModalFooter>
                    </AddtoCartModal>
                  )}
                </div>
                <div className="d-flex flex-column col-6 col-md-3 ">
                  {this.state.isLogin ? (
                    <FontAwesomeIcon icon={faHeart} className="text-danger" />
                  ) : (
                    <AddtoCartModal
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
