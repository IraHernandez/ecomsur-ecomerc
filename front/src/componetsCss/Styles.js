import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* padding-block: 1rem; */
  padding-inline: 1rem;
  background-color: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  & nav ul {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    gap: 1rem;
    list-style: none;
  }
  & nav ul li select {
    margin-inline: 1rem;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
  }
  & nav ul li:nth-child(2) i {
    position: relative;
    /* border: 1px solid red;
    display: flex;
    justify-content: center;
    width: 50px;
    padding: 0.5rem 0.5rem; */
  }
  & .cartCounter {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    background-color: var(--white-100);
    color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    right: -15px;
    top: -15px;
  }
`;

export const HeroContainer = styled.div`
  & img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const ProductContainer = styled.div`
  color: black;

  & h1 {
    text-align: center;
    color: var(--color-primary);
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const ProductsGrid = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  grid-template-rows: 400px;
  margin-block-end: 1rem;
`;

export const ProductCard = styled.div`
  /* border: 1px solid blue; */
  border-radius: 0.5rem;
  width: 100%;

  background-color: white;
  position: relative;

  & img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  & .productInfo {
    display: none;
    border-radius: 0.5rem;
  }
  &:hover .productInfo {
    display: flex;
    border-radius: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(28, 40, 51, 0.95);
    color: white;
    padding: 1rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;

  background-color: var(--white-100);
  width: 100%;
  border: none;
  outline: none;
  margin-block: 0.75rem;
  /* background-color: black; */
  color: #1c2833;
`;

export const CartModal = styled.div`
  position: absolute;
  right: 40px;
  top: 60px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--white-100);
  color: var(--color-primary);
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    border: none;
    color: var(--white-100);
    border-radius: 0.25rem;
    background-color: #515a5a;
  }
`;
