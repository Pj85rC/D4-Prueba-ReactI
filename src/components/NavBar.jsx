import React, { useState } from "react";
import "./navBar.css";

const NavBar = ({ FilterHandler, OrderHandler }) => {
  const [orderInternal, setOrderInternal] = useState(true);
  const [styleAnchor, setStyleAnchor] = useState('anchorActive');

  const captureFilter = (e) => {
    FilterHandler(e.target.value);
  };

  const captureOrder = (e) => {
    setOrderInternal(!orderInternal);
    OrderHandler(!orderInternal)
    if (!orderInternal) {
      setStyleAnchor('anchorActive');
    } else {  
      setStyleAnchor('anchorInactive');
    }
  };
  
  return (
    <nav className="navBar">
      <img src="assets/logo.png" alt="" />
      <input
        className="search"
        type="text"
        name="busqueda"
        onChange={captureFilter}
        placeholder="Busca tu caballero..."
      />
      <a className={styleAnchor} href="#" onClick= {e => captureOrder(e)} >Ordenar {orderInternal ? 'Descendente' : 'Ascendente'}</a>
    </nav>
  );
};

export default NavBar;