import React from 'react';
import products from 'src/_mocks_/products';
import './styles.css';

export default function ShoppingCart() {
  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <i className="fa fa-shopping-cart cart-icon"></i>
          <span className="badge">3</span>
          <div className="shopping-cart-total">
            <span className="lighter-text">Total: </span>
            <span className="main-color-text">R$2,229.97</span>
          </div>
        </div>

        <ul className="shoppin  g-cart-items">
          {products.map((item) => {
            return (
              <li className="clearfix">
                <img src={item.cover} alt="item1" />
                <span className="item-name">Sony DSC-RX100M III</span>
                <span className="item-price">$849.99</span>
                <span className="item-quantity">Quantity: 01</span>
              </li>
            );
          })}
        </ul>

        <a href="#" className="button">
          Finalizar compra
        </a>
      </div>
    </div>
  );
}
