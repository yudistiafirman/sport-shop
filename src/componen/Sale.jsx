import React, { Component } from "react";
import Axios from "axios";
import ApiUrl from "../supports/constant/apiUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

class Sale extends Component {
  state = {
    discount: null,
    idr: "IDR",
  };

  componentDidMount() {
    this.getDiscount();
  }

  getDiscount = () => {
    Axios.get(ApiUrl + "products")
      .then((res) => {
        console.log(res);
        this.setState({ discount: res.data });
      })
      .catch((err) => console.log(err));
  };
  mapOnData = () => {
    return this.state.discount.map((v) =>
      v.hasOwnProperty("discount") ? (
        <div className="col-4 col-sm-4 col-md-2 ">
          <Link to={"/product-details/" + v.id}>
            <img src={v.image1} alt="" className="card-img-top h-75" />
            <div className="flash-sale-font font-weight-bold text-capitalize">
              {v.name.slice(0, 16)}
            </div>
          </Link>

          <div className="flash-sale-price text-danger">
            <del>{`${this.state.idr}. ${v.price}`}</del>
            <span className="font-weight-bolder">{` -${v.discount}%`}</span>
            <div className="flash-sale-font font-weight-bold text-warning">
              {`${this.state.idr} ${v.price - (v.price * v.discount) / 100}`}
            </div>
          </div>
        </div>
      ) : null,
    );
  };

  render() {
    return (
      <div className="container py-5">
        <div className="d-flex ">
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faBolt}
              size="5x"
              className="text-warning"
            />{" "}
          </div>
          <div className="align-self-center display-4 font-weight-bolder text-warning">
            Flash Deal !!
          </div>
        </div>
        <div
          className="d-flex justify-content-around"
          style={{ overflow: "auto", whiteSpace: "nowrap" }}
        >
          {this.state.discount === null ? (
            <div>
              <Loader
                className="text-center p-0 m-0"
                type="ThreeDots"
                color="#364f6b"
                height={40}
                width={40}
              />
              <p className="text-center sporteens-main-dark">loading</p>
            </div>
          ) : (
            this.mapOnData()
          )}
        </div>
      </div>
    );
  }
}

export default Sale;
