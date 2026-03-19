import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3100', { waitUntil: 'networkidle0' });

    const metrics = await page.evaluate(() => {
        const el = document.querySelector('.circular-gallery');
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { width: rect.width, height: rect.height, top: rect.top, left: rect.left };
    });

    console.log('Gallery Metrics:', metrics);

    await browser.close();
})();
