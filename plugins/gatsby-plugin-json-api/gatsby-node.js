const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const publicPath = `./public`

const runQuery = (handler, query) =>
  handler(query).then(r => {
    if (r.errors) {
      throw new Error(r.errors.join(`, `))
    }

    return r.data
  })

const query = `{
    missions: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {glob: "**/api/missions/**"}}) {
      edges {
        node {
          frontmatter {
            title
            author
            description
            url
            date
          }
        }
      }
    }
    simulators: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {glob: "**/api/simulators/**"}}) {
      edges {
        node {
          frontmatter {
            title
            author
            description
            url
            date
          }
        }
      }
    }
  }
  `
exports.onPostBuild = async ({ graphql }, pluginOptions) => {
  const data = await runQuery(graphql, query)
  const output = {
    simulators: data.simulators.edges.map(e => e.node.frontmatter),
    missions: data.missions.edges.map(e => e.node.frontmatter),
  }
  ;['simulators', 'missions'].forEach(async e => {
    const outputPath = path.join(publicPath, `/api/${e}`)
    const outputDir = path.dirname(outputPath)
    if (!fs.existsSync(outputDir)) {
      mkdirp.sync(outputDir)
    }
    await new Promise(resolve => {
      fs.writeFile(outputPath, JSON.stringify(output[e]), resolve)
    })
  })
}
