import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Delicious food,
          delivered fresh to your door</h2>

        <p>
          Enjoy delicious meals prepared with fresh ingredients and
          delivered straight to your doorstep. Order your favourite food
          anytime, anywhere.
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;