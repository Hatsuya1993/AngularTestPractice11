import { browser } from "protractor";
import { Home } from "../pageObject/home";
import { ClickItem } from "../helper/click"
import { EditComputer } from "../pageObject/editComputer"
import { AddComputer } from "../pageObject/addComputer";
import { globalData } from "../helper/global"


describe('Test computer website', () => {

    beforeEach(async() => {
        browser.waitForAngularEnabled(false);
        let home = new Home()
        await home.website
        browser.manage().window().maximize()
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"])
    })

    afterEach(async() => {
        await browser.close()
    })

    it('Check if the url is correct', async() => {
        expect(await browser.getCurrentUrl()).toContain('computers')
    })

    it('Check when the title is clicked will redirect to the home page', async () => {
        let home = new Home()
        let results = await ClickItem.Clickable(home.title)
        if (results) await ClickItem.clickLink(home.title)
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

    it('Check when add new computer is clicked, url is correct', async () => {
        let home = new Home()
        let results = await ClickItem.Clickable(home.addNewComputer)
        if(results) await ClickItem.clickLink(home.addNewComputer)
        expect(await browser.getCurrentUrl()).toContain('new')
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

    it('When no input is given to the computer name, error will appear', async () => {
        let home = new Home()
        let addComputer = new AddComputer()
        let results = await ClickItem.Clickable(home.addNewComputer)
        if(results) await ClickItem.clickLink(home.addNewComputer)
        let resultsCreate = await ClickItem.Clickable(addComputer.create)
        if(resultsCreate) await ClickItem.clickLink(addComputer.create)
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        expect(await addComputer.errorName.isDisplayed()).toBeTruthy()
    })

    it('When conputer name is added and create is clicked, alert will appear', async () => {
        let home = new Home()
        let addComputer = new AddComputer()
        let results = await ClickItem.Clickable(home.addNewComputer)
        if(results) await ClickItem.clickLink(home.addNewComputer)
        await addComputer.computerName.sendKeys('Test')
        await addComputer.create.click()
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        expect(await home.alertMessage.isDisplayed()).toBeTruthy()
    })

    it('When computer name is added and cancel is clicked, retrun to homepage', async () => {
        let home = new Home()
        let addComputer = new AddComputer()
        let results = await ClickItem.Clickable(home.addNewComputer)
        if(results) await ClickItem.clickLink(home.addNewComputer)
        await addComputer.computerName.sendKeys('Test')
        await addComputer.cancel.click()
        expect(await browser.getCurrentUrl()).toContain('computers')
    })

    it('When a non-existent computer name is searched, the link will contain the searched name', async () => {
        let home = new Home()
        const test = "testData1"
        await home.searchData(test)
        expect(await browser.getCurrentUrl()).toContain(test)
    })

    it('When a non-existant computer is searched, no computer will be displayed', async () => {
        let home = new Home()
        const test = "testData1"
        await home.searchData(test)
        expect(await home.titleHeader.getText()).toBe('No computer')
    })

    it('When a non-existant computer is searched, results will display nothing to display', async () => {
        let home = new Home()
        const test = "testData1"
        await home.searchData(test)
        expect(await home.results.getText()).toBe('Nothing to display')
    })

    it('When there is no need for pagination, the next and previous button will be disabled', async () => {
        let home = new Home()
        const test = "testData1"
        await home.searchData(test)
        expect(await home.prev.getAttribute('class')).toContain("disabled")
        expect(await home.next.getAttribute('class')).toContain("disabled")
    })

    fit('When there is nothing to display, the pagination should be displayed this way', async () => {
        let home = new Home()
        const test = "testData1"
        await home.searchData(test)
        expect(await home.pagination.getText()).toBe("Displaying 1 to 0 of 0")
    })

})
