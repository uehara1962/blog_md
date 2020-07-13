// import React from "react";
// import { graphql } from "gatsby";

// const Post = (props) => {
//   return (
//     <div>
//       <h1>Post</h1>
//       <pre>{JSON.stringify(props, null, 2)}</pre>
//     </div>
//   );
// };

// export const pageQuery = graphql`
//   query($id: String!) {
//     markdownRemark(frontmatter: { path: { eq: $id } }) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

// export default Post;

// S>----------------------------------------------------------------------------------------<//

// import React from "react";
// import { graphql, Link } from "gatsby";

// const Post = ({ data }) => {
//   return (
//     <div>
//       <h1>{data.markdownRemark.frontmatter.title}</h1>
//       <p>
//         <Link to="/blog">Voltar para o blog</Link>
//       </p>
//       <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//     </div>
//   );
// };

// export const pageQuery = graphql`
//   query($id: String!) {
//     markdownRemark(frontmatter: { path: { eq: $id } }) {
//       frontmatter {
//         title
//         description
//       }
//       html
//     }
//   }
// `;

// export default Post;

// S>----------------------------------------------------------------------------------------<//

// import React from "react";
// import { graphql, Link } from "gatsby";
// import Seo from "../componentes/Seo";

// const Post = ({ data }) => {
//   return (
//     <div>
//       <Seo
//         title={data.markdownRemark.frontmatter.title}
//         description={data.markdownRemark.frontmatter.description}
//       />
//       <h1>{data.markdownRemark.frontmatter.title}</h1>
//       <p>
//         <Link to="/blog">Voltar para o blog</Link>
//       </p>
//       <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//     </div>
//   );
// };

// export const pageQuery = graphql`
//   query($id: String!) {
//     markdownRemark(frontmatter: { path: { eq: $id } }) {
//       frontmatter {
//         title
//         description
//       }
//       html
//     }
//   }
// `;

// export default Post;

// S>----------------------------------------------------------------------------------------<//

// import React from "react";
// import { graphql, Link } from "gatsby";
// import Seo from "../componentes/Seo";
// import Img from "gatsby-image";

// const Post = ({ data }) => {
//   return (
//     <div>
//       <Seo
//         title={data.markdownRemark.frontmatter.title}
//         description={data.markdownRemark.frontmatter.description}
//       />
//       {/* {JSON.stringify(data.markdownRemark.frontmatter, null, 2)} */}
//       {data.markdownRemark.frontmatter.banner && (
//         <Img
//           fluid={data.markdownRemark.frontmatter.banner.childImageSharp.fluid}
//         />
//       )}
//       <h1>{data.markdownRemark.frontmatter.title}</h1>
//       <p>
//         <Link to="/blog">Voltar para o blog</Link>
//       </p>
//       <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//     </div>
//   );
// };

// export const pageQuery = graphql`
//   query($id: String!) {
//     markdownRemark(frontmatter: { path: { eq: $id } }) {
//       frontmatter {
//         title
//         description
//         banner {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//       html
//     }
//   }
// `;

// export default Post;

// S>----------------------------------------------------------------------------------------<//

import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../componentes/Seo";
import Img from "gatsby-image";
import { DiscussionEmbed } from "disqus-react";

const Post = ({ data }) => {
  return (
    <div>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
      />
      {/* {JSON.stringify(data.markdownRemark.frontmatter, null, 2)} */}
      {data.markdownRemark.frontmatter.banner && (
        <Img
          fluid={data.markdownRemark.frontmatter.banner.childImageSharp.fluid}
        />
      )}
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>
        <Link to="/blog">Voltar para o blog</Link>
      </p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <DiscussionEmbed
        shortname="powersites-8"
        config={{
          identifier: data.markdownRemark.frontmatter.path,
          title: data.markdownRemark.frontmatter.title,
        }}
      />
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { path: { eq: $id } }) {
      frontmatter {
        path
        title
        description
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

export default Post;
