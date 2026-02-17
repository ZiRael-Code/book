import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = "http://localhost:4173"; // vitepress preview
const OUT = path.join(process.cwd(), "pdf");
fs.mkdirSync(OUT, { recursive: true });

const pages = [
  "/",
  "/read-me-first",
  "/guide/tools-you-need",
  "/guide/repo-structure",
  "/part-1-http/01-smallest-server",
  "/part-1-http/02-routing",
  "/part-1-http/03-bodies-validation-errors",
  "/part-1-http/04-config-logging-envs",
  "/part-2-auth/05-users-passwords",
  "/part-2-auth/06-login",
  "/part-2-auth/6.5-sessions-jwt",
  "/part-2-auth/07-protecting-routes",
  "/part-3-postgres/08-postgres-setup",
  "/part-3-postgres/09-sql-migrations",
  "/part-3-postgres/10-transactions",
  "/part-4-atopbank/11-kyc-flow",
  "/part-4-atopbank/12-accounts",
  "/part-4-atopbank/13-payees-send-money",
  "/part-4-atopbank/14-cards",
  "/part-4-atopbank/15-statements",
  "/part-4-atopbank/16-notifications",
  "/part-4-atopbank/17-admin",
  "/part-4-atopbank/18-settings",
  "/part-5-testing/19-tests",
  "/part-6-obs-docs/20-health-ready-logs",
  "/part-6-obs-docs/21-postman",
  "/part-7-docker/22-docker",
  "/part-8-security/23-hardening-checklist",
  "/part-8-security/24-audit-logs",
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const p of pages) {
  await page.goto(BASE + p, { waitUntil: "networkidle" });

  await page.addStyleTag({
    content: `
      .VPNav, .VPSidebar, .VPFooter { display: none !important; }
      .VPContent { padding-left: 0 !important; }
      .VPDoc { max-width: 900px !important; }
    `,
  });

  const file = path.join(
    OUT,
    p === "/" ? "00-home.pdf" : p.replaceAll("/", "_").slice(1) + ".pdf"
  );

  await page.pdf({
    path: file,
    format: "A4",
    printBackground: true,
  });

  console.log("Saved:", file);
}

await browser.close();
console.log("Done.");
