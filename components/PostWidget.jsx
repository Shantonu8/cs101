import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  // console.log(relatedPosts);

  return (
    <div className="bg-darkmode shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 techfont text-white">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => {
        return (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img
                alt={post.title}
                height="60px"
                width="60px"
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              ></img>
            </div>
            <div className="flex-grow ml-4 techfont text-white">
              <p className=" font-xs techfont text-white">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <span className="text-lg techfont text-white transition duration-200 hover:text-pink-600">
                <Link
                  href={`/post/${post.slug}`}
                  key={post.title}
                  
                >
                  {post.title}
                </Link>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
