const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /docsearch\.js/,
      loader: 'null-loader',
    })
  }
}
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/blog/**"}}) {
      edges {
        node {
          id
         fileAbsolutePath
        }
      }
    }
  }  
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    const regex = /.*\/blog\/(\d{4})-(\d{2})-(\d{2})-(.*)\.md/i
    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fileAbsolutePath.replace(regex, '/blog/$1/$2/$3/$4'),
        component: path.resolve(`src/templates/blog.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
