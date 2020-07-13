// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";

// const QUERY = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             path
//           }
//         }
//       }
//     }
//   }
// `;

// const Blog = () => {
//   const posts = useStaticQuery(QUERY);

//   return (
//     <div>
//       <h1>Blog</h1>
//       <pre>{JSON.stringify(posts, null, 2)}</pre>
//     </div>
//   );
// };

// export default Blog;

// S>----------------------------------------------------------------------------------------<//

// import React from "react";
// import { graphql, useStaticQuery, Link } from "gatsby";
// import Seo from "../componentes/Seo";

// const QUERY = graphql`
//   query {
//     posts: allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             path
//           }
//         }
//       }
//     }
//   }
// `;

// const Blog = () => {
//   const { posts } = useStaticQuery(QUERY);

//   return (
//     <div>
//       <Seo title="Nosso Blog - PowerSites" />
//       <h1>Blog</h1>
//       {posts.edges.map((post) => {
//         return (
//           <div>
//             <h3>
//               <Link to={post.node.frontmatter.path}>
//                 {post.node.frontmatter.title}
//               </Link>
//             </h3>
//             <p>{post.node.frontmatter.description}</p>
//           </div>
//         );
//       })}
//       {/* <pre>{JSON.stringify(posts.edges, null, 2)}</pre> */}
//     </div>
//   );
// };

// export default Blog;

// S>----------------------------------------------------------------------------------------<//

// import React from "react";
// import { graphql, Link } from "gatsby";
// import Seo from "../componentes/Seo";

// const Blog = (props) => {
//   // const { posts } = useStaticQuery(QUERY);
//   const { data, pageContext } = props;
//   const pages = Array.from({ length: pageContext.numPages });

//   return (
//     <div>
//       <Seo title="Nosso Blog - PowerSites" />
//       <h1>Blog</h1>
//       {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//       {/* <pre>{JSON.stringify(pageContext, null, 2)}</pre> */}
//       {data.posts.edges.map((post) => {
//         return (
//           <div>
//             <h3>
//               <Link to={post.node.frontmatter.path}>
//                 {post.node.frontmatter.title}
//               </Link>
//             </h3>
//             <p>{post.node.frontmatter.description}</p>
//           </div>
//         );
//       })}
//       {/* <pre>{JSON.stringify(posts.edges, null, 2)}</pre> */}
//       {pages.map((_, page) => {
//         return (
//           <li>
//             <Link to={"/blog" + (page === 0 ? "" : "/" + page)}>
//               {pageContext.currentPage === page ? " >> " : ""}
//               {page + 1}
//             </Link>
//           </li>
//         );
//       })}
//     </div>
//   );
// };

// export const pageQuery = graphql`
//   query($skip: Int!, $limit: Int!) {
//     posts: allMarkdownRemark(skip: $skip, limit: $limit) {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             path
//           }
//         }
//       }
//     }
//   }
// `;

// export default Blog;

// S>----------------------------------------------------------------------------------------<//

import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../componentes/Seo";
import Img from "gatsby-image";

const Blog = (props) => {
  // const { posts } = useStaticQuery(QUERY);
  const { data, pageContext } = props;
  const pages = Array.from({ length: pageContext.numPages });

  return (
    <div>
      <Seo title="Nosso Blog - PowerSites" />
      <h1>Blog</h1>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(pageContext, null, 2)}</pre> */}
      {data.posts.edges.map((post) => {
        return (
          <div>
            {post.node.frontmatter.banner && (
              <Img fluid={post.node.frontmatter.banner.childImageSharp.fluid} />
            )}
            <h3>
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <p>{post.node.frontmatter.description}</p>
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(posts.edges, null, 2)}</pre> */}
      {pages.map((_, page) => {
        return (
          <li>
            <Link to={"/blog" + (page === 0 ? "" : "/" + page)}>
              {pageContext.currentPage === page ? " >> " : ""}
              {page + 1}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(skip: $skip, limit: $limit) {
      edges {
        node {
          frontmatter {
            title
            description
            path
            banner {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
