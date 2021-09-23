import { browser } from "protractor";
import { Home } from "../pageObject/home";
import { ClickItem } from "../helper/click"
import { EditComputer } from "../pageObject/editComputer"

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

    it('Check when the title is clicked will redirect to the home page', async () => {
        let home = new Home()
        await ClickItem.clickLink(home.title)
        expect(await browser.getCurrentUrl()).toContain('computers')
    })

    it('Check when the computer name is clicked, it moved to another page', async () => {
        let home = new Home()
        await home.traverseComputerName("ACE")
        expect(await (await browser.getCurrentUrl()).split("/")[await (await browser.getCurrentUrl()).split("/").length -1 ]).toBeGreaterThan(0)
    })

    fit('Check the name set in the column matches with the data inside', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let check = "ACE"
        await home.traverseComputerName(check)
        expect(await editComputer.computerName.getAttribute('value')).toBe(check)
    })

})
