import { useState } from "react";
import "./App.css";
import * as React from "react";
import { Header } from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Pages } from "./pages/Pages";
import Data from "./component/flashDeals/Data";
import Sdata from "./component/shop/Sdata";
import { Cart } from "./pages/cart/Cart";
import { Footer } from "./common/footer/Footer";
import { ProductDetail } from "./pages/productdetail/ProductDetail";
import { Products } from "./pages/products/Products";
import PData from "./pages/phone/Pdata";
import { Phone } from "./pages/phone/Phone";
import { Order } from "./pages/cart/Checkout";
import { Login } from "./pages/login-signup/Login";
import { Signup } from "./pages/login-signup/Signup";
import { Profile } from "./pages/profile/Profile";
import { ProfileUpdate } from "./pages/profile/ProfileUpdate";
import { ChangePassword } from "./pages/profile/ChangePassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IndexAdmin } from "../src/Admin/IndexAdmin";
import CreateProduct from "./Admin/Create/CreateProduct";
import PurchaseHistory from "./pages/profile/PurchaseHistory";
function App() {
  //step 1: fetch data from DB
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const { phoneItems } = PData;
  const [cartItem, setCardItem] = useState([]);
  const [productItem, setProductItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id == product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id == product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const itemDetail = (product) => {
    const productExist = productItem.find((item) => item.id == product.id);

    if (!productExist) {
      setProductItem([...productItem, product]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id == product.id);
    if (productExit.qty == 1) {
      setCardItem(cartItem.filter((item) => item.id != product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id == product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/admin" exact>
              <IndexAdmin />
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </Route>
            <Route path="/create/CreateProduct" exact>
              <CreateProduct/>
            </Route>
          </Switch>
        </Router>
      </div>

      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header cartItem={cartItem} />
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                itemDetail={itemDetail}
                shopItems={shopItems}
              />
              <Footer />
            </Route>
            <Route path="/login-signup/Login" exact>
              <Header cartItem={cartItem} />
              <Login />
              <Footer />
            </Route>
            <Route path="/login-signup/Signup" exact>
              <Header cartItem={cartItem} />
              <Signup />
              <Footer />
            </Route>
            <Route path="/cart/Cart" exact>
              <Header cartItem={cartItem} />
              <Cart
                cartItem={cartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
              <Footer />
            </Route>
            <Route path="/profile/Profile" exact>
              <Header cartItem={cartItem} />
              <Profile />
              <Footer />
            </Route>
            <Route path="/profile/ProfileUpdate" exact>
              <Header cartItem={cartItem} />
              <ProfileUpdate />
              <Footer />
            </Route>
            <Route path="/profile/ChangePassword" exact>
              <Header cartItem={cartItem} />
              <ChangePassword />
              <Footer />
            </Route>
            <Route path="/profile/PurchaseHistory" exact>
              <Header cartItem={cartItem} />
              <PurchaseHistory />
              <Footer />
            </Route>
            <Route path="/cart/Checkout" exact>
              <Header cartItem={cartItem} />
              <Order
                cartItem={cartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
              <Footer />
            </Route>
            <Route path="/productdetail/:id">
              <Header cartItem={cartItem} />
              <ProductDetail
                productItems={productItems}
                addToCart={addToCart}
              />
              <Footer />
            </Route>
            <Route path="/products">
              <Header cartItem={cartItem} />
              <Products productItems={productItems} addToCart={addToCart} />
            </Route>
            <Route path="/phone">
              <Header cartItem={cartItem} />
              <Phone phoneItems={phoneItems} addToCart={addToCart} />
            </Route>
          </Switch>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Router>
      </div>
    </>
  );
}

export default App;
