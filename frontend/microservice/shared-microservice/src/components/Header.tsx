import React from "react";

const Header = () => {
  const user: any = {
    name: "Rubel",
  };
  return (
    <div className="bg-blue-500 p-4 flex items-center justify-between">
      <div className="flex-1">
        <a className="text-white text-xl">Fancy Shop</a>
      </div>

      <div className="flex-none flex items-center space-x-4">
        {user && user?.email && (
          <>
            <div className="relative group">
              <button className="text-white rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="bg-red-500 text-white absolute -top-1 -right-1 rounded-full p-1">
                  8
                </span>
              </button>
              <div className="hidden group-hover:block absolute top-full right-0 bg-white p-4 shadow-lg">
                <div className="font-bold text-lg">8 Items</div>
                <div className="text-blue-500">Subtotal: $999</div>
                <button className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4">
                  View cart
                </button>
              </div>
            </div>
            <div className="relative">
              <button className="rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </button>
              <ul className="hidden group-hover:block absolute top-full right-0 bg-white p-2 shadow-lg rounded">
                <li className="mb-2">
                  <a className="flex items-center justify-between">
                    Profile
                    <span className="bg-green-500 text-white text-xs p-1 rounded">
                      New
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {!user?.email && (
        <a href="http://localhost:3001/" target="_blank">
          <button className="">Signup</button>
        </a>
      )}
    </div>
  );
};

export default Header;
