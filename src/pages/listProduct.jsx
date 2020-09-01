import React, { Component } from "react";
import "../supports/css/componen.css";
import "../supports/css/Utils.css";
import Axios from "axios";
import ApiUrl from "../supports/constant/apiUrl";
import { Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class ListProduct extends Component {
  state = {
    content: null,
    idr: "IDR.",
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
                  <div className="card-body">
                    <div className=" font-weight-bold product-list-title-font text-left">
                      {v.name}
                    </div>
                    <div className=" product-list-price-font">
                      {`${this.state.idr} ${v.price}`}
                    </div>
                    <div className="d-flex flex-column pt-3">
                      <button className="btn btn-outline-dark product-list-title-font font-weight-normal">
                        See Details
                      </button>
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
