import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Col, Row, Card } from "react-bootstrap";

export const ListItems = ({ itemsData }) => {
  return (
    <Row>
      <Zoom>
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col sm="12" className="mb-3" key={item.id}>
                <Card className="d-flex flex-row">
                  <Card.Img
                    variant="top"
                    src={item.imgUrl}
                    className="img-item"
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between my-2">
                      <div className="item-title"> {item.title}</div>
                      <div className="item-price">{item.price} </div>
                    </Card.Title>
                    <Card.Text>
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">No items found</h3>
        )}
      </Zoom>
    </Row>
  );
};
