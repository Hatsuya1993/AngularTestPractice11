"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddComputer = void 0;
const protractor_1 = require("protractor");
class AddComputer {
    constructor($main = protractor_1.$("#main")) {
        this.$main = $main;
        this.computerName = this.$main.$("#name");
        this.introduced = this.$main.$("#introduced");
        this.discontinued = this.$main.$("#discontinued");
        this.save = this.$main.$("input[value*=Save]");
        this.cancel = this.$main.$("a[href*=computers]");
        this.company = this.$main.$("#company");
        this.create = this.$main.$("input[type='submit']");
        this.errorName = this.$main.$("#name+.help-inline");
    }
}
exports.AddComputer = AddComputer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29tcHV0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2FkZENvbXB1dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE4QztBQUU5QyxNQUFhLFdBQVc7SUFXcEIsWUFBNkIsUUFBUSxjQUFDLENBQUMsT0FBTyxDQUFDO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDdkQsQ0FBQztDQUVKO0FBdEJELGtDQXNCQyJ9