import React, { Component } from "react";

export class Brand extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Brand;
