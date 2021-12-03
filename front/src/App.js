import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsContent from "./components/ProductsContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/storeReducer";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");
  const [products, setProducts] = useState([]);

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = async () => {
      const url = "http://localhost:5000/api/products";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------

  //reducer es una función que se encarga de tener el estado de nuestro redux

  //creamos el store
  const store = createStore(reducer);

  return (
    /* el Provider se encarga de proveer el estado a todos los components */
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Hero />
            <ProductsContent products={products} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
