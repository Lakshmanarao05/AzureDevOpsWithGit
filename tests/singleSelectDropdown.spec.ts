import {test, expect, Locator} from '@playwright/test';
test('Single select drop down', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
//different ways to select option from drop down
//await page.locator('select#country').selectOption('India');
//await page.locator('#country').selectOption({value : 'uk'})
//await page.locator('#country').selectOption({label:'Germany'})
//await page.locator('#country').selectOption({index:5})

//check no options in the dropdown(count)
const dropdownOptions:Locator = page.locator('#country>option');
await expect(dropdownOptions).toHaveCount(10)

//check an option present in the dropdown
const optionstext:string[] = await dropdownOptions.allTextContents()
/* let contriesTex = [];
for(let vales of optionstext){
    let values = vales.trim()
    contriesTex.push(values);
}
console.log(contriesTex); */
const countriesNames:string[] = optionstext.map((index) => index.trim());
expect(countriesNames).toContain('India');
})