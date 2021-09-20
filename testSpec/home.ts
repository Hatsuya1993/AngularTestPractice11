import { browser } from "protractor";
import { Home } from "../pageObject/home";

describe('Test computer website', () => {

    beforeEach(async() => {
        browser.waitForAngularEnabled(false);
        let home = new Home()
        await home.website
        browser.manage().window().maximize()
        await browser.sleep(5000)
    })

    afterEach(async() => {
        await browser.close()
    })

    it('Check if the url is correct', async() => {
        expect(await browser.getCurrentUrl()).toContain('computers')
    })

})
