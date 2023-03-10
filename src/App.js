import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import WishListContentPage from "./components/WishListContentPage";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SingleProductPage from "./components/SingleProductPage";
function App() {
  const LOCAL_STORAGE_KEY = "wishlist data";
  const [cartItem, setCartItem] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  const singleProductDetails = (k) => {
    setProductDetails(k);
    console.log(k);
  };
  const setwishlistData = (k) => {
    if (!cartItem.includes(k)) {
      setCartItem([...cartItem, k]);
      // console.log(cartItem);
    } else {
      const newWishListData = cartItem.filter((item) => {
        return item !== k;
      });
      setCartItem(newWishListData);
    }
  };

  const removeWishlistData = (items) => {
    if (cartItem.includes(items)) {
      const newWishListData = cartItem.filter((item) => {
        return item !== items;
      });
      setCartItem(newWishListData);
    }
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItem));
  }, [cartItem]);

  // useEffect(() => {
  //   const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  // }, [cartItem]);
  return (
    <Router>
      <NavBar wishlistCount={cartItem} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              setwishlistData={setwishlistData}
              cartItem={cartItem}
              singleProductDetails={singleProductDetails}
            />
          }
        ></Route>
        <Route
          path="/wishListContentPage"
          element={
            <WishListContentPage
              removeWishlistData={removeWishlistData}
              cartItem={cartItem}
            />
          }
        ></Route>
        <Route
          path="/singleProductPage"
          element={
            <SingleProductPage
              productDetails={productDetails}
              singleProductDetails={singleProductDetails}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
