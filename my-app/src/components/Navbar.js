import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Navbar(props) {
  const handleHover = () => {
    document.getElementById("menu").style.display = "flex";
  };

  const handleHoverEnd = () => {
    document.getElementById("menu").style.display = "none";
  };

  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  let items = props.products || []; // Assign an empty array if props.products is undefined
  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));

  // console.log(filteredItems);

  if (document.getElementById("search-list") !== null) {
    if (searchInput.length === 0) {
      document.getElementById("search-list").style.display = "none";
    } else {
      document.getElementById("search-list").style.display = "block";
    }
  }

  const goto = (id) => {
    window.location.href = `/${id}`;
  };


  return (
    <header>
      <a className="top-logo" href="/">
        <img src="img/amazon-logo-wob.png" alt="amazon logo" />
      </a>
      <span href="/" style={{ display: "flex", alignItems: "center" }}>
        <LocationOnOutlinedIcon />
        <div>
          Deliver to
          <br />
          <b>Pakistan</b>
        </div>
      </span>
      <div className="searchbar">
        <div className="input-field">
          <input
            onBlur={() => (document.getElementById("search-list").style.display = "none")}
            placeholder={"Search Amazon"}
            type="search"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button>
            <SearchOutlinedIcon style={{ fontSize: "2.32em" }} />
          </button>
        </div>
        <ul id="search-list">
          {filteredItems.map((item) => (
            <li id={item.id} onClick={() => goto(item.id)} key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <span onMouseEnter={handleHover} onMouseLeave={handleHoverEnd} to="/signin">
        Hello, {props.name}
        <br />
        <b>Account & Lists</b>
        <div className="menu" id="menu">
          {props.loggedin ? (
            <>
              <Link to="/sellsomething">
                <b>Sell Something</b>
              </Link>
              <Link to="/useradds">
                <b>Your Adds</b>
              </Link>
              <a onClick={props.logout} href="/">
                <b>Log out</b>
              </a>
            </>
          ) : (
            <>
              <Link to="/signin">Log In</Link>
            </>
          )}
        </div>
      </span>
      <a href="/">
        Returns
        <br />
        <b>& Orders</b>
      </a>
      <Link to="/cart" className="cart">
        <p>{props.cartLength}</p>
        <div className="cart-img">
          <div>
            <ShoppingCartOutlinedIcon />
          </div>
          <span>
            <b>Cart</b>
          </span>
        </div>
      </Link>
    </header>
  );
}
