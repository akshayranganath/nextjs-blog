import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// path from the markwodn files
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostData () {
  // get files names under /posts
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    // read the markdown file
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)

    // combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  })
}
