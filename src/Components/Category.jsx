import React from "react";
import { Slide } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";

export const Category = ({ filterByCategory, allCategories }) => {
  // Filter items by category
  const onFilterHandler = (category) => {
    filterByCategory(category);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="justify-content-center d-flex text-center">
        <Slide>
          {allCategories.length >= 1 ? (
            allCategories.map((category) => {
              return (
                <div key={category}>
                  <button
                    className="btn-meals mx-2"
                    onClick={() => onFilterHandler(category)}
                  >
                    {category}
                  </button>
                </div>
                // <button
                //   className="btn-meals mx-2"
                //   onClick={() => onFilterHandler("Breakfast")}
                // >
                //   Breakfast
                // </button>
                // <button
                //   className="btn-meals mx-2"
                //   onClick={() => onFilterHandler("Lunch")}
                // >
                //   Lunch
                // </button>
                // <button
                //   className="btn-meals mx-2"
                //   onClick={() => onFilterHandler("Dinner")}
                // >
                //   Dinner
                // </button>
                // </div>
              );
            })
          ) : (
            <h4>No Categories Found</h4>
          )}
        </Slide>
      </Col>
    </Row>
  );
};
