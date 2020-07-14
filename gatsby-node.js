// const path = require("path");

// // exports.onCreateNode = ({ node }) => {
// // console.log(node);
// // if (
// //   node.internal.type === "MarkdownRemark"
// // ) {
// //   console.log(node);
// // }

// // if (
// //   node.internal.type === "MarkdownRemark" &&
// //   node.parent === "bc6c78fb-0ead-594e-9574-8a08caf2f707"
// // ) {
// //   console.log(node);
// // }
// // };

// // exports.onCreateNode = ({ node, getNode }) => {
// //   // console.log(node);
// //   if (node.internal.type === "MarkdownRemark") {
// //     // console.log(getNode(node.parent));
// //     const contentName = getNode(node.parent);
// //     console.log(contentName);
// //   }
// // };

// // exports.onCreateNode = ({ node, getNode }) => {
// //   // console.log(node);
// //   if (node.internal.type === "MarkdownRemark") {
// //     // console.log(getNode(node.parent));
// //     const contentName = getNode(node.parent).sourceInstanceName;
// //     console.log(contentName);
// //   }
// // };

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === "MarkdownRemark") {
//     // console.log(getNode(node.parent));
//     const contentName = getNode(node.parent).sourceInstanceName;
//     // console.log(contentName);
//     createNodeField({
//       name: "collection",
//       node,
//       value: contentName,
//     });
//   }
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const posts = await graphql(`
//     query {
//       posts: allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               description
//               path
//             }
//           }
//         }
//       }
//     }
//   `);

//   // console.log(posts);

//   /*
//   const template = path.resolve("src/templates/post.js");
//   posts.data.posts.edges.forEach((post) => {
//     // console.log(post.node.frontmatter.title);

//     createPage({
//       path: post.node.frontmatter.path,
//       component: template,
//       context: {
//         id: post.node.frontmatter.path,
//       },
//     });
//   });

//   const templateBlog = path.resolve("src/templates/blog.js");
//   const pageSize = 3;
//   const totalPosts = posts.data.posts.edges.length;
//   const numPages = Math.ceil(totalPosts / pageSize);
//   // console.log(numPages);
//   // console.log(Array.from({ length: numPages }));
//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: "/blog" + (i === 0 ? "" : "/" + i),
//       component: templateBlog,
//       context: {
//         limit: pageSize,
//         skip: i * pageSize,
//         numPages,
//         currentPage: i,
//       },
//     });
//   });*/
// };

// S>----------------------------------------------------------------------------------------<//

// const path = require("path");
// const { createFilePath } = require("gatsby-source-filesystem");

// // exports.onCreateNode = ({ node }) => {
// // console.log(node);
// // if (
// //   node.internal.type === "MarkdownRemark"
// // ) {
// //   console.log(node);
// // }

// // if (
// //   node.internal.type === "MarkdownRemark" &&
// //   node.parent === "bc6c78fb-0ead-594e-9574-8a08caf2f707"
// // ) {
// //   console.log(node);
// // }
// // };

// // exports.onCreateNode = ({ node, getNode }) => {
// //   // console.log(node);
// //   if (node.internal.type === "MarkdownRemark") {
// //     // console.log(getNode(node.parent));
// //     const contentName = getNode(node.parent);
// //     console.log(contentName);
// //   }
// // };

// // exports.onCreateNode = ({ node, getNode }) => {
// //   // console.log(node);
// //   if (node.internal.type === "MarkdownRemark") {
// //     // console.log(getNode(node.parent));
// //     const contentName = getNode(node.parent).sourceInstanceName;
// //     console.log(contentName);
// //   }
// // };

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === "MarkdownRemark") {
//     // console.log(getNode(node.parent));
//     const contentName = getNode(node.parent).sourceInstanceName;
//     // console.log(contentName);
//     createNodeField({
//       name: "collection",
//       node,
//       value: contentName,
//     });

//     // console.log(createFilePath({ node, getNode }));

//     createNodeField({
//       name: "slug",
//       node,
//       value: createFilePath({ node, getNode }),
//     });
//   }
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const posts = await graphql(`
//     query {
//       posts: allMarkdownRemark(
//         filter: { fields: { collection: { eq: "pages" } } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//               description
//               path
//             }
//           }
//         }
//       }
//       authors: allMarkdownRemark(
//         filter: { fields: { collection: { eq: "authors" } } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);

//   // console.log(posts);

//   const template = path.resolve("src/templates/post.js");
//   posts.data.posts.edges.forEach((post) => {
//     // console.log(post.node.frontmatter.title);

//     createPage({
//       path: post.node.frontmatter.path,
//       component: template,
//       context: {
//         id: post.node.frontmatter.path,
//       },
//     });
//   });

//   const templateAuthor = path.resolve("src/templates/author.js");
//   posts.data.authors.edges.forEach((author) => {
//     // console.log(post.node.frontmatter.title);

//     createPage({
//       path: author.node.frontmatter.title,
//       component: templateAuthor,
//       context: {
//         id: author.node.frontmatter.title,
//       },
//     });
//   });

//   const templateBlog = path.resolve("src/templates/blog.js");
//   const pageSize = 3;
//   const totalPosts = posts.data.posts.edges.length;
//   const numPages = Math.ceil(totalPosts / pageSize);
//   // console.log(numPages);
//   // console.log(Array.from({ length: numPages }));
//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: "/blog" + (i === 0 ? "" : "/" + i),
//       component: templateBlog,
//       context: {
//         limit: pageSize,
//         skip: i * pageSize,
//         numPages,
//         currentPage: i,
//       },
//     });
//   });
// };

// S>----------------------------------------------------------------------------------------<//

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// exports.onCreateNode = ({ node }) => {
// console.log(node);
// if (
//   node.internal.type === "MarkdownRemark"
// ) {
//   console.log(node);
// }

// if (
//   node.internal.type === "MarkdownRemark" &&
//   node.parent === "bc6c78fb-0ead-594e-9574-8a08caf2f707"
// ) {
//   console.log(node);
// }
// };

// exports.onCreateNode = ({ node, getNode }) => {
//   // console.log(node);
//   if (node.internal.type === "MarkdownRemark") {
//     // console.log(getNode(node.parent));
//     const contentName = getNode(node.parent);
//     console.log(contentName);
//   }
// };

// exports.onCreateNode = ({ node, getNode }) => {
//   // console.log(node);
//   if (node.internal.type === "MarkdownRemark") {
//     // console.log(getNode(node.parent));
//     const contentName = getNode(node.parent).sourceInstanceName;
//     console.log(contentName);
//   }
// };

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    // console.log(getNode(node.parent));
    const contentName = getNode(node.parent).sourceInstanceName;
    // console.log(contentName);
    createNodeField({
      name: "collection",
      node,
      value: contentName,
    });

    // console.log(createFilePath({ node, getNode }));

    createNodeField({
      name: "slug",
      node,
      value: createFilePath({ node, getNode }),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    query {
      posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "pages" } } }
      ) {
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
      authors: allMarkdownRemark(
        filter: { fields: { collection: { eq: "authors" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
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

  const templateAuthor = path.resolve("src/templates/author.js");
  posts.data.authors.edges.forEach((author) => {
    // console.log(post.node.frontmatter.title);

    createPage({
      path: author.node.fields.slug,
      component: templateAuthor,
      context: {
        id: author.node.fields.slug,
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
