const initialState = {
  products: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_PRODUCTO_AL_CARRITO":
      console.log(state);
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
          },
        ],
        total: state.total + action.payload.price,
      };
    case "ELIMINAR_PRODUCT_DEL_CARRITO":
      console.log("me quieres eliminar? ");
      const arrayProducts = state.products.filter(
        (p) => p.id !== action.payload.id
      );
      return {
        ...state,
        products: arrayProducts,
      };
    default:
      return state;
  }
};

export default reducer;
