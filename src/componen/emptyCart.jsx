import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function EmptyCart() {
  return (
    <div>
      <div
        className=" py-5 d-flex flex-column align-items-center justify-content-center "
        style={{ height: "100vh" }}
      >
        <div>
          <Label basic color="grey" pointing="below" size="big">
            empty?
          </Label>
        </div>
        <FontAwesomeIcon
          icon={faCartPlus}
          className="text-secondary"
          size="10x"
        />
        <h1 className="product-details-font-title">
          Oppps your Cart Still empty!!
        </h1>
        <button className="btn btn-secondary">Click Here To Shopping</button>
      </div>
    </div>
  );
}
export default EmptyCart;
