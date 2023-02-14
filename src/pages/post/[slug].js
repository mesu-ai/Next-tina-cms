import { useRouter } from 'next/router'
import { getAllData, getDataBySlug } from '../../../lib/customApi';
import markdownToHtml from '../../../lib/markdownToHtml';


export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  console.log(post);
  return (
    <div>
      single post
    </div>
  )
}

// export async function getStaticProps({ params }) {
//   const post = getDataBySlug(params.slug, [
//     'title',
//     // 'date',
//     'slug',
//     // 'author',
//     // 'content',
//     // 'ogImage',
//     // 'coverImage',
//   ])
//   const content = await markdownToHtml(post.content || '')

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   }
// }

// export async function getStaticPaths() {
//   const posts = getAllData(['slug'])

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }


export async function getStaticProps({ params }) {
  const post = getDataBySlug(params.slug, [
    'title',
    // 'date',
    'slug',
    // 'author',
    // 'content',
    // 'ogImage',
    // 'coverImage',
  ],'content/posts')
  const content = await markdownToHtml(post?.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllData(['slug'],'content/posts')

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
