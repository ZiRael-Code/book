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
          { text: "Tools You Need", link: "/guide/tools-you-need" },
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
      },
      // Add more// Part II — Security & Auth (Bare Essentials)
{
  text: "Part II - Security & Auth (Bare Essentials)",
  collapsed: false,
  items: [
    { text: "5. Users & Passwords (No Framework)", link: "/part-2-auth/05-users-passwords" },
    { text: "6. Login", link: "/part-2-auth/06-login" },
    { text: "6.5. Sessions & JWT (Access / Refresh)", link: "/part-2-auth/6.5-sessions-jwt" },
    { text: "7. Protecting Routes (Auth Middleware)", link: "/part-2-auth/07-protecting-routes" }
  ]
},

// Part III — PostgreSQL with Raw SQL
{
  text: "Part III - PostgreSQL with Raw SQL",
  collapsed: true,
  items: [
    { text: "8. Postgres Setup & Connections", link: "/part-3-postgres/08-postgres-setup" },
    { text: "9. SQL Migrations (No ORM)", link: "/part-3-postgres/09-sql-migrations" },
    { text: "10. Transactions & Atomicity", link: "/part-3-postgres/10-transactions" }
  ]
},

// Part IV — Building AtopBank (Core Product)
{
  text: "Part IV - Building AtopBank",
  collapsed: true,
  items: [
    { text: "11. KYC Flow (Signup → Pending → Approved)", link: "/part-4-atopbank/11-kyc-flow" },
    { text: "12. Accounts & Wallets", link: "/part-4-atopbank/12-accounts-wallets" },
    { text: "13. Payees & Send Money", link: "/part-4-atopbank/13-payees-send-money" },
    { text: "14. Cards (Virtual, Simulated)", link: "/part-4-atopbank/14-cards" },
    { text: "15. Statements & Reporting", link: "/part-4-atopbank/15-statements" },
    { text: "16. Notifications (In-App)", link: "/part-4-atopbank/16-notifications" },
    { text: "17. Admin KYC Dashboard", link: "/part-4-atopbank/17-admin" },
    { text: "18. Settings (Profile, Security, Sessions)", link: "/part-4-atopbank/18-settings" },
    
  ]
},

// Part V — Testing From the Ground Up
{
  text: "Part V - Testing From the Ground Up",
  collapsed: true,
  items: [
    { text: "19. Tests with node:test", link: "/part-5-testing/19-tests" },
  ]
},

// Part VI — Observability & Docs
{
  text: "Part VI - Observability & Docs",
  collapsed: true,
  items: [
    { text: "20. Health, Readiness & Structured Logs", link: "/part-6-obs-docs/20-health-ready-logs" },
    { text: "21. Postman Collection & Docs", link: "/part-6-obs-docs/21-postman" }
  ]
},

// Part VII — Docker & CI
{
  text: "Part VII - Docker & CI",
  collapsed: true,
  items: [
    { text: "22. Containerizing API + DB", link: "/part-7-docker-ci/22-docker" }
  ]
},

// Part VIII — Security & Hardening
{
  text: "Part VIII - Security & Hardening",
  collapsed: true,
  items: [
    { text: "23. Hardening Checklist", link: "/part-8-security/23-hardening-checklist" },
    { text: "24. Audit Logs & Safe Defaults", link: "/part-8-security/24-audit-logs" }
  ]
}

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
