import React from "react";
import {
  ProductContainer,
  ProductsGrid,
  Wrapper,
} from "../componetsCss/Styles";
import Product from "./Product";

const ProductsContent = ({ products }) => {
  return (
    <ProductContainer>
      <Wrapper>
        <h1>Productos</h1>

        <ProductsGrid>
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </ProductsGrid>
      </Wrapper>
    </ProductContainer>
  );
};

export default ProductsContent;
