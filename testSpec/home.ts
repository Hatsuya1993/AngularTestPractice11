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

    it('Check the name set in the column matches with the data inside', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let check = "ACE"
        await home.traverseComputerName(check)
        expect(await editComputer.computerName.getAttribute('value')).toBe(check)
    })

    it('Check the introduced value when its empty', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let check = "ACE"
        await home.traverseComputerName(check)
        expect(await editComputer.introduced.getAttribute('value')).toBe('')
    })

    it('Check the discontinued value when its empty', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let check = "ACE"
        await home.traverseComputerName(check)
        expect(await editComputer.discontinued.getAttribute('value')).toBe('')
    })

    it('Check if the delete button is clickable', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let check = "ACE"
        await home.traverseComputerName(check)
        let results = await ClickItem.Clickable(editComputer.delete)
        expect(results).toBeTruthy()
    })

    it('Check if the save button is clickable', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let check = "ACE"
        await home.traverseComputerName(check)
        let results = await ClickItem.Clickable(editComputer.save)
        expect(results).toBeTruthy()
    })

    it('Check if the cancel button is clickable', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let check = "ACE"
        await home.traverseComputerName(check)
        let results = await ClickItem.Clickable(editComputer.cancel)
        expect(results).toBeTruthy()
    })

    it('Check if the cancel button is clicked, user will return to homepage', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let check = "ACE"
        await home.traverseComputerName(check)
        let results = await ClickItem.Clickable(editComputer.cancel)
        if(results) await ClickItem.clickLink(editComputer.cancel)
        expect(await browser.getCurrentUrl()).toContain('computers')
    })

    it('Check when add new computer is clicked, all inputs are empty by default', async () => {
        let home = new Home()
        let editComputer = new EditComputer()
        let results = await ClickItem.Clickable(home.addNewComputer)
        if(results) await ClickItem.clickLink(home.addNewComputer)
        expect(await editComputer.computerName.getAttribute('value')).toBe('')
        expect(await editComputer.introduced.getAttribute('value')).toBe('')
        expect(await editComputer.discontinued.getAttribute('value')).toBe('')
        expect(await editComputer.company.getAttribute('value')).toBe('')
    })

})
