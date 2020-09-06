import {
  faMinus,
  faPlus,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { Component } from "react";
import { UncontrolledTooltip } from "reactstrap";
import { Badge } from "reactstrap";
import ApiUrl from "../supports/constant/apiUrl";
import EmptyCart from "../componen/emptyCart";
import { Segment } from "semantic-ui-react";
import { MDBNotification, MDBContainer } from "mdbreact";

class Cart extends Component {
  state = {
    dataCart: null,
    dataProduct: null,
    openToggle: false,
  };

  componentDidMount() {
    this.getUserId();
  }

  getUserId = () => {
    var idUser = localStorage.getItem("id");

    if (idUser) {
      Axios.get(ApiUrl + "carts?id_user=" + idUser)
        .then((res) => {
          var url = "products?";
          res.data.forEach((val) => {
            url += "id=" + val.id_product + "&";
          });
          console.log(url);
          res.data.sort((a, b) => {
            return a.id_product - b.id_product;
          });
          console.log(res.data);
          this.setState({ dataCart: res.data });

          Axios.get(ApiUrl + url)
            .then((res) => {
              console.log(res.data);
              this.setState({ dataProduct: res.data });
            })
            .catch((err) => {
              alert("error");
              console.log(err);
            });
        })
        .catch((err) => {
          alert("error");
          console.log(err);
        });
    }
  };

  increaseQty = (id, qty, cart_id) => {
    const { dataCart } = this.state;
    dataCart.forEach((val) => {
      if (val.id_product === id) {
        val.qty++;
      }
    });
    var qtyToSend = qty + 1;
    Axios.patch(ApiUrl + "carts/" + cart_id, { qty: qtyToSend })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ dataCart: dataCart });
  };

  decreaseQty = (id, qty, cart_id) => {
    const { dataCart } = this.state;
    dataCart.forEach((val) => {
      if (val.id_product === id) {
        val.qty === 1 ? (val.qty = 1) : val.qty--;
      }
    });
    var qtyToSend = qty === 0 ? (qty = 0) : qty - 1;

    Axios.patch(ApiUrl + "carts/" + cart_id, { qty: qtyToSend })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ dataCart: dataCart });
  };

  removeCart = (id) => {
    Axios.delete(ApiUrl + "carts/" + id)
      .then((res) => {
        console.log(res.data);
        this.getUserId();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toCheckout = () => {
    const { dataCart, dataProduct, openToggle } = this.state;

    let bool = [];
    dataCart.forEach((val, idx) => {
      dataCart[idx].qty > dataProduct[idx].stock
        ? bool.push(false)
        : bool.push(true);
    });
    if (bool.includes(false)) {
      this.setState({ openToggle: !openToggle });
    } else {
      //get the total
      let totalPrchs = dataCart
        .map((val, idx) =>
          dataProduct[idx].discount
            ? (dataProduct[idx].price -
                (dataProduct[idx].price * dataProduct[idx].discount) / 100) *
              dataCart[idx].qty
            : dataProduct[idx].price * dataCart[idx].qty,
        )
        .reduce((a, b) => a + b, 0);
      //get id
      let id = localStorage.getItem("id");
      //post purchase total to the database

      Axios.patch(ApiUrl + "users/" + id, { total: totalPrchs })
        .then((res) => {
          console.log(res.data);
          window.location = "/checkout";
          this.getUserId();
        })
        .catch((err) => console.log(err));

      //window location to checkoutpage
    }
  };

  renderDatatoCart = () => {
    const { dataCart, dataProduct } = this.state;
    return dataCart.map((value, index) => {
      return (
        <div className="col-12 mb-5 border-bottom">
          <div className="row justify-content-between  h-100">
            {/* CARt image section */}
            <div className="col-4   ">
              <img
                src={dataProduct[index].image1}
                alt=""
                style={{
                  width: "170px",
                  height: "170px",
                }}
              />
            </div>
            {/* End of image Section */}

            {/* Product qty section */}
            <div className="col-8   pb-4 pt-2 ">
              <div className=" cart-title-font font-weight-bold">
                {dataProduct[index].name.slice(0, 20) + "...."}

                {dataProduct[index].discount ? (
                  <div>
                    <div className="product-list-title-font">
                      <del>{`Rp.${dataProduct[index].price.toLocaleString(
                        "id-ID",
                      )}`}</del>
                      <span className="font-weight-bolder">
                        {` -${dataProduct[index].discount}%`}
                      </span>
                      <span className="product-list-title-font font-weight-bold text-warning">
                        {`Rp.${(
                          dataProduct[index].price -
                          (dataProduct[index].price *
                            dataProduct[index].discount) /
                            100
                        ).toLocaleString("id-ID")}`}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="cart-price-font font-weight-bold text-warning">
                    Rp.{dataProduct[index].price.toLocaleString("id-ID")}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column h-75  justify-content-end ">
                <div className=" d-flex justify-content-between">
                  <span>
                    <button
                      onClick={() =>
                        this.increaseQty(
                          dataProduct[index].id,
                          dataCart[index].qty,
                          dataCart[index].id,
                        )
                      }
                      className="btn btn-secondary rounded-circle"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>

                    <span className=" mx-2 product-list-title-font font-weight-bold text-success ">
                      {dataCart[index].qty}
                    </span>

                    <button
                      onClick={() =>
                        this.decreaseQty(
                          dataProduct[index].id,
                          dataCart[index].qty,
                          dataCart[index].id,
                        )
                      }
                      className="btn btn-info rounded-circle"
                    >
                      <FontAwesomeIcon icon={faMinus} size="1x" />
                    </button>
                  </span>
                  <div>
                    <button
                      onClick={() => this.removeCart(dataCart[index].id)}
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
      );
    });
  };

  summaryPage = () => {
    const { dataCart, dataProduct } = this.state;
    return (
      <div>
        <h2 className="product-details-font-title  pt-2">
          Cart Summary{" "}
          <Badge color="warning" className="text-white">
            {dataCart
              .map((val, idx) => dataCart[idx].qty)
              .reduce((a, b) => a + b, 0)}
          </Badge>
          <p className="product-list-title-font ">
            Total:
            <Badge
              color="warning"
              className="text-white product-list-title-font"
              ref="total"
              value="total"
            >
              Rp.
              {dataCart
                .map((val, idx) =>
                  dataProduct[idx].discount
                    ? (dataProduct[idx].price -
                        (dataProduct[idx].price * dataProduct[idx].discount) /
                          100) *
                      dataCart[idx].qty
                    : dataProduct[idx].price * dataCart[idx].qty,
                )
                .reduce((a, b) => a + b, 0)
                .toLocaleString("id-ID")}
            </Badge>
          </p>
        </h2>
      </div>
    );
  };

  render() {
    const { dataCart, dataProduct, openToggle } = this.state;
    return dataCart === null || dataProduct === null ? (
      <EmptyCart />
    ) : (
      <div className="container py-5">
        <h1 className="cart-heading-title text-center">
          My <FontAwesomeIcon icon={faShoppingCart} /> List
        </h1>
        <div className="row justify-content-between py-5   ">
          <div className="col-md-6">
            <div className="row  ">{this.renderDatatoCart()}</div>
          </div>

          <div className="col-md-5 d-flex flex-column justify-content-between pb-2">
            {openToggle ? (
              <MDBContainer
                style={{
                  width: "auto",
                  position: "fixed",
                  top: "150px",
                  right: "180px",
                  zIndex: 9999,
                }}
              >
                <MDBNotification
                  show
                  fade
                  iconClassName="text-primary"
                  title="SportShop"
                  message="We do apologize your purchasing qty exceessing our stocks ."
                  text="just now"
                />
              </MDBContainer>
            ) : null}

            <Segment
              className="justify-content-between d-flex flex-column"
              style={{ height: "225px" }}
            >
              {this.summaryPage()}
              <div>
                <button
                  onClick={this.toCheckout}
                  className="btn btn-outline-secondary w-50  "
                >
                  Checkout
                </button>
              </div>
            </Segment>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
