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
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        swCustom: require.resolve("./src/sw.js"),
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/halanews-document/img/halanews.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/halanews-document/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/halanews-document/img/halanews.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/halanews-document/img/halanews.svg',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/halanews-document/img/halanews.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ]
  ]
};
