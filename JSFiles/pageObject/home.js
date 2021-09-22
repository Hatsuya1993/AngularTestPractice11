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
    constructor() {
        this.website = protractor_1.browser.get("https://computer-database.gatling.io/computers");
        this.title = protractor_1.element(protractor_1.by.linkText("Computer database"));
        this.computerName = protractor_1.$$("tbody tr td");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEY7QUFFNUYsMkNBQTJDO0FBRTNDLE1BQWEsSUFBSTtJQU1iO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUssb0JBQW9CLENBQUMsSUFBYTs7WUFDcEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6RCxJQUFHLENBQUEsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBSyxJQUFJLEVBQUU7b0JBQ3RELE9BQU8sTUFBTSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDL0Y7YUFDQTtRQUNMLENBQUM7S0FBQTtDQUNKO0FBbkJELG9CQW1CQyJ9