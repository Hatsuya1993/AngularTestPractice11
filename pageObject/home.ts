import { $, $$, browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import { ClickItem } from "../helper/click"

export class Home {

    website : any 
    title : ElementFinder
    computerName : ElementArrayFinder

    constructor() {
        this.website = browser.get("https://computer-database.gatling.io/computers")
        this.title = element(by.linkText("Computer database"))
        this.computerName = $$("tbody tr td")
    }

    async traverseComputerName(name : string) {
        for(let i = 0; i < await this.computerName.count(); i++) {
        if(await this.computerName.get(i).getText() === name) {
        return await ClickItem.clickLink(element(by.linkText(await this.computerName.get(i).getText()))) 
        }
        }
    }
}