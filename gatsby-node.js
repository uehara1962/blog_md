const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    query {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              path
            }
          }
        }
      }
    }
  `);

  // console.log(posts);

  const template = path.resolve("src/templates/post.js");
  posts.data.posts.edges.forEach((post) => {
    // console.log(post.node.frontmatter.title);

    createPage({
      path: post.node.frontmatter.path,
      component: template,
      context: {
        id: post.node.frontmatter.path,
      },
    });
  });

  const templateBlog = path.resolve("src/templates/blog.js");
  const pageSize = 3;
  const totalPosts = posts.data.posts.edges.length;
  const numPages = Math.ceil(totalPosts / pageSize);
  // console.log(numPages);
  // console.log(Array.from({ length: numPages }));
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: "/blog" + (i === 0 ? "" : "/" + i),
      component: templateBlog,
      context: {
        limit: pageSize,
        skip: i * pageSize,
        numPages,
        currentPage: i,
      },
    });
  });
};
