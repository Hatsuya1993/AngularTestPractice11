import { ElementFinder, $ } from "protractor";
import { threadId } from "worker_threads";

export class EditComputer {

    computerName : ElementFinder
    introduced : ElementFinder
    discontinued : ElementFinder

    constructor() {
        this.computerName = $("#name")
        this.introduced = $("#introduced")
        this.discontinued = $("#discontinued")
    }

}