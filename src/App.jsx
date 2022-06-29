import './App.css'
import React from 'react'

function App() {
  return (
    <>
      {/* Holds the icon, search-by-category, search bar, search button */}
      <ul className="navbar" id="topnav">
        <li>Hi <a>Sign in</a> or <a>register</a></li>
        <li>Daily Deals</li>
        <li>Brand Outlet</li>
        <li>Help &amp; Contact</li>
        <li id="nav-right-align">Sell</li>
        <li>Watchlist</li>
        <li>My eBay</li>
        <li className="icon">🔔</li>
        <li className="icon">🛒</li>
      </ul>
      <table>
        <tbody>
          <tr id="ebay-icon-placeholder">
            <img id="ebay-icon" alt="eBay Logo" src="https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png"/>
            <a href="/"></a>
          </tr>
          <tr id="sbc">
            Shop by category
          </tr>
          <tr id="search-bar">
            <input placeholder="Search for anything" type="text"/>
            <select id="search-select" className="search">
              <option >All Categories</option>
              <option >Antiques</option>
              <option >Art</option>
              <option >Baby</option><option value="267">Books</option>
              <option >Business &amp; Industrial</option>
              <option >Cameras &amp; Photo</option>
              <option >Cell Phones &amp; Accessories</option>
              <option >Clothing, Shoes &amp; Accessories</option>
              <option >Coins &amp; Paper Money</option>
              <option >Collectibles</option>
              <option >Computers/Tablets &amp; Networking</option>
              <option >Consumer Electronics</option>
              <option >Crafts</option>
              <option >Dolls &amp; Bears</option>
              <option >DVDs &amp; Movies</option>
              <option >eBay Motors</option>
              <option >Entertainment Memorabilia</option>
              <option >Gift Cards &amp; Coupons</option>
              <option >Health &amp; Beauty</option>
              <option >Home &amp; Garden</option>
              <option >Jewelry &amp; Watches</option>
              <option >Music</option>
              <option >Musical Instruments &amp; Gear</option>
              <option >Pet Supplies</option>
              <option >Pottery &amp; Glass</option>
              <option >Real Estate</option>
              <option >Specialty Services</option>
              <option >Sporting Goods</option>
              <option >Sports Mem, Cards &amp; Fan Shop</option>
              <option >Stamps</option>
              <option >Tickets &amp; Experiences</option>
              <option >Toys &amp; Hobbies</option>
              <option >Travel</option>
              <option >Video Games &amp; Consoles</option>
              <option >Everything Else</option>
            </select>
          </tr>
          <tr id="search-button">
            <button>Search</button>
          </tr>
          <tr id="adv">Advanced</tr>
        </tbody>
      </table>
      <ul className="navbar">
        <li>Home</li>
        <li>♥Saved</li>
        <li>Motors</li>
        <li>Electronics</li>
        <li>Collectibles &amp; art</li>
        <li>Home &amp; Garden</li>
        <li>Clothing &amp; Accessories</li>
        <li>Toys</li>
        <li>Sporing Goods</li>
        <li>More</li>
      </ul>
    </>
  );
}

export default App;
