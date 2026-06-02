import {test, expect, Locator} from "@playwright/test";
test('Verify sorted list of drop down', async ({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/');
const listOfElements:string[] = await page.locator('#animals option').allTextContents();
//const listOfElements:string[] = await page.locator('#colors option').allTextContents();
const optionsText:string[] = listOfElements.map(index => index.trim());
const originalList : string[] = [...optionsText];
const sortedList : string[] = [...optionsText].sort();
console.log("Original list : ", originalList);
console.log("Sorted list : ", sortedList)
expect(originalList).toEqual(sortedList)

});