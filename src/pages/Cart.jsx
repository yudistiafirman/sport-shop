import {
  faMinus,
  faPlus,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { UncontrolledTooltip } from "reactstrap";
import { Badge } from "reactstrap";

class Cart extends Component {
  render() {
    return (
      <div className="container pt-5">
        <h1 className="cart-heading-title text-center">
          My <FontAwesomeIcon icon={faShoppingCart} /> List
        </h1>
        <div className="row justify-content-between py-5   ">
          {/* Cart item and Qty Section */}
          <div className="col-md-6">
            <div className="row  ">
              <div className="col-12 mb-5">
                <div className="row justify-content-between  h-100">
                  {/* CARt image section */}
                  <div className="col-4   ">
                    <img
                      src="https://i5.walmartimages.com/asr/18731805-8aed-4a9e-9e2f-e02cd2bb4b72.7f3cf0a8045fa2cffa5e57d39d34c32d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        border: "1px solid #776d8a",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  {/* End of image Section */}

                  {/* Product qty section */}
                  <div className="col-7  cart-bg-color pb-4 pt-2 ">
                    <div className=" cart-title-font font-weight-bold">
                      Adidas UltraBoost 5.0
                      <div className="cart-price-font">Rp.2.500.000</div>
                    </div>
                    <div className="d-flex flex-column h-75  justify-content-end ">
                      <div className=" d-flex justify-content-between">
                        <span>
                          <button className="btn btn-secondary rounded-circle">
                            <FontAwesomeIcon icon={faPlus} />
                          </button>

                          <span className=" mx-2 product-list-title-font font-weight-bold text-success ">
                            1
                          </span>

                          <button className="btn btn-info rounded-circle">
                            <FontAwesomeIcon icon={faMinus} size="1" />
                          </button>
                        </span>
                        <div>
                          <button
                            className="btn btn-danger rounded-pill"
                            id="RemoveCart"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                          <UncontrolledTooltip
                            placement="top"
                            target="RemoveCart"
                            color="red"
                          >
                            Remove from your cart?
                          </UncontrolledTooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of qty Section */}
                </div>
              </div>
              {/* end of image and qty section */}
              <div className="col-12 mb-5">
                <div className="row justify-content-between  h-100">
                  {/* CARt image section */}
                  <div className="col-4   ">
                    <img
                      src="https://cdn-images.farfetch-contents.com/13/15/75/38/13157538_14718351_600.jpg"
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        border: "1px solid #776d8a",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  {/* End of image Section */}

                  {/* Product qty section */}
                  <div className="col-7  cart-bg-color pb-4 pt-2 ">
                    <div className=" cart-title-font font-weight-bold">
                      Adidas UltraBoost 5.0
                      <div className="cart-price-font">Rp.2.500.000</div>
                    </div>
                    <div className="d-flex flex-column h-75  justify-content-end ">
                      <div className=" d-flex justify-content-between">
                        <span>
                          <button className="btn btn-secondary rounded-circle">
                            <FontAwesomeIcon icon={faPlus} />
                          </button>

                          <span className=" mx-2 product-list-title-font font-weight-bold text-success ">
                            1
                          </span>

                          <button className="btn btn-info rounded-circle">
                            <FontAwesomeIcon icon={faMinus} size="1" />
                          </button>
                        </span>
                        <div>
                          <button
                            className="btn btn-danger rounded-pill"
                            id="Removecart"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                          <UncontrolledTooltip
                            placement="top"
                            target="Removecart"
                            color="red"
                          >
                            Remove from your cart?
                          </UncontrolledTooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of qty Section */}
                </div>
              </div>
              {/* end of image and qty section */}
              <div className="col-12 mb-5">
                <div className="row justify-content-between  h-100">
                  {/* CARt image section */}
                  <div className="col-4   ">
                    <img
                      src="https://cdn.webshopapp.com/shops/282647/files/318189822/750x750x1/jordan-nike-air-jordan-retro-3-chicago-all-star-re.jpg"
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        border: "1px solid #776d8a",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  {/* End of image Section */}

                  {/* Product qty section */}
                  <div className="col-7  cart-bg-color pb-4 pt-2 ">
                    <div className=" cart-title-font font-weight-bold">
                      Adidas UltraBoost 5.0
                      <div className="cart-price-font">Rp.2.500.000</div>
                    </div>
                    <div className="d-flex flex-column h-75  justify-content-end ">
                      <div className=" d-flex justify-content-between">
                        <span>
                          <button className="btn btn-secondary rounded-circle">
                            <FontAwesomeIcon icon={faPlus} />
                          </button>

                          <span className=" mx-2 product-list-title-font font-weight-bold text-success ">
                            1
                          </span>

                          <button className="btn btn-info rounded-circle">
                            <FontAwesomeIcon icon={faMinus} size="1" />
                          </button>
                        </span>
                        <div>
                          <button
                            onClick={() => this.setState({ open: true })}
                            className="btn btn-danger rounded-pill"
                            id="UncontrolledTooltipExample"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                          <UncontrolledTooltip
                            placement="top"
                            target="UncontrolledTooltipExample"
                          >
                            Remove from your cart?
                          </UncontrolledTooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of qty Section */}
                </div>
              </div>
              {/* end of image and qty section */}
            </div>
          </div>
          <div
            className="col-md-5 d-flex flex-column justify-content-between pb-2   "
            style={{
              height: "290px",
              backgroundColor: "#797a7e",
              borderRadius: "10px",
            }}
          >
            <h2 className="product-details-font-title text-white pt-2">
              Cart Summary{" "}
              <Badge color="warning" className="text-white">
                4
              </Badge>
              <p className="product-list-title-font text-white">
                Total:
                <Badge
                  color="warning"
                  className="text-white product-list-title-font"
                >
                  10.000.000
                </Badge>
              </p>
            </h2>

            <div>
              <button className="btn btn-outline-light w-100 font-weight-bold rounded-pill">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
