import { Navbar, Products, CartPage, Checkout } from "./Components";
import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();
  const fetchCart = async () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    });
  };
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const handleAdd2Cart = (productId) => {
    commerce.cart.add(productId, 1).then((cart) => {
      setCart(cart);
    });
  };
  const handleUpdateCart = (lineItemId, quantity) => {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log("There was an error updating the cart items", error);
      });
  };
  const onEmptyCart = () => {
    commerce.cart.empty().then((response) => setCart(response));
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar items={cart?.total_items} />
                <Products products={products} onAddToCart={handleAdd2Cart} />
              </>
            }
          />
          <Route
            path="cart"
            element={
              <>
                <Navbar items={cart?.total_items} />
                <CartPage
                  cart={cart}
                  handleUpdateCart={handleUpdateCart}
                  onEmptyCart={onEmptyCart}
                />
              </>
            }
          />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
