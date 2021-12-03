import React, { useState } from "react";
import { connect } from "react-redux";
import {
  CartModal,
  HeaderContainer,
  ProductPrice,
} from "../componetsCss/Styles";

const Header = ({ products, deleteProduct }) => {
  const [showCartProduct, setShowCartProduct] = useState(false);

  console.log(products);

  const showcart = () => {
    setShowCartProduct(!showCartProduct);
    console.log(showCartProduct);
  };

  return (
    <HeaderContainer className="header-container">
      <h1>
        E-Tech {""}
        <span>Store</span>
      </h1>

      <nav>
        <ul>
          <li>
            Categorias:
            <select name="" id="">
              <option value="">--Selecione-</option>
              <option value="">Electronics</option>
              <option value="">Others</option>
            </select>
          </li>
          <li className="debug">
            <i className="icon-cart" onClick={showcart}>
              <div className="cartCounter">{products.length}</div>
            </i>
          </li>
        </ul>
      </nav>
      {showCartProduct && (
        <CartModal>
          {products.length === 0 ? <p>No hay nada en tu carrito :(</p> : null}
          {products.map((product) => (
            <div className="productItem">
              <p>{product.name}</p>
              <ProductPrice>
                <strong>{product.price}</strong>
                <button onClick={() => deleteProduct(product.id)}>
                  {" "}
                  &times; Eliminar
                </button>
              </ProductPrice>

              <hr />
            </div>
          ))}
        </CartModal>
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => {
      dispatch({
        type: "ELIMINAR_PRODUCT_DEL_CARRITO",
        payload: {
          id,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
