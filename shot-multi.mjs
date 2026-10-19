import { chromium } from "playwright";

const sites = [
  // EduPulse
  { url: "https://edupulse-indonesia.vercel.app/#cari-dosen", name: "edupulse/cari-dosen", dir: "C:/Users/rizky/AppData/Local/Temp/edupulse/docs" },
  { url: "https://edupulse-indonesia.vercel.app/#tentang", name: "edupulse/tentang", dir: "C:/Users/rizky/AppData/Local/Temp/edupulse/docs" },
  { url: "https://edupulse-indonesia.vercel.app/#kontak", name: "edupulse/kontak", dir: "C:/Users/rizky/AppData/Local/Temp/edupulse/docs" },
  // AkuMalazzz
  { url: "https://aku-malazzz.vercel.app/", name: "akumalazzz/home", dir: "C:/Users/rizky/AppData/Local/Temp/akumalazzz/docs" },
  { url: "https://aku-malazzz.vercel.app/#tentang", name: "akumalazzz/tentang", dir: "C:/Users/rizky/AppData/Local/Temp/akumalazzz/docs" },
  { url: "https://aku-malazzz.vercel.app/#konten", name: "akumalazzz/konten", dir: "C:/Users/rizky/AppData/Local/Temp/akumalazzz/docs" },
  { url: "https://aku-malazzz.vercel.app/#sosial", name: "akumalazzz/sosial", dir: "C:/Users/rizky/AppData/Local/Temp/akumalazzz/docs" },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const s of sites) {
  await page.goto(s.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  const filename = s.name.split("/")[1] + ".png";
  await page.screenshot({ path: `${s.dir}/${filename}` });
  console.log("done:", s.name);
}

await browser.close();
console.log("all done");
