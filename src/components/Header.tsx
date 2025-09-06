// NOTE: ヘッダーコンポネント

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">IT Media</h1>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li className=" hover:underline underline-offset-2">
              <Link href={"/posts"}>Posts</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link href={"/category"}>Category</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link href={"/tags"}>Tags</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
