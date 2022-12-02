import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import ProductList from "./feautures/product/ProductList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import SingleProduct from "./feautures/product/SingleProduct";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import CartList from "./feautures/card/CartList";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>

      <Route index element={<ProductList />} />
      <Route path=":id" element={<SingleProduct />} />

      <Route path="cart" element={<CartList />}></Route>

    </Routes>
  );
}

export default App;
