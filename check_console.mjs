import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => {
        if (msg.type() === 'error' || msg.type() === 'warn') {
            console.log(`[${msg.type()}]`, msg.text());
        }
    });
    page.on('pageerror', err => {
        console.log('[Page Error]', err.toString());
    });

    try {
        const response = await page.goto('http://localhost:3100', { waitUntil: 'load', timeout: 5000 });
        console.log('Page Navigated, response status:', response.status());
        await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
        console.log('Navigation error:', e.message);
    }

    await browser.close();
})();
