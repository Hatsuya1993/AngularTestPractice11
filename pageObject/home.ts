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

    constructor(private readonly $main = $("#main")) {
        this.website = browser.get("https://computer-database.gatling.io/computers")
        this.title = this.$main.element(by.linkText("Computer database"))
        this.computerName = this.$main.$$("tbody tr td")
        this.addNewComputer = this.$main.$("#add")
        this.alertMessage = this.$main.$(".alert-message.warning")
        this.search = this.$main.$("#searchbox")
        this.filterButton = this.$main.$("#searchsubmit")
        this.titleHeader = this.$main.$("h1")
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