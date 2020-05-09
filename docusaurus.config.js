module.exports = {
  title: "Hala News",
  tagline: "A application for WordPress website",
  url: "https://stionic.github.io",
  baseUrl: "/halanews-document/",
  favicon: "img/favicon.ico",
  organizationName: "stionic", // Usually your GitHub org/user name.
  projectName: "halanews-document", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Hala News",
      logo: {
        alt: "Hala News Logo",
        src: "img/favicon.ico"
      },
      links: [
        { to: "docs/introduction", label: "Docs", position: "right" },
        {
          href: "https://stionic.com/blog",
          label: "Blog",
          position: "right"
        },
        { to: "docs/contact", label: "Help", position: "right" }
      ]
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Stionic`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ""
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
