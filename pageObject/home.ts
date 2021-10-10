import { $, $$, browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import { ClickItem } from "../helper/click"
import { globalData } from "../helper/global";

export class Home {

    website : any 
    title : ElementFinder
    computerName : ElementArrayFinder
    addNewComputer: ElementFinder
    alertMessage: ElementFinder
    search: ElementFinder
    filterButton: ElementFinder
    titleHeader: ElementFinder
    results: ElementFinder
    prev: ElementFinder
    next: ElementFinder
    pagination: ElementFinder
    numberOfRows: ElementArrayFinder

    constructor(private readonly $main = $("#main")) {
        this.website = browser.get("https://computer-database.gatling.io/computers")
        this.title = this.$main.$("a[href='/computers']")
        this.computerName = this.$main.$$("tbody tr td")
        this.addNewComputer = this.$main.$("#add")
        this.alertMessage = this.$main.$(".alert-message.warning")
        this.search = this.$main.$("#searchbox")
        this.filterButton = this.$main.$("#searchsubmit")
        this.titleHeader = this.$main.$("h1")
        this.results = this.$main.$(".well em")
        this.prev = this.$main.$("li.prev")
        this.next = this.$main.$("li.next")
        this.pagination = this.$main.$(".current a")
        this.numberOfRows = this.$main.$$("tbody tr")
    }

    async traverseComputerName(name : string) {
        for(let i = 0; i < await this.computerName.count(); i++) {
        if(await this.computerName.get(i).getText() === name) {
        return await ClickItem.clickLink(element(by.linkText(await this.computerName.get(i).getText()))) 
        }
        }
    }

    async searchData(input: string) {
        await this.search.sendKeys(input)
        let results = await ClickItem.Clickable(this.filterButton)
        if(results) await ClickItem.clickLink(this.filterButton)
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
    }
}