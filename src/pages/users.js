import Image from 'next/image';
import React from 'react';
import { getAllData } from '../../lib/customApi';

const users = ({ allBlogs }) => {

  const heroPost = allBlogs[0]
  const morePosts = allBlogs.slice(1)

  console.log(allBlogs);

  return (
    <div>
      users
      {allBlogs?.map(item =>
        <div key={item?.title}>
          <p>{item.title}</p>
          <p>{item.date}</p>
          <p>{item.summary}</p>
          <Image src={item?.thumbnailImage} alt='ldl' width={500}
            height={500} />
          <Image src={item?.coverImage} alt='ldl' width={500}
            height={500} />
            <p>{item?.description}</p>


        </div>)}

    </div>
  );
};

export default users;


export async function getStaticProps() {
  const allBlogs = getAllData([
    'title',
    'date',
    'thumbnailImage',
    'coverImage',
    'tag',
    'summary',
    'description'

  ], 'content/users')

  return {
    props: { allBlogs },
  }
}
