import fs from 'fs'
import html from 'remark-html'
import matter from 'gray-matter'
import path from 'path'
import prism from 'remark-prism'
import remark from 'remark'

const essaysDirectory = path.join(process.cwd(), 'essays')

export function getSortedEssaysData() {
  // Get file names under /essays
  const fileNames = fs.readdirSync(essaysDirectory)
  const allEssaysData = fileNames.map(fileName => {
    //Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(essaysDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id, 
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allEssaysData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(essaysDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/,'')
      }
    }
  })
}

export async function getEssayData(id) {
  const fullPath = path.join(essaysDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(prism)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}