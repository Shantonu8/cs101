import Head from "next/head";
import {
  PostCard,
  Categories,
  PostWidget,
  FeaturedPostCard,
} from "../components";
import FeaturedPosts from "../sections/featuredPosts";
import { getPosts } from "../services";
import { TypeAnimation } from "react-type-animation";

export default function Home({ posts }) {
  return (
    <>
      <div className="container mx-auto px-10 mb-8 b">
        {/* <span className="text-white techfont "><h1 className="text-center exlgfont">CS101</h1></span>
         */}

        <TypeAnimation
          sequence={["CS101", 1760, "Learn CS", 1760, "What is CS?", 1760]}
          //  Replacing previous Text
          // style={{ fontSize: '2em' }}
          className="techfont text-white exlgfont text-center hidden md:block"
          wrapper="h2"
          speed={10}
          repeat={Infinity}
        />

        <Head>
          <title className="techfont">CS101</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => {
              return <PostCard props={post.node} key={post.title} />;
            })}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
