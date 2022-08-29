// import React from "react";
import React, { useContext } from "react";
import Link from "next/link";

import { useState, useEffect } from "react";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <>
      <div className="container mx-auto px-10 mb-8 sticky relative">
        <div className="border-b w-full inline-block border-black-400 py-8">
          <div className="md: float-left block">
            <Link href="/">
              <span className="cursor-pointer font-bold text-5xl text-white  techfont">
                CS101
              </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => {
              return (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer techfont text-2xl transition duration-200 hover:text-pink-600">
                    {category.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
