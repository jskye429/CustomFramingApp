import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <navbar>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/quote">Request a Quote</Link>
    </navbar>
  );
}

export default Nav;
