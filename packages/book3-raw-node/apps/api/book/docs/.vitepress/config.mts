import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AtopBank Backend Book",
  description: "Raw Node.js + PostgreSQL from first principles",
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: "AtopBank Book",

    nav: [
      { text: "Start", link: "/read-me-first" },
      { text: "Guide", link: "/guide/repo-structure" }
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Read Me First - What Raw Means", link: "/read-me-first" },
          { text: "Repo Structure", link: "/guide/repo-structure" }
        ]
      },
      {
        text: "Part I - HTTP From First Principles",
        collapsed: false,
        items: [
          { text: "1. The Smallest Useful Server", link: "/part-1-http/01-smallest-server" },
          { text: "2. Routing Without a Framework", link: "/part-1-http/02-routing" },
          { text: "3. Bodies, Validation, Errors", link: "/part-1-http/03-bodies-validation-errors" },
          { text: "4. Config, Logging, Envs", link: "/part-1-http/04-config-logging-envs" }
        ]
      }
      // Add more parts later
    ],

    outline: [2, 3],
    docFooter: { prev: "Previous", next: "Next" },

    footer: {
      message: "Built with raw fundamentals. Ships like a real API.",
      copyright: "© AtopBank Book"
    },

    search: {
      provider: "local"
    }
  }
});
