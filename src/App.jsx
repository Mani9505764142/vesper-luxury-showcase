import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Journal from "./pages/Journal";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;