import React, { Component } from "react";
import "../supports/css/componen.css";
import "../supports/css/Utils.css";
import Axios from "axios";
import ApiUrl from "../supports/constant/apiUrl";
import { Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ListProduct extends Component {
  state = {
    content: null,
    idr: "Rp.",
    filteredData: null,
    modalFilterOpen: false,
    allBrands: null,
    allcategories: null,
  };
  componentDidMount() {
    this.getDataProducts();
  }

  getDataProducts = () => {
    Axios.get(ApiUrl + "products")
      .then((res) => {
        console.log(res.data);
        var allBrand = [];
        var allCategories = [];
        res.data.forEach((val) => {
          if (!allBrand.includes(val.brand)) {
            allBrand.push(val.brand);
          }
          if (!allCategories.includes(val.category)) {
            allCategories.push(val.category);
          }
        });

        this.setState({
          content: res.data,
          filteredData: res.data,
          allBrands: allBrand,
          allcategories: allCategories,
        });
      })
      .catch((err) => console.log(err));
  };

  onChangeSort = () => {
    var sortBy = this.refs.sort.value;
    var data = this.state.content;
    if (sortBy === "higherPrice") {
      data.sort((a, b) => {
        return b.price - a.price;
      });
      // sort dari harga tertinggi
    } else if (sortBy === "lowerPrice") {
      data.sort((a, b) => {
        return a.price - b.price;
      });
      // sort dari harga terendah
    } else if (sortBy === "discount") {
      data.sort((a, b) => {
        return b.discount - a.discount;
      });
      // sort dari discount tertinggi
    } else if (sortBy === "sort") {
      data.sort((a, b) => {
        return a.id - b.id;
      });
      // ubah ke default
    }
    this.setState({ filteredData: data });
  };

  modalFilterSwitch = () => {
    this.setState({ modalFilterOpen: !this.state.modalFilterOpen });
  };

  onApplyFilterClick = () => {
    var category = this.refs.category.value; // all
    var brand = this.refs.brand.value;
    var filteredData = this.state.content;
    if (!(category === "all") || !(brand === "all")) {
      filteredData = this.state.content.filter((val) => {
        if (category === "all") {
          return val.brand === brand;
        }
        if (brand === "all") {
          return val.category === category;
        }
        return val.category === category && val.brand === brand;
      });
      console.log(filteredData);
    }

    this.setState({ filteredData: filteredData, modalFilterOpen: false });
  };
  renderData = () => {
    return this.state.filteredData.map((v) => {
      return (
        <div className="col-md-6   col-lg-3      ">
          <img src={v.image1} className="card-img-top h-50  pt-5 " alt="" />
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
    });
  };

  render() {
    return (
      <div className="container mb-5 ">
        {/* Modal Filter */}
        <Modal
          centered={true}
          toggle={this.modalFilterSwitch}
          isOpen={this.state.modalFilterOpen}
        >
          <ModalHeader toggle={this.modalFilterSwitch}>Filter By</ModalHeader>
          <ModalBody>
            <p className="p-0 m-0 sporteens-font-14 font-weight-bold">Brand</p>
            <select ref="brand" className="form-control mt-2">
              <option value="all">all Brands</option>
              {this.state.allBrands
                ? this.state.allBrands.map((val) => {
                    return <option value={val}>{val}</option>;
                  })
                : null}
            </select>

            <p className="p-0 m-0 mt-4 sporteens-font-14 font-weight-bold">
              Categories
            </p>
            <select ref="category" className="form-control mt-2">
              <option value="all">All Category</option>
              {this.state.allcategories
                ? this.state.allcategories.map((val) => {
                    return <option value={val}>{val}</option>;
                  })
                : null}
            </select>
          </ModalBody>
          <ModalFooter>
            <input
              onClick={this.onApplyFilterClick}
              type="button"
              value="Apply"
              className="btn btn-info"
            />
          </ModalFooter>
        </Modal>

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
        <div className="container mt-4">
          <div className="text-right">
            <span
              onClick={this.modalFilterSwitch}
              className="sporteens-font-14 text-secondary sporteens-clickable-el mr-2"
            >
              Filter <FontAwesomeIcon icon={faChevronDown} />
            </span>
            <select
              ref="sort"
              onChange={this.onChangeSort}
              className="sporteens-font-14 text-secondary sporteens-clickable-el sporteens-dropdown ml-3"
            >
              <option value="sort">Sort By</option>
              <option value="higherPrice">Higher Price</option>
              <option value="lowerPrice">Lower Price</option>
              <option value="discount">Discount</option>
            </select>
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
            {this.renderData()}
          </div>
        )}
      </div>
    );
  }
}

export default ListProduct;
