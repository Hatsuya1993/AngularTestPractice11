import { browser, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import { globalData } from "../helper/global"
import { ExpectedConditions} from 'protractor';

let EC = ExpectedConditions

export  class ClickItem {

    static async clickLink(data : ElementFinder) {
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        await browser.wait(EC.presenceOf(data), globalData["WAIT_TIME"]["WAIT_LONG"])
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        await browser.wait(EC.visibilityOf(data), globalData["WAIT_TIME"]["WAIT_LONG"])
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        await data.click()
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
    }
}