import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">

          {/* LEFT */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          {/* CENTER */}
          <Link to="/" className="logo">
            VESPER
          </Link>

          {/* RIGHT */}
          <div className="header-right">
            <button
              className="icon-btn"
              onClick={() => setShowSearch(!showSearch)}
            >
              Search
            </button>

            <Link to="/cart" className="icon-btn desktop-only">
              Cart ({totalItems})
            </Link>
          </div>
        </div>

        {showSearch && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search fragrances..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              autoFocus
            />
          </div>
        )}
      </header>

      {/* SIDE MENU */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <Link to="/products" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/journal" onClick={() => setMenuOpen(false)}>
          Journal
        </Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          Cart ({totalItems})
        </Link>
      </div>
    </>
  );
}

export default Header;