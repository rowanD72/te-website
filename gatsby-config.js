require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.tranquilessencecandlecompany.com",
    title: "tranquil essence candle company",
    icon: "./src/images/tranquil_ess_logo_transparent.png",
    description: "Homemade candles for your home, office, or spa. We make candles for all occassions.",
    author: "David Rowan III"
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.GATSBY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        apiKey: process.env.GATSBY_ADMIN_API_KEY,
        shopifyConnections: ["orders", "locations"],
        downloadImages: true
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
