import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import  matter from 'gray-matter'


export default function Home({ posts }) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>Watch Out, IIT Roorkee </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    </div>
  )
}

// export async function getStaticPaths() {
//   const files = fs.readdirSync(path.join('posts'))

//   const paths = files.map(filename => ({
//     params: {
//       slug: filename.replace('.md', '')
//     }
//   }))

//   console.log(paths)

//   return {
//     paths,
//     fallback: false
//   }
// }


export async function getStaticProps() {
  // Get files from post directory
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter
  const posts = files.map(filename => {

    // Creates slug
    const slug = filename.replace('.md', '')

    // Gets Frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  console.log(posts)

  return {
    props: {
        posts: posts
    },  
  }
}
