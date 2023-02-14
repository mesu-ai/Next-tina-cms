import { useRouter } from 'next/router';
import React from 'react';
import { getAllData, getDataBySlug } from '../../../lib/customApi';
import markdownToHtml from '../../../lib/markdownToHtml';
import HtmlMark from '../../components/HtmlMark';

const Blog = ({data}) => {
  const {query}=useRouter()
  console.log(data);
  
  return (
    <div>
      <h1>{data?.title}</h1>
      {/* <div>{data?.description}</div> */}
      <HtmlMark content={data?.description}/>
      
    </div>
  );
};

export default Blog;


export async function getStaticProps({ params }) {
  const data = getDataBySlug(params.slug, [
    'title',
    'slug',
    'date',
    'thumbnailImage',
    'coverImage',
    'tag',
    'summary',
    'description'
  ],'content/blogs')
  const description = await markdownToHtml(data?.description || '')

  return {
    props: {
      data: {
        ...data,
        description,
      },
    },
  }
}

export async function getStaticPaths() {
  const datas = getAllData(['slug'],'content/blogs')

  return {
    paths: datas.map((data) => {
      return {
        params: {
          slug: data.slug,
        },
      }
    }),
    fallback: false,
  }
}