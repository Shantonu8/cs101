import React from "react";
import moment from "moment";
import Link from "next/link";
import postcss from "postcss";

const PostCard = ({ props }) => {
  return (
    <div className="bg-darkmode shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={props.featuredImage.url}
          alt={props.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-200 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold text-white techfont">
        <Link href={`/post/${props.slug}`}>{props.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className=" flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={props.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={props.author.photo.url}
          />
          <p className="inline align-middle text-white ml-2 text-lg techfont">
            {props.author.name}
          </p>
        </div>
      </div>
      <p className="text-center text-lg text-white font-normal px-4 lg:px-20 mb-8">{props.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${props.slug}`}>
          <span className="transition duration-400 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer techfont">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
