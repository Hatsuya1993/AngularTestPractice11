import { ElementFinder, $ } from "protractor";

export class AddComputer {

    computerName : ElementFinder
    introduced : ElementFinder
    discontinued : ElementFinder
    save: ElementFinder
    cancel : ElementFinder
    company: ElementFinder
    create: ElementFinder
    errorName: ElementFinder

    constructor(private readonly $main = $("#main")) {
        this.computerName = this.$main.$("#name")
        this.introduced = this.$main.$("#introduced")
        this.discontinued = this.$main.$("#discontinued")
        this.save = this.$main.$("input[value*=Save]")
        this.cancel = this.$main.$("a[href*=computers]")
        this.company = this.$main.$("#company")
        this.create = this.$main.$("input[type='submit']")
        this.errorName = this.$main.$("#name+.help-inline")
    }

}