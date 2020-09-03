import React, { Component } from "react";
import "../supports/css/componen.css";
import "../supports/css/Utils.css";
import Axios from "axios";
import ApiUrl from "../supports/constant/apiUrl";
import { Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class ListProduct extends Component {
  state = {
    content: null,
    idr: "Rp.",
  };
  componentDidMount() {
    this.getDataProducts();
  }

  getDataProducts = () => {
    Axios.get(ApiUrl + "products")
      .then((res) => {
        console.log(res);
        this.setState({ content: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container mb-5 ">
        <div className="text-black-50   d-flex">
          <div className="display-4 ">Products </div>
          <div className=" ">
            <FontAwesomeIcon
              icon={faChevronRight}
              size="4x"
              className=" h-100 mr-2 mt-1 "
            />{" "}
          </div>
        </div>
        {this.state.content === null ? (
          <div>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="dark" />
            <Spinner type="grow" color="danger" />
          </div>
        ) : (
          <div className="row  justify-content-around   ">
            {this.state.content.map((v) => {
              return (
                <div className="col-md-6   col-lg-3      ">
                  <img
                    src={v.image1}
                    className="card-img-top h-50  pt-5 "
                    alt=""
                  />
                  <div className="card-body ">
                    <div className=" font-weight-bold product-list-title-font text-left">
                      {v.name.slice(0, 20)}
                    </div>
                    {v.discount ? (
                      <div>
                        <p className="product-list-title-font">
                          <del>{`Rp.${v.price.toLocaleString("id-ID")}`}</del>
                          <span className="font-weight-bolder">
                            {` -${v.discount}%`} Off
                          </span>
                          <p className="product-list-title-font font-weight-bold text-warning">
                            {`Rp.${(
                              v.price -
                              (v.price * v.discount) / 100
                            ).toLocaleString("id-ID")}`}
                          </p>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="conditional-height"></div>
                        <p className="product-list-title-font font-weight-bold">
                          Rp.{v.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                    )}
                    <div className="d-flex flex-column pt-3">
                      <Link
                        className="sporteens-link d-inline-block w-100"
                        to={"/product-details/" + v.id}
                      >
                        <button className="btn btn-outline-dark product-list-title-font font-weight-normal w-100 h-100">
                          See Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ListProduct;
