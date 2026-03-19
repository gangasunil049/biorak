const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => {
        console.log(`[Browser Console ${msg.type()}]`, msg.text());
    });
    page.on('pageerror', err => {
        console.log('[Browser Error]', err.toString());
    });

    await page.goto('http://localhost:3100', { waitUntil: 'networkidle0' });

    console.log('Page loaded successfully? (if no errors before this)');
    await browser.close();
})();
