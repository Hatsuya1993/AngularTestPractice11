import { $, browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import { ClickItem } from "../helper/click"

export class Home {

    website : any = browser.get("https://computer-database.gatling.io/computers")
    title : ElementFinder = element(by.linkText("Computer database"))
    

}