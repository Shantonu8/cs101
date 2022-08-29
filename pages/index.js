import Head from "next/head";
import {PostCard, Categories, PostWidget, FeaturedPostCard} from '../components';
import FeaturedPosts from "../sections/featuredPosts";
import {getPosts} from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 b">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        {posts.map((post, index) => {
          return (
            <PostCard props={post.node} key={post.title}/>
          );
        })}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Categories/> 
          </div>

        </div>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const posts =  (await getPosts()) || [];
  return {
    props: {posts}
  } 
}