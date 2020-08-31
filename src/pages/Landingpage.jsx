import React, { Component } from "react";
import "../supports/css/LandingPage.css";

export class Landingpage extends Component {
  render() {
    return (
      <div>
        <div className="sporteens-bg-secondary sporteens-jumbotron p-5">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-md-6 text-center text-md-left">
                <h1 className="sporteens-light"> WIN YOUR DAY WITH US !!!!</h1>
                <button className="btn btn-success mt-4">Get It Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 px-3">
          <div className="container mt-4 border p-3">
            <h3>Flash Sale</h3>
            <div
              style={{ overflow: "auto", whiteSpace: "nowrap" }}
              className="mt-4 pb-3"
            >
              <div className="d-inline-block mr-2" style={{ width: "173px" }}>
                <img src={Image} width="100%" alt="product" />
                <p className="p-0 m-0 sporteens-main-dark font-weight-bold">
                  Product Name
                </p>
                <p className="p-0 m-0 text-danger">30% Off</p>
                <p className="p-0 m-0 text-secondary">
                  {" "}
                  <s>Rp. 100000</s>{" "}
                </p>
                <p className="p-0 m-0 sporteens-main-dark"> Rp. 70000 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bestseller Section */}

        <div className="py-5 px-3 sporteens-bg-light-dark">
          <div className="container mt-4">
            <h3 className="p-0 m-0">Bestseller</h3>
            <p>Get our Bestseller Products This Month</p>

            <div className="row mt-4">
              <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                <div className="border bg-white p-3">
                  <img src={Image} width="100%" alt="product" />
                  <p className="p-0 m-0 sporteens-main-dark font-weight-bold">
                    Product Name
                  </p>
                  <p className="p-0 m-0 text-danger">30% Off</p>
                  <p className="p-0 m-0 text-secondary">
                    {" "}
                    <s>Rp. 100000</s>{" "}
                  </p>
                  <p className="p-0 m-0 sporteens-main-dark"> Rp. 70000 </p>
                </div>
              </div>
              <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                <div className="border bg-white p-3">
                  <img src={Image} width="100%" alt="product" />
                  <p className="p-0 m-0 sporteens-main-dark font-weight-bold">
                    Product Name
                  </p>
                  <p className="p-0 m-0 text-danger">30% Off</p>
                  <p className="p-0 m-0 text-secondary">
                    {" "}
                    <s>Rp. 100000</s>{" "}
                  </p>
                  <p className="p-0 m-0 sporteens-main-dark"> Rp. 70000 </p>
                </div>
              </div>
              <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                <div className="border bg-white p-3">
                  <img src={Image} width="100%" alt="product" />
                  <p className="p-0 m-0 sporteens-main-dark font-weight-bold">
                    Product Name
                  </p>
                  <p className="p-0 m-0 text-danger">30% Off</p>
                  <p className="p-0 m-0 text-secondary">
                    {" "}
                    <s>Rp. 100000</s>{" "}
                  </p>
                  <p className="p-0 m-0 sporteens-main-dark"> Rp. 70000 </p>
                </div>
              </div>
              <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                <div className="border bg-white p-3">
                  <img src={Image} width="100%" alt="product" />
                  <p className="p-0 m-0 sporteens-main-dark font-weight-bold">
                    Product Name
                  </p>
                  <p className="p-0 m-0 text-danger">30% Off</p>
                  <p className="p-0 m-0 text-secondary">
                    {" "}
                    <s>Rp. 100000</s>{" "}
                  </p>
                  <p className="p-0 m-0 sporteens-main-dark"> Rp. 70000 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brands Section */}

        <div className="py-5 px-3">
          <div className="container mt-4">
            <h3 className="p-0 m-0">Brands</h3>
            <p>We sell Official Products from various Brands</p>
            <div className="row mt-4  align-items-center">
              <div className="col-4 col-md-2   h-100">
                <img className="mx-2" alt="brand-logo" src="" width="100%" />
              </div>
              <div className="col-4 col-md-2  h-100">
                <img className="mx-2 " alt="brand-logo" src="" width="100%" />
              </div>
              <div className="col-4 col-md-2   h-100">
                <img className="mx-2" alt="brand-logo" src="" width="100%" />
              </div>
              <div className="col-4 col-md-2  h-100">
                <img className="mx-2 " alt="brand-logo" src="" width="100%" />
              </div>
              <div className="col-4 col-md-2   h-100">
                <img className="mx-2" alt="brand-logo" src="" width="100%" />
              </div>
              <div className="col-4 col-md-2  h-100">
                <img className="mx-2 " alt="brand-logo" src="" width="100%" />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section Email Subscription */}
        <div className="py-5 px-3">
          <div className="container mt-4 sporteens-bg-banner p-5 rounded">
            <h3 className="text-white text-center">
              Subscribe to our newslater !!
            </h3>
            <p className="text-white text-center">
              Get interested offer from us
            </p>

            <div className="text-center">
              <input
                type="button"
                className="btn btn-white"
                value="Subscribe Now !!"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landingpage;
