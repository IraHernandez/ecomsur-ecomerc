import React from "react";
import { connect } from "react-redux";
import { Button, ProductCard } from "../componetsCss/Styles";

const Product = ({ product, addProductToCart }) => {
  const { image } = product;

  return (
    <ProductCard>
      <img src={`http://localhost:5000${image}`} alt="" />
      <div className="productInfo animate__animated animate__fadeOutLeft">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <strong>Precio: $/{product.price}</strong>

        <strong>Stock: {product.countInStock} unid.</strong>

        <Button
          onClick={() =>
            addProductToCart(product._id, product.name, product.price)
          }
        >
          Agregar al carrito
        </Button>
      </div>
    </ProductCard>
  );
};

const mapStateToProps = (state) => {
  return {
    carrito: state.carrito,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (id, name, price) => {
      dispatch({
        type: "AGREGAR_PRODUCTO_AL_CARRITO",
        payload: {
          id,
          name,
          price,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
