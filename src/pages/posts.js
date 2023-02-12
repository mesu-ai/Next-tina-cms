import React from 'react';
import { getAllPosts } from '../../lib/api';
// import { useTina } from 'tinacms/dist/react'
  // import { TinaMarkdown } from 'tinacms/dist/rich-text'

const Posts = ({ allPosts }) => {

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  console.log(allPosts);
  
  return (
    <div>
      post page
      
    </div>
  );
};

export default Posts;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    // 'date',
    // 'slug',
    // 'author',
    // 'coverImage',
    // 'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

