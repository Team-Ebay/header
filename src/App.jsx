import './App.css'
import React from 'react'

function App() {
  return (
    <>
      <div className="navbar">
        {/* Holds the icon, search-by-category, search bar, search button */}
        <a href="/">
          <img id="ebay-icon" alt="eBay Logo" src="https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png"/>
        </a>
        <table>
          <tbody>
            <tr id="ebay-icon-placeholder">

            </tr>
            <tr>
              Shop by category
            </tr>
            <tr>
              <input type="text"/>
            </tr>
            <tr>
              <button>Search</button>
            </tr>
          </tbody>
        </table>
      </div>
      <nav>

      </nav>
    </>
  );
}

export default App;
