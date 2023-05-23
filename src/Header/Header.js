import React from "react";

const Header = () => {
  return (
    <header className="px-2 py-4">
      <ul className="flex justify-center gap-8">
        <li className="border-b-2 border-transparent pb-2 transition-colors hover:border-emerald-800">
          <button className="text-3xl font-semibold text-neutral-600">
            Timer
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
