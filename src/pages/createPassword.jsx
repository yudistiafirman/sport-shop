import React, { Component } from "react";
import Axios from "axios";
import apiUrl from "../supports/constant/apiUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export class CreatePassword extends Component {
  state = {
    icon: false,
  };

  onSubmitBtnClick = () => {
    // get value
    let pass = this.refs.pass.value;
    let passconfirm = this.refs.passconfirm.value;

    if (pass && passconfirm) {
      var id = this.props.location.pathname.split("/")[2];

      // check input 1 dan 2 harus sama
      if (pass === passconfirm) {
        Axios.patch(apiUrl + "users/" + id, { password: pass })
          .then((res) => {
            console.log(res);
            alert("create password success");
            window.location = "/";
          })
          .catch((err) => {
            console.log(err);
          });
        // kirim ke api
      } else {
        alert("Password and confirm password didnt match");
      }
    }

    // password harus lebih dari 8 digit
  };

  unlockPass = () => {
    var password = this.refs.pass;
    var conpass = this.refs.passconfirm;

    if (password.type && conpass.type === "password") {
      password.type = "text";
      conpass.type = "text";
      this.setState({ icon: true });
    } else {
      password.type = "password";
      conpass.type = "password";
      this.setState({ icon: false });
    }
  };

  render() {
    return (
      <div className="py-5 px-3">
        <h1 className="text-center"> Create Your Password Here !! </h1>
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 p-5  rounded sporteens-shadow">
            <div className=" d-flex align-items-center">
              <input
                type="password"
                ref="pass"
                className="form-control w-75 "
                placeholder="enter password"
              />

              <span className="text-black-50 ml-1">
                {this.state.icon ? (
                  <FontAwesomeIcon
                    onClick={this.unlockPass}
                    icon={faEyeSlash}
                  />
                ) : (
                  <FontAwesomeIcon onClick={this.unlockPass} icon={faEye} />
                )}
              </span>
            </div>

            <div className=" d-flex align-items-center">
              <input
                type="password"
                ref="passconfirm"
                className="form-control w-75"
                placeholder="confirm password"
              />
            </div>

            <input
              type="button"
              onClick={this.onSubmitBtnClick}
              value="Submit"
              className="btn btn-outline-primary w-75 mt-5"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePassword;
