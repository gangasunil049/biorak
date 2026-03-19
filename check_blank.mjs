import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3100', { waitUntil: 'networkidle0' });
    const html = await page.evaluate(() => document.body.innerHTML);
    console.log('HTML Length:', html.length);
    if (html.length < 500) {
        console.log('Very short HTML:', html);
    }

    await browser.close();
})();
