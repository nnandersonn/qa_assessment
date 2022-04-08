
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking Draw will display choices header displaying Choose 2', async ()=> {
    const drawButton = await driver.findElement(By.id('draw'))
    await  drawButton.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayedChoices = await choices.isDisplayed()
    expect(displayedChoices).toBe(true)
})

test('clicking Draw will then hide draw button', async ()=> {
    const drawButton = await driver.findElement(By.id('draw'))
    await  drawButton.click()
    const drawButtonClasses = await drawButton.getCssValue('display')
    expect(drawButtonClasses).toContain('none')
})