import Link from 'next/link';
import React from 'react';
import { getAllData } from '../../lib/customApi';


const Posts = ({ allPosts }) => {

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  console.log(heroPost?.slug);
  
  return (
    <div>
      post page
      {allPosts?.map(item=><Link key={item?.title} href={`/post/${item?.slug}`}><p >{item?.title}</p></Link>)}
   
    </div>
  );
};

export default Posts;


export async function getStaticProps() {
  const allPosts =getAllData([
    'title',
    // 'date',
    'slug',
    // 'author',
    // 'coverImage',
    // 'excerpt',
  ],'content/posts')

  return {
    props: { allPosts },
  }
}

