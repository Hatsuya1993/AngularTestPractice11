import { ElementFinder, $ } from "protractor";

export class EditComputer {

    computerName : ElementFinder
    introduced : ElementFinder
    discontinued : ElementFinder
    delete: ElementFinder
    save: ElementFinder
    cancel : ElementFinder
    company: ElementFinder
    errorMessage: ElementFinder

    constructor(private readonly $main = $("#main")) {
        this.computerName = this.$main.$("#name")
        this.introduced = this.$main.$("#introduced")
        this.discontinued = this.$main.$("#discontinued")
        this.delete = this.$main.$("input[value*='Delete']")
        this.save = this.$main.$("input[value*=Save]")
        this.cancel = this.$main.$("a[href*=computers]")
        this.company = this.$main.$("#company")
        this.errorMessage = this.$main.$("span.help-inline")
    }

    

}