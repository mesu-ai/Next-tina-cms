import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getAllData } from '../../lib/customApi';
// import markdownToHtml from '../../lib/markdownToHtml';
// import { TinaMarkdown } from 'tinacms/dist/rich-text'
// import { customMark } from '../../lib/customMark';
// import { remark } from 'remark'
// import html from 'remark-html'
// import remarkHtml from 'remark-html';
// import { unified } from 'unified'
// import remarkParse from 'remark-parse'
// import HtmlMark from '../components/HtmlMark';
// import markdownToHtml from '../../lib/markdownToHtml';
import Link from 'next/link';


const blogs = ({ allBlogs }) => {
  // const [saveContent, setSaveContent] = useState('');

  // const heroPost = allBlogs[0]
  // const morePosts = allBlogs?.slice(1)

  console.log(allBlogs);

  // const handleMark = (content) => {
  //   console.log(content)
  //   // const mark = markToHtml(content);
  //   //  return mark;

  //   // console.log(mark)

  //   markdownToHtml(content);



  // }

  // async function markToHtml(content) {
  //   const file = await unified()
  //     .use(remarkParse)
  //     .use(remarkHtml)
  //     .process(content)
  //   // return file;

  //   // setSaveContent(String(file));

  //   console.log(String(file))

  // }

//  async function markdownToHtml(markdown) {
//     const result = await remark().use(html).process(markdown)
//     console.log(result.toString());
//     return result.toString()
//   }

  // console.log(saveContent);


  return (
    <div>
      blogs
      {allBlogs?.map(item =>
        <div key={item?.title}>
          <Link href={`/blog/${item?.slug}`}>
          <p>{item.title}</p>

          </Link>
          
          <p>{item.date}</p>
          <p>{item.summary}</p>
          <Image src={item?.thumbnailImage} alt='ldl' width={500}
            height={500} />
          <Image src={item?.coverImage} alt='ldl' width={500}
            height={500} />

        </div>)}

    </div>
  );
};

export default blogs;


export async function getStaticProps() {
  const allBlogs = getAllData([
    'title',
    'date',
    'thumbnailImage',
    'coverImage',
    'tag',
    'slug',
    'summary',
    'description'

  ], 'content/blogs')

 
    // const des= allBlogs.map(async(item)=>{return await markdownToHtml(item.description)} );
    // console.log({des});

 
  return {
    props: { allBlogs },
  }

  // console.log({des: allBlogs.description})

  // const description = await markdownToHtml(allBlogs[0].description)
  // console.log(description);

  // return {
  //   props: {
  //     allBlogs: {
  //       ...allBlogs,
  //       description
  //     },
  //   },
  // }
}
