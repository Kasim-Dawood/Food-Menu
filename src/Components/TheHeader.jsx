import React from "react";
import { Col, Row } from "react-bootstrap";

export const TheHeader = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <div className="title">FOOD MENU</div>
        <div className="justify-content-center d-flex">
          <p className="underline"></p>
        </div>
      </Col>
    </Row>
  );
};
