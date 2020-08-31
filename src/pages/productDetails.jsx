import React, { Component } from "react";
import "../supports/css/componen.css";

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5">
              <div className="product-details-height border sporteens-bg-light"></div>
              <div className="container">
                <div className="row justify-content-center mt-4">
                  <div className="col-3 ">
                    <div className="sporteens-bg-light product-details-sub-height"></div>
                  </div>
                  <div className="col-3 ">
                    <div className="sporteens-bg-light product-details-sub-height"></div>
                  </div>
                  <div className="col-3 ">
                    <div className="sporteens-bg-light product-details-sub-height"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 d-flex flex-column   justify-content-between">
              <div className="product-details-font-title ">
                Adidas Ultraboost 2.0
              </div>
              <p className="product-details-font-small ">Terjual 5 Produk</p>
              <p className="product-details-font-title">Rp.2.500.0000</p>
              <p className="border border-bottom"></p>
              <div className="product-details-font-small font-weight-bold">
                Stock
              </div>
              <div className="product-details-font-small">20 Pcs</div>
              <div className="product-details-font-small font-weight-bold">
                Berat
              </div>
              <p className="product-details-font-small">350gr</p>
              <p className="border border-bottom"></p>
              <div className="product-details-font-small font-weight-bold">
                Deskripsi
              </div>
              <p className="product-details-font-small ">
                Walk confidently into the future. Rooted in the retro-tech style
                of the ‘80s, the adidas ZX 2K Boost Shoes bring the past
                forward. Reworked with fresh design elements and modern
                technologies, these trainers are ready and waiting to see what
                the future holds.
              </p>
              <div className="row">
                <div className="d-flex flex-column col-6 col-md-9">
                  <button className="btn btn-outline-dark my-radius">
                    Add to Chart
                  </button>
                </div>
                <div className="d-flex flex-column col-6 col-md-3 ">
                  <button className="my-radius btn btn-outline-dark">
                    add to wishlist
                  </button>
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
