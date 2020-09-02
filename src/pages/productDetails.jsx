import React, { Component } from "react";
import "../supports/css/componen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import apiUrl from "../supports/constant/apiUrl";
import LoadingPage from "../componen/LoadingPage";

class ProductDetails extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.getDataProductsById();
  }

  getDataProductsById = () => {
    // console.log(this.props.location.pathname.split('/')[2])
    var id = this.props.match.params.bebas;
    Axios.get(apiUrl + "products/" + id)
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.data === null) {
      return <LoadingPage />;
    }
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="row justify-content-center px-3 py-3">
              <div className="col-12 text-center py-3">
                <img src={this.state.data.image1} alt="" width="75%" />
              </div>
              <div className="col-3 text-center w-100">
                <img src={this.state.data.image1} alt="" width="75%" />
              </div>
              <div className="col-3 text-center w-100">
                <img src={this.state.data.image2} alt="" width="75%" />
              </div>
              <div className="col-3 text-center w-100">
                <img src={this.state.data.image3} alt="" width="75%" />
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-4">
            <h3 className="sporteens-main-dark">{this.state.data.name}</h3>
            <span className="text-secondary">Terjual 5 Produk</span>
            <h3 className="pt-3 text-danger">Rp. 1000000</h3>
            <hr className="mt-3" />
            <h5 className="font-weight-bold">Stock</h5>
            <h5 className="font-weight-light text-secondary sporteens-font-12">
              {this.state.data.Stock} Pcs
            </h5>
            <h5 className="font-weight-bold">Berat</h5>
            <h5 className="font-weight-light text-secondary sporteens-font-12">
              200 Gram
            </h5>
            <hr className="mt-3" />
            <h5 className="font-weight-bold">Deskripsi : </h5>
            <h6 className="font-weight-light sporteens-font-14">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, vero ipsum fuga delectus quasi, voluptates eos aut
              fugiat impedit praesentium rerum exercitationem eaque quidem?
              Ipsam fuga similique magnam blanditiis est?
            </h6>
            <div className="row pt-3">
              <div className="col-5 col-md-6">
                <input
                  type="button"
                  value="Add To Cart"
                  className="btn rounded-0 w-100 sporteens-bg-main text-white"
                />
              </div>
              <div className="col-5 col-md-6">
                <div className="border p-1 rounded d-inline-block h-100">
                  <FontAwesomeIcon icon={faHeart} className="text-danger" />
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
