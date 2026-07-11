import { chromium } from 'playwright-core';

const [url, out, width] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({
  viewport: { width: Number(width), height: 900 },
  deviceScaleFactor: 1,
  colorScheme: 'dark',
});
await page.goto(url, { waitUntil: 'networkidle' });
// let fade-up animations settle
await page.evaluate(() => {
  document.querySelectorAll('.fade-up').forEach((el) => el.classList.add('in-view'));
});
await page.waitForTimeout(700);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log('wrote', out);
