const fs = require("fs")
const db = require("./data/db.json")
exports.createPages = ({ actions : { createPage }}) => {
  db.posts.forEach(post => {
    let slug = post.title.toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'');
    createPage({
      path: `/blog/${slug}`,
      component: require.resolve("./src/templates/basicTemplate.js"),
      context: {
        slug: slug,
        title: post.title,
        image: post.posterurl,
        content: post.storyline
      },
    })
  })
}