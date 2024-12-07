import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
        onClick={toggleSidebar}
      >
        <HiOutlineMenuAlt2 size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${
          isOpen ? "left-0" : "-left-full"
        } h-screen w-64 bg-gray-100 z-40 transition-all duration-300 ease-in-out`}
      >
        <ul className="p-5 space-y-8">
          <li>
            <Link to="/Order">
              <HiOutlineMenuAlt2 size={28} />
            </Link>
          </li>
          <li>
            <Link to="/Home">
              <HiOutlineHome size={28} />
            </Link>
          </li>
          <li>
            <Link to="/Cartitem">
              <CiShoppingCart size={28} />
            </Link>
          </li>
          <li>
            <Link to="/Favorites">
              <IoHeartOutline size={28} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
 