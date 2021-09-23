import { ElementFinder, $ } from "protractor";

export class EditComputer {

    computerName : ElementFinder

    constructor() {
        this.computerName = $("#name")
    }

}