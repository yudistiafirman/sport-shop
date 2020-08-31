import React from "react";
import Navbar from "./componen/Navbar";
import "./supports/css/componen.css";
import "./supports/css/Utils.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
// import ListProduct from "./pages/listProduct";
import Brand from "./pages/Brand";
import Cart from "./pages/Cart";
import RegisterPage from "./pages/registerPage.jsx";
// import ProductDetails from "./pages/productDetails";
import CompFooter from "./componen/Footer";
import CreatePassword from "./pages/createPassword";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/create-pass" component={CreatePassword} />
          <Route path="/brands" component={Brand} />
          <Route path="/carts" component={Cart} />
        </Switch>
        <CompFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
