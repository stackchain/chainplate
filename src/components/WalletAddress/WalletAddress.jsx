import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import cn from "classnames/bind";
import styles from "./WalletAddress.css";

const propTypes = {
  message: PropTypes.string,
  children: PropTypes.node
};

const defaultProps = {
  message: "This is a simple component."
};

const cx = cn.bind(styles);

class WalletAddress extends Component {
  render() {
    const { message, children } = this.props;

    return (
      <Form>
        <FormGroup className={cx(styles["chainplate-walletaddress-border"])}>
          <Label for="exampleEmail">Wallet Address {message}</Label>
          <Input type="text" name="chainplate-wallet-address" />
        </FormGroup>
        {children}
        <Button>Save</Button>
      </Form>
    );
  }
}

WalletAddress.propTypes = propTypes;
WalletAddress.defaultProps = defaultProps;

export default WalletAddress;