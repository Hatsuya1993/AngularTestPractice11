"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
const click_1 = require("../helper/click");
class Home {
    constructor($main = protractor_1.$("#main")) {
        this.$main = $main;
        this.website = protractor_1.browser.get("https://computer-database.gatling.io/computers");
        this.title = this.$main.element(protractor_1.by.linkText("Computer database"));
        this.computerName = this.$main.$$("tbody tr td");
        this.addNewComputer = this.$main.$("#add");
        this.alertMessage = this.$main.$(".alert-message.warning");
    }
    traverseComputerName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < (yield this.computerName.count()); i++) {
                if ((yield this.computerName.get(i).getText()) === name) {
                    return yield click_1.ClickItem.clickLink(protractor_1.element(protractor_1.by.linkText(yield this.computerName.get(i).getText())));
                }
            }
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEY7QUFFNUYsMkNBQTJDO0FBRTNDLE1BQWEsSUFBSTtJQVFiLFlBQTZCLFFBQVEsY0FBQyxDQUFDLE9BQU8sQ0FBQztRQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVLLG9CQUFvQixDQUFDLElBQWE7O1lBQ3BDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUEsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekQsSUFBRyxDQUFBLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQUssSUFBSSxFQUFFO29CQUN0RCxPQUFPLE1BQU0saUJBQVMsQ0FBQyxTQUFTLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQy9GO2FBQ0E7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQXZCRCxvQkF1QkMifQ==