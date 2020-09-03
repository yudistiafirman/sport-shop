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
    data: null,
  };

  onSubmitClick = () => {
    // get value from input
    var value = this.refs.emailorPhone.value;

    if (Number(value[0]) >= 0) {
      var phoneValidatorResult = PhoneNumberValidator(value);
      if (phoneValidatorResult === true) {
        this.sendDataToApi({ phone: value, email: "" });
        // kirim ke api
      } else {
        this.setState({ errorMessage: phoneValidatorResult });
        // munculin error message
      }
    } else {
      if (EmailValidator(value) === true) {
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

    var datatype = data.phone ? "phone" : "email";
    var datavalue = data.phone ? data.phone : data.email;

    console.log(datatype);
    console.log(datavalue);

    Axios.get(ApiUrl + "users?" + datatype + "=" + datavalue)
      .then((res) => {
        if (res.data.length === 0) {
          Axios.post(ApiUrl + "users", dataToSend)
            .then((res) => {
              console.log(res);
              console.log(res.data.id);
              alert("register success");

              window.location = "/create-pass/" + res.data.id;
              localStorage.setItem("id", res.data.id);
            })
            .catch((err) => {
              this.setState({ errorMessage: err.message });
            });
          // available
        } else {
          this.setState({
            errorMessage: datatype + " already taken, try another !!!!",
          });
        }
      })

      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  };

  render() {
    return (
      <div className="container-fluid  register-page-height ">
        <div className="row">
          <div className="col-12 col-md-6 col-md-6 col-lg-6 register-page-bg   d-flex align-items-center justify-content-center"></div>
          <div className=" col-12 col-md-6 col-md-6 col-lg-6 f-darker">
            <div className="  ">
              <div className="my-height row justify-content-center ">
                <div className="  d-flex flex-column col-9 col-md-11 col-lg-9 align-self-center r  ">
                  {this.state.errorMessage ? (
                    <div className="alert alert-danger">
                      {this.state.errorMessage}
                    </div>
                  ) : null}
                  <p className="align-self-center mb-4 register-font-title font-weight-bold text-capitalize">
                    Daftar disini
                  </p>
                  <input
                    className="  mb-2 button-font  text-center  my-radius form-control register-button-disabled   "
                    placeholder=" Masukan Nomor Handphone / Email Mu"
                    ref="emailorPhone"
                    type="text"
                  />

                  <input
                    className="btn btn-outline-primary my-radius button-font text-black-50 text-capitalize "
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
                    className="text-center form-control   mb-2 my-radius button-font text-capitalize "
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
