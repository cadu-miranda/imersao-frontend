import React from 'react';
import { useCart } from '../../hooks/useCart';
import products from 'src/_mocks_/products';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function ShoppingCart({ setIsOpenCheckout }) {
  const navigate = useNavigate();

  const { cart, removeProduct } = useCart();

  const handleSelectProductCard = (productObj) => {
    localStorage.setItem('product', JSON.stringify(productObj));
    navigate('/produto');
    setIsOpenCheckout(false);
  };

  const cartProductsIds = Object.keys(cart);

  const newProducts = products?.filter((item) => cartProductsIds.includes(item?.id));

  let initialValue = 0;

  const auxAcc = newProducts?.map((item) => item.price * cart[item?.id]);

  let totalPrice = auxAcc.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="triagle" />
        <ul className="g-cart-items">
          {newProducts?.map((item) => {
            return (
              <div onClick={() => handleSelectProductCard(item)} className="product-cart">
                <img src={item?.cover} alt="item1" className="product-image" />
                <div className="product-info">
                  <span className="item-name">{item?.name}</span>
                  <span className="item-quantity">
                    Quantidade: <b>{cart[item?.id]}</b>
                  </span>
                  <span className="item-price">R$ {item?.price}</span>

                  <button onClick={() => removeProduct(item?.id)} className="noselect">
                    <span className="text">Remover</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </ul>

        <div className="shopping-cart-total">
          {cartProductsIds.length > 0 ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="lighter-text">SUBTOTAL </span>
                <span className="main-color-text">R$ {Number(totalPrice).toFixed(2)}</span>
              </div>

              <a href="#" className="button">
                Finalizar compra
              </a>
            </div>
          ) : (
            <span className="lighter-text">Seu carrinho está vazio!</span>
          )}
        </div>
      </div>
    </div>
  );
}
