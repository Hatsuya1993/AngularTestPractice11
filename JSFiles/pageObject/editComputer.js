"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditComputer = void 0;
const protractor_1 = require("protractor");
class EditComputer {
    constructor($main = protractor_1.$("#main")) {
        this.$main = $main;
        this.computerName = this.$main.$("#name");
        this.introduced = this.$main.$("#introduced");
        this.discontinued = this.$main.$("#discontinued");
        this.delete = this.$main.$("input[value*='Delete']");
        this.save = this.$main.$("input[value*=Save]");
        this.cancel = this.$main.$("a[href*=computers]");
        this.company = this.$main.$("#company");
    }
}
exports.EditComputer = EditComputer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdENvbXB1dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9lZGl0Q29tcHV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThDO0FBRzlDLE1BQWEsWUFBWTtJQVVyQixZQUE2QixRQUFRLGNBQUMsQ0FBQyxPQUFPLENBQUM7UUFBbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7Q0FFSjtBQXBCRCxvQ0FvQkMifQ==