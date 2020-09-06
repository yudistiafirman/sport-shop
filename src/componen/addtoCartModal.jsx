import React, { Component } from "react";

import { Modal, ModalHeader } from "reactstrap";

class AddtoCartModal extends Component {
  state = {
    openModal: false,
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
          {this.props.children}
        </Modal>
      </span>
    );
  }
}

export default AddtoCartModal;
