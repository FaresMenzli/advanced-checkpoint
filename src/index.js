import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable  from './ProductTable';


import * as serviceWorker from './serviceWorker';


let object1 = {category:"Electronics", price:"80 €", name:"capteur de mouvement"}
let object2 = {category:"clothes", price:"70 €", name:"chaussures"}



let products=[object1,object2] ;

ReactDOM.render(
  <React.StrictMode>
    <ProductTable tableau={products}></ProductTable>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
