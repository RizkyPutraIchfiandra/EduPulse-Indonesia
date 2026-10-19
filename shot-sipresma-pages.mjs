import { chromium } from "playwright";

const pages = [
  { url: "https://sipresma-ucn.vercel.app/register", name: "register" },
  { url: "https://sipresma-ucn.vercel.app/scan", name: "scan" },
  { url: "https://sipresma-ucn.vercel.app/login", name: "login" },
  { url: "https://sipresma-ucn.vercel.app/dashboard", name: "dashboard" },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const p of pages) {
  await page.goto(p.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `C:/Users/rizky/AppData/Local/Temp/sipresma/docs/${p.name}.png` });
  console.log("done:", p.name);
}

await browser.close();
console.log("all done");
