import PropTypes from "prop-types";
import React from "react";

import "./App.css";

/* function App() {
    return (
      <div className="App">
        <ProductTable pt={products}></ProductTable>
      </div>
    );} */

const ProductTable = (props) => {
  return (
    <div className="table">
      <header
        style={{
          backgroundColor: "gray",
          textAlign: "center",
          paddingBottom: "30px",
          paddingTop: "20px",
          fontSize: "30px",
        }}
      >
        {" "}
        Advanced WorkShop
      </header>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th> Price</th>
            <th>category</th>
          </tr>
        </thead>
        {props.tableau.map((element) => (
          <tbody key={element.name}>
            <tr>
              <td>{element.name}</td>
              <td> {element.price} </td>
              <td>{element.category}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
ProductTable.propTypes = {
  tableau: PropTypes.array,
};
export default ProductTable;
