 const puppeteer = require("puppeteer");
const path = require('path');
let browser;
let page;
            
beforeAll(async () => {
   browser = await puppeteer.launch()
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./src/index.html'))
});

afterAll(async () => {
    await browser.close()
}); 



describe("1-Sass should be used .", () => {
    
    test("styles/main.css dir should be compiled ", async () => {
        const fs = require('fs');
        const dir = fs.readFileSync(__dirname + "/../src/styles/main.css", "utf8");
        expect(dir).toBeTruthy();
    });
    })   
    

describe("2.Nesting and variables .", () => {

    test("variables should be used ", async () => {
        const fs = require('fs');
        const dir = fs.readFileSync(__dirname + "/../src/scss/variables/variables.scss", "utf8");
        expect(dir.includes("$primary-color: ") || dir.includes("$primary-color: ")).toBeTruthy();  
        expect(dir.includes("$secondary-color") || dir.includes("$secondary-color")).toBeTruthy();  
        });
    
     test("Nesting should be used", async () => {
        const nesting = await page.$eval('ul>li', el => getComputedStyle(el).padding);
          expect(nesting).toBe('16px');
        })      
    });

describe("3-design for mobil first  .", () => {
    test("$desktop screen should be 1025px ", async () => {
        const fs = require('fs');
        const  variablesDir= fs.readFileSync(__dirname + "/../src/scss/variables/variables.scss", "utf8");
          expect(variablesDir.includes("$desktop: 1025px;") || variablesDir.includes("$desktop: 1025px;")).toBeTruthy();  
               })    

    test("$tablet screen should be 768px ", async () => {
        const fs = require('fs');
        const  variablesDir= fs.readFileSync(__dirname + "/../src/scss/variables/variables.scss", "utf8");
            expect(variablesDir.includes("$tablet: 768px;") || variablesDir.includes("$tablet: 768px;")).toBeTruthy();  
                })   

    test("@media with min-width for $tablet should be used ", async () => {
      const fs = require('fs');
      const dir = fs.readFileSync(__dirname + "/../src/scss/layout/_layout.scss", "utf8");
        expect(dir.includes("@media screen and (min-width: $tablet) ") || dir.includes("@media screen and (min-width: $tablet) ")).toBeTruthy();  
             })    
        
    test("@media with min-width for $desktop should be used ", async () => {
        const fs = require('fs');
        const dir = fs.readFileSync(__dirname + "/../src/scss/layout/_layout.scss", "utf8");
            expect(dir.includes("@media screen and (min-width: $desktop) ") || dir.includes("@media screen and (min-width: $desktop) ")).toBeTruthy();
             })          
         })  


 describe("4-Colors for styling.", () => {
   
     test("Card background color should be  #e0ddb2 ", async () => {
        const nesting = await page.$eval('.card', el => getComputedStyle(el).backgroundColor);
        expect(nesting).toBe('rgb(224, 221, 178)');
            
             })    
        
     test("Card and aside borders should be #dad6ab", async () => {
             const logoBg = await page.$eval('.card,aside', el => getComputedStyle(el).border);
            expect(logoBg).toBe('2px solid rgb(224, 221, 178)');
             })
          
    test("Color used for nav and footer should #016690 ", async () => {
             const logoBg = await page.$eval('nav ,footer', el => getComputedStyle(el).color);
             expect(logoBg).toBe('rgb(33, 37, 41)');
             })         
         })