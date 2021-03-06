module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "NFT_website",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
