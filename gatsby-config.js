module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: __dirname + "/src/content",
        name: "pages",
      },
    },
    // "gatsby-transformer-remark",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 540,
            },
          },
        ],
      },
    },
  ],
};