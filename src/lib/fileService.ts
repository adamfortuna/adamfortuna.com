import glob from 'glob'
import { promises } from 'fs'
import frontmatter from 'front-matter'

const getDirectories = async function (src:string) {
  return new Promise((resolve, reject) => {
    glob(src + '/**/*', (err, results) => {
      if(err) {
        reject(err)
      } else {
        resolve(results.filter((file) => file.endsWith(".md")))
      }
    })
  })
};

export const getProjects = async () => {
  const files = await getDirectories('content/articles/projects') as string[]

  let fileLoader = files.map(async (file) => {
    return new Promise(async (resolve, reject) => {
      const contentsMarkdown = (await promises.readFile(file)).toString()
      var content = frontmatter(contentsMarkdown)

      resolve({
        ...(content.attributes as Object),
        ...{body: content.body}
      })


    })
  })

  return Promise.all(fileLoader)

}