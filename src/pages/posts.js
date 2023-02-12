import React from 'react';
import { getAllData } from '../../lib/customApi';


const Posts = ({ allPosts }) => {

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  // console.log(allPosts);
  
  return (
    <div>
      post page
      
    </div>
  );
};

export default Posts;


export async function getStaticProps() {
  const allPosts =getAllData([
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

