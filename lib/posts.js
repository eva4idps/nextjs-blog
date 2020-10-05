import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts') //process.cwd()目前的資料夾，取此資料夾下的子目錄posts

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory) //取得posts資料夾內所有檔案的名稱
  const allPostsData = fileNames.map(fileName => {

    const id = fileName.replace(/\.md$/, '') //將檔名去除奇怪的符號，並設為id

    const fullPath = path.join(postsDirectory, fileName) //取檔案路徑
    const fileContents = fs.readFileSync(fullPath, 'utf8') //以utf8編碼方式取得檔案內容
    const matterResult = matter(fileContents) //以gray-matter形式取得資料 https://www.npmjs.com/package/gray-matter
    console.log(id)
    return { //包起來回傳object
      id,
      ...matterResult.data
    }
  })
  return allPostsData.sort((a,b) => {
    if (a.date < b.date) {
      return 1 //把b排在a前面
    } else {
      return -1 //把a排在b前面
    }
  })
}