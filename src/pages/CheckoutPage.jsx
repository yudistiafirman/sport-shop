import React, { Component } from "react";
import { Icon, Step, Segment, Button, Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const BankOptions = [
  {
    key: "Bank Bca",
    text: "Bank Bca",
    value: "Bank Bca",
  },
  {
    key: "Bank Muamalat",
    text: "Bank Muamalat",
    value: "Bank Muamalat",
  },
  {
    key: "Bank Bri Syariah",
    text: "Bank Bri Syariah",
    value: "Bank Bri Syariah",
  },
  {
    key: "Bank Bitcoin",
    text: "Bank Bitcoin",
    value: "Bank Bitcoin",
  },
];

export class CheckoutPage extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row ">
          <div className="col-12 ">
            <Step.Group unstackable>
              <Step active>
                <Icon name="plane" />
                <Step.Content>
                  <Step.Title className="product-list-title-font">
                    Shipping
                  </Step.Title>
                </Step.Content>
              </Step>
              <Step>
                <Icon className="text-primary" name="payment" />
                <Step.Content>
                  <Step.Title className="product-list-title-font">
                    Billing
                  </Step.Title>
                </Step.Content>
              </Step>

              <Step>
                <Icon className="text-warning" name="truck" />
                <Step.Content>
                  <Step.Title className="product-list-title-font">
                    Delivering
                  </Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6  ">
                <Segment
                  raised
                  style={{ height: "250px" }}
                  className="d-flex flex-column justify-content-between"
                >
                  <span className="product-list-title-font font-weight-bold">
                    <Icon name="plane" size="big" /> Shipping Address
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
                      hover
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
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <Segment
                  raised
                  style={{ height: "250px" }}
                  className="d-flex flex-column justify-content-between"
                >
                  <span className="product-list-title-font font-weight-bold">
                    <Icon name="payment" size="big" /> Payment Method
                    <div className="pt-4">
                      <Dropdown
                        text=" Bank Transfer"
                        options={BankOptions}
                        className="product-details-font-small mt-1"
                      ></Dropdown>
                    </div>
                  </span>
                  <div className="d-flex">
                    <Button
                      animated="vertical"
                      basic
                      color="black"
                      className="font-weight-bold w-50"
                    >
                      <Button.Content basic hidden>
                        Rp.2.500.000
                      </Button.Content>
                      <Button.Content basic visible>
                        Pay Now
                      </Button.Content>
                    </Button>
                    <Button
                      animated="vertical"
                      basic
                      color="black"
                      className="font-weight-bold w-50"
                    >
                      <Button.Content basic hidden>
                        0.5 BTC
                      </Button.Content>
                      <Button.Content basic visible>
                        Pay with bitCoin
                      </Button.Content>
                    </Button>
                  </div>
                </Segment>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
