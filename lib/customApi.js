import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

let pathDirectory=''

// pathDirectory = join(process.cwd(), 'content/posts')


// console.log(pathDirectory);

// const pathDirectory=(path)=>{
//   const dPath= join(process.cwd(),path);
//   return dPath;
 
// };


export function getDataSlugs() {
  return fs.readdirSync(pathDirectory)
}

export function getDataBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(pathDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllData(fields = [], path='content/posts') {
  // const pp= pathDirectory(path);
  // console.log(pp);
  pathDirectory = join(process.cwd(), path)

  const slugs = getDataSlugs()
  const posts = slugs
    .map((slug) => getDataBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
