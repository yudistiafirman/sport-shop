import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import ApiUrl from "../supports/constant/apiUrl";
import PhoneNumberValidator from "../supports/function/phoneValid";
import EmailValidator from "../supports/function/emailValid";

class LoginModal extends Component {
  state = {
    openModal: false,
  };
  modalOnSubmitBtn = () => {
    var data = this.refs.emaildata.value;
    var passData = this.refs.passwordData.value;

    if (Number(data[0] >= 0)) {
      if (PhoneNumberValidator(data) === true) {
        this.sendData({ phone: data, email: "" }, { password: passData });
      } else {
        alert(PhoneNumberValidator(data));
      }
    } else {
      if (EmailValidator(data) === true) {
        this.sendData({ email: data, phone: "" }, { password: passData });
      } else {
        alert(EmailValidator(data));
      }
    }
  };

  sendData = (data_email, data_password) => {
    var datatype = data_email.phone ? "phone" : "email";
    var dataValue = data_email.phone ? data_email.phone : data_email.email;
    var dataPassType = "password";
    var dataPassValue = data_password.password;

    Axios.get(
      ApiUrl +
        "users?" +
        datatype +
        "=" +
        dataValue +
        "&" +
        dataPassType +
        "=" +
        dataPassValue,
    ).then((res) => {
      console.log(res.data);
      if (res.data.length === 0) {
        alert("anda belum register silahkan ");
      } else {
        window.location = "/";
        localStorage.setItem("id", res.data[0].id);
      }
    });
  };
  render() {
    return (
      <span>
        <span
          onClick={() => this.setState({ openModal: true })}
          className={this.props.className}
        >
          {this.props.isi}
        </span>
        <Modal
          toggle={() => this.setState({ openModal: false })}
          isOpen={this.state.openModal}
        >
          <ModalHeader toggle={() => this.setState({ openModal: false })}>
            Login Here
          </ModalHeader>
          <ModalBody>
            <input
              type="text"
              placeholder="enter your phone / email"
              className="form-control"
              ref="emaildata"
            />
            <input
              type="password"
              placeholder="enter your password"
              className="form-control mt-3"
              ref="passwordData"
            />
            <input
              type="button"
              className="btn btn-info mt-4"
              onClick={this.modalOnSubmitBtn}
              value="submit"
            />
          </ModalBody>
          <ModalFooter>
            <p className="text-center sporteens-font-14">
              Don't have account yet?
              <Link to="/register" className="sporteens-link">
                <span className="sporteens-clickable-el sporteens-main-dark font-weight-bold">
                  Register here
                </span>
              </Link>
            </p>
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

export default LoginModal;
