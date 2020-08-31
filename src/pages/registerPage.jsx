import React, { Component } from "react";
import "../supports/css/Utils.css";
import "../supports/css/componen.css";
import PhoneNumberValidator from "../supports/function/phoneValid";
import EmailValidator from "../supports/function/emailValid";
import ApiUrl from "../supports/constant/apiUrl";
import Axios from "axios";

class RegisterPage extends Component {
  state = {
    errorMessage: "",
    data: true,
  };

  onSubmitClick = () => {
    // get value from input
    var value = this.refs.emailorPhone.value;

    if (Number(value[0]) >= 0) {
      this.getData(value);
      if (this.state.data === true) {
      }
      var phoneValidatorResult = PhoneNumberValidator(value);
      if (phoneValidatorResult === true) {
        alert("berhasil");
        this.sendDataToApi({ phone: value, email: "" });
        // kirim ke api
      } else {
        this.setState({ errorMessage: phoneValidatorResult });
        // munculin error message
      }
    } else {
      if (EmailValidator(value) === true) {
        alert("berhasil");
        this.sendDataToApi({ email: value, phone: "" });

        // kirim ke api
      } else {
        this.setState({ errorMessage: "Email format wrong !!" });

        // munculin error message
      }
    }

    // validasi input
    // kirim ke api
  };

  sendDataToApi = (data) => {
    var dataToSend = data;
    dataToSend.password = "";

    Axios.post(ApiUrl + "users", dataToSend)
      .then((res) => {
        console.log(res);
        alert("register success");
        window.location = `/create-pass/${res.data.id}`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getData = (input) => {
    Axios.get(ApiUrl + "users").then((res) =>
      res.data.filter((v) =>
        v.phone === input
          ? this.setState({ data: true })
          : this.setState({ data: false }),
      ),
    );
  };

  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 col-md-6 col-md-6 col-lg-6 register-page-bg   d-flex align-items-center justify-content-center"></div>
          <div className=" col-12 col-md-6 col-md-6 col-lg-6 f-darker">
            <div className="  ">
              <div className="my-height row justify-content-center ">
                <div className="  d-flex flex-column col-9 col-md-11 col-lg-9 align-self-center  ">
                  {this.state.errorMessage ? (
                    <div className="alert alert-danger">
                      {" "}
                      {this.state.errorMessage}{" "}
                    </div>
                  ) : null}
                  <p className="align-self-center mb-4 register-font-title font-weight-bold text-capitalize">
                    Daftar disini
                  </p>
                  <input
                    className="  mb-2 button-font btn btn-outline-primary my-radius form-control    "
                    placeholder=" Masukan Nomor Handphone / Email Mu"
                    ref="emailorPhone"
                    type="text"
                  />

                  <input
                    className="btn btn-outline-dark my-radius button-font text-black-50 text-capitalize "
                    onClick={this.onSubmitClick}
                    type="button"
                    value="submit"
                  />
                </div>
                <div className="  d-flex flex-column col-9 col-md-11 col-lg-9 ">
                  <p className="align-self-center mb-4 register-font-title">
                    Atau
                  </p>
                  <input
                    className="btn btn-outline-primary form-control   mb-2 my-radius button-font text-capitalize "
                    placeholder=" Daftar dengan akun Google"
                  />

                  <p className="text-center button-font text-capitalize">
                    Sudah punya akun?
                    <span className="font-weight-bold button-font"> Masuk</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
