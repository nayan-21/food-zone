import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [logbtn, setLogbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-[#727D73] shadow-lg">
      <div className="logo_container">
        <img
          className="logo-img w-24 rounded-full p-2"
          src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"
        />
      </div>
      <div className="navbar flex items-center">
        <ul className="flex text-[#F0F0D7] font-semibold">
          <li className="mx-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/grocery">
            <li className="mx-4">Grocery</li>
          </Link>
          <Link to="/">
            <li className="mx-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="mx-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="mx-4">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="mx-4">Cart - {cartItems.length}</li>
          </Link>

          <button
            className="border px-4 py-1 text-sm bg-[#d0ddd0] text-black rounded-lg mx-4"
            onClick={() => {
              logbtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");
            }}
          >
            {logbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
