---
path: "/blog/minha-pagina"
title: "Minha página - com foto!"
description: "Bem vindo a minha página."
categoria: "teste"
price: 10
banner: "./image1.jpg"
---

# Minha página

Este é um parágrafo.

## Sub-título

Este é um outro parágrafico.

![Minha foto](./image1.jpg)

**Lista**

1. First item
2. Second item
3. Third item
4. Fourth item

**Outra lista**

- First item
- Second item
- Third item
- Fourth item

**Código React**

```
import React from "react";
import { graphql } from "gatsby";

const Post = ({ data }) => {
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { path: { eq: $id } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`;

export default Post;
```
