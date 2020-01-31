const puppeteer = require('puppeteer');
const URL_MENU = 'http://proap.ufabc.edu.br/nutricao-e-restaurantes-universitarios/cardapio-semanal';
const date = new Date();

//The html from PROGRAD increases the tableRow by 2, that means that mon = 2, tue = 4 and so on.. therefore:
const currentDay = 2 * date.getDay();

module.exports = {

// 1: lunch, 2: dinner, 3: garrisson, 4: dessert

async  scrapeMeal(meal_idx) {
   const browser = await puppeteer.launch()
   const page = await browser.newPage()
   await page.goto(URL_MENU)

   const [el] = await page.$x(`//*[@id="content-section"]/div[1]/div/table/tbody/tr[${currentDay}]/td[1]/ul[${meal_idx}]`)
   const text  = await  el.getProperty('innerText')
   const rawText = await text.jsonValue()
   console.log(rawText)

   browser.close()
}



}