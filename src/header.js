import React from "react";
import "./header.css";
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (
        <div className="header">
            <div className='head_logo'>
      <ShopIcon className='header_logo_image' fontsize="large"/>
      <h2 className='header_logotitle'>Buy shop</h2>
      </div>

      <div className="header_search">
      <input type="text" className='header_searchinput'/>
      <SearchIcon className='header_searchicon'/>
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineone">hi guest</span>
          <span className="nva_itemLinetwo">sign in</span>
        </div>
        <div className="nav_item">
        <span className="nav_itemLineone">your</span>
          <span className="nva_itemLinetwo">shop</span>
        </div>
        <div className="nav_item">
        <ShoppingCartIcon className='itemBasket'/>
          <span className="nva_itemLinetwo nav__basketCount"></span>0
        </div>
      </div>
        </div>
    )
}

export default Header