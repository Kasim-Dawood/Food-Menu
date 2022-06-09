import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { TheNavbar } from "./Components/TheNavbar";
import { TheHeader } from "./Components/TheHeader";
import { Category } from "./Components/Category";
import { items } from "./Components/data";
import { ListItems } from "./Components/ListItems";
import "./index.css";

const App = () => {
  const [itemsData, setItemsData] = useState(items);

  // get the Unique categories
  const allCategories = [
    "All Meals",
    ...new Set(items.map((item) => item.category)),
  ];

  // Filter items by category
  const filterByCategory = (category) => {
    if (category === "All Meals") {
      setItemsData(items);
    } else {
      const newCategory = items.filter((item) => item.category === category);
      setItemsData(newCategory);
    }
  };

  // Filter items by search Button
  const filterBySearch = (word) => {
    if (word !== "") {
      const newCategory = items.filter((item) => item.title === word);
      setItemsData(newCategory);
    }
  };

  return (
    <div className="font color-body">
      <TheNavbar filterBySearch={filterBySearch} />
      <Container>
        <TheHeader />
        <Category
          filterByCategory={filterByCategory}
          allCategories={allCategories}
        />
        <ListItems itemsData={itemsData} />
      </Container>
    </div>
  );
};

export default App;
