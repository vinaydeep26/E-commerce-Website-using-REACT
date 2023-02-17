import React from "react";
import "./header.css";
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
          <Link to="/" style={{ textDecoration : "none"}}>
          <div className='head_logo'>
            <ShopIcon className='header_logo_image' fontsize="large"/>
            <h2 className='header_logotitle'>Buy shop</h2>
            </div>
          </Link>
            
      <div className="header_search">
      <input type="text" className='header_searchinput'/>
      <SearchIcon className='header_searchicon'/>
      </div>
      <div className="header_nav"> 
        <Link to="/login" style={{textDecoration: "none" }}>
        <div className="nav_item">
          <span className="nav_itemLineone">hi guest</span>
          <span className="nva_itemLinetwo">sign in</span>
        </div>
        </Link>
        <div className="nav_item">
        <span className="nav_itemLineone">your</span>
          <span className="nva_itemLinetwo">shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration : "none"}}>
        <div className="nav_itemBasket">
        <ShoppingCartIcon />
          <span className="nva_itemLinetwo nav__basketCount">{basket.length}</span>
        </div>
        </Link>
        
      </div>
        </div>
    )
}

export default Header