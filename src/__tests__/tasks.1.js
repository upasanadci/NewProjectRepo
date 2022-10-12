const puppeteer = require("puppeteer");
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true })
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./src/index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('css', () => {
    it("Should generate compiled css", async () => {
        setTimeout(() => {
            try {
                execSync('npm i && npm run build:styles');
            } catch (error) {}
        })
        const cssStylesheet = fs
            .readFileSync(path.resolve('./src/styles/main.css'))
            .toString("utf-8");
        expect(cssStylesheet).toContain("@media");
    });
});

describe('Nav', () => {
    it("anchor tags inside `nav` should have a color of #016690", async () => {
        const nav = await page.$eval('nav a', el => getComputedStyle(el).color);
        expect(nav).toBe('rgb(14, 116, 158)');
    });
});

describe('Card', () => {
    it("`.card` should be of #e0ddb2 background color", async () => {
        const cards = await page.$eval('.card', el => getComputedStyle(el).backgroundColor);
        expect(cards).toBe('rgb(224, 221, 178)');
    });
});
describe('Card and aside', () => {
    it("`.card and aside` should have a border color of #dad6ab", async () => {
        const cardsAndAside = await page.$eval('.card, aside', el => getComputedStyle(el).border);
        expect(cardsAndAside).toMatch(/rgb\(224, 221, 178\)/);
    });
});

describe('Images', () => {
    it("Page should display images from the images folder using css `background-image` property", async () => {
        const images = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('background-image')));
        expect(images.some(e => e.match(/images/))).toBe(true);
    });
});

describe('Footer', () => {
    it("`footer` should have a background color of #0e749e", async () => {
        const footerAndNav = await page.$eval('footer', el => getComputedStyle(el).backgroundColor);
        expect(footerAndNav).toBe('rgb(14, 116, 158)');
    });
});

describe('Medium Screens - `.card` class', () => {
    it("On 768px Breakpoint and and above cards should have their `flex-flow` property set to `nowrap`", async () => {
        await page.setViewport({
            width: 780,
            height: 1024
        });
        const cards = await page.$eval('.card', el => getComputedStyle(el).flexFlow);
        expect(cards).toMatch(/nowrap/);
    });
});

describe('Large Screens - Parent container `.cards`', () => {
    it("On 1025px Breakpoint and and above `.cards` container should have its `justify-content` property set to `center`", async () => {
        await page.setViewport({
            width: 1030,
            height: 1024
        });
        const cards = await page.$eval('.cards', el => getComputedStyle(el).justifyContent);
        expect(cards).toMatch(/center/);
    });
});