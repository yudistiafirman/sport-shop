import React, { Component } from "react";
import { Icon, Segment, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import {
  MDBContainer,
  MDBInputGroup,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from "mdbreact";
import { Badge } from "reactstrap";

export class CheckoutPage extends Component {
  state = {
    address: false,
    modal: false,
    title: "",
  };

  paymentConfirm = () => {
    var option = this.refs.bank.value;
    this.setState({ modal: !this.state.modal, title: option });
  };

  render() {
    const { address } = this.state;
    return (
      <div>
        <h1 className="text-center pt-5 cart-heading-title">
          Sport-Shop Checkout
        </h1>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6  ">
              {address ? (
                <Segment
                  raised
                  style={{ height: "300px" }}
                  className="d-flex flex-column justify-content-between"
                >
                  <span>
                    <Icon name="plane" size="big" />{" "}
                    <span className="text-black"> Shipping Address</span>
                  </span>
                  <p className="product-details-font-small">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis voluptate perspiciatis sit? Maxime cum ea fuga,
                    quibusdam nobis accusantium quae Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Facere, dolor?
                  </p>
                  <div className="d-flex ">
                    <Button
                      className="w-50 font-weight-bold"
                      hover="true"
                      basic
                      color="black"
                    >
                      {" "}
                      Change Address
                    </Button>
                    <Button
                      className="w-50 font-weight-bold "
                      basic
                      color="black"
                    >
                      Confirm Address
                    </Button>
                  </div>
                </Segment>
              ) : (
                <MDBContainer>
                  <Segment
                    raised
                    style={{ height: "300px" }}
                    className="d-flex flex-column justify-content-between"
                  >
                    <span className="product-list-title-font font-weight-bold mb-1">
                      <Icon name="plane" size="big" /> Shipping Address
                    </span>
                    <MDBInputGroup hint="receiver " className="mb-1" />
                    <MDBInputGroup hint="phone" className="mb-1" />
                    <MDBInputGroup prepend="Address" type="textarea" />
                    <button className="btn btn-primary w-25">Submit</button>
                  </Segment>
                </MDBContainer>
              )}
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <MDBContainer>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader
                    toggle={this.paymentConfirm}
                    className="font-weight-bold text-center text-capitalize"
                  >
                    Bank {this.state.title}
                  </MDBModalHeader>
                  <MDBModalBody>
                    <label className="grey-text font-weight-light mb-1">
                      Name on Account
                    </label>
                    <input type="text" className="form-control mb-1" />
                    <label className="grey-text font-weight-light">
                      Account Number
                    </label>
                    <input type="text" className="form-control mb-1" />
                    <label className="grey-text font-weight-light">
                      Bank Route
                    </label>
                    <input type="text" className="form-control mb-1" />
                    <label className="grey-text font-weight-light">
                      States/Country
                    </label>
                    <input type="text" className="form-control mb-1" />
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.paymentConfirm}>
                      Close
                    </MDBBtn>
                    <MDBBtn color="primary">confirm</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>
              <Segment
                raised
                style={{ height: "300px" }}
                className="d-flex flex-column justify-content-between"
              >
                <div className="product-list-title-font font-weight-bold d-flex">
                  <Icon name="payment" size="big" />

                  <div>
                    <select
                      className="form-control w-100 product-list-title-font font-weight-bold "
                      ref="bank"
                      placeholder="Payment options"
                    >
                      <option>Bank Transfer</option>
                      <option value="mandiri">Bank Mandiri</option>
                      <option value="Bca"> Bank Bca</option>
                      <option value="Bri">Bank Bri</option>
                    </select>
                  </div>
                </div>
                <div className=" d-flex justify-content-between">
                  <button
                    onClick={this.paymentConfirm}
                    className="btn w-25 btn-primary"
                  >
                    Pay Now
                  </button>
                  <Badge
                    color="warning"
                    className=" align-self-center product-list-title-font text-danger font-weight-bold  border-bottom"
                  >
                    Total Amount: Rp. 27.500.000
                  </Badge>
                </div>
              </Segment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
