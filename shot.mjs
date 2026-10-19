import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("https://edupulse-indonesia.vercel.app/", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

const height = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < height; y += 600) {
  await page.evaluate((v) => window.scrollTo(0, v), y);
  await page.waitForTimeout(180);
}
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);

await page.screenshot({ path: "docs/preview-full.png", fullPage: true });

await page.setViewportSize({ width: 1280, height: 630 });
await page.waitForTimeout(400);
await page.screenshot({ path: "public/og.png" });

await browser.close();
console.log("done, scrollHeight:", height);
