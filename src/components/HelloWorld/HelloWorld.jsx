import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Jumbotron,
  Container,
  Col,
  Row
} from "reactstrap";
import cn from "classnames/bind";
import styles from "./HelloWorld.css";

const propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node
};

const defaultProps = {
  name: "World",
  message: "This is a simple component."
};

const cx = cn.bind(styles);

class HelloWorld extends Component {
  render() {
    const { name, message, children } = this.props;

    return (
      <Jumbotron className="text-xs-center">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-4">Hello {name}!</h1>
              <p className="lead">
                {message}
              </p>
              <p className={cx(styles["chainplate-helloworld-border"])}>
              </p>
              {children}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

HelloWorld.propTypes = propTypes;
HelloWorld.defaultProps = defaultProps;

export default HelloWorld;