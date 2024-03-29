import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="bg-darkmode shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 techfont text-white">Categories</h3>
      {categories.map((category) => {
        return (<Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3 techfont text-white transition duration-200 hover:text-pink-600">{category.name}</span>
        </Link>);
      })}
    </div>
  );
};

export default Categories;
