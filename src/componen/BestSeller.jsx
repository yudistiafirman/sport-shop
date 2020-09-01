import React, { Component } from "react";

class BestSeller extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default BestSeller;
