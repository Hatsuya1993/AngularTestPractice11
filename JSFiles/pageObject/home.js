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
const global_1 = require("../helper/global");
class Home {
    constructor($main = protractor_1.$("#main")) {
        this.$main = $main;
        this.website = protractor_1.browser.get("https://computer-database.gatling.io/computers");
        this.title = this.$main.element(protractor_1.by.linkText("Computer database"));
        this.computerName = this.$main.$$("tbody tr td");
        this.addNewComputer = this.$main.$("#add");
        this.alertMessage = this.$main.$(".alert-message.warning");
        this.search = this.$main.$("#searchbox");
        this.filterButton = this.$main.$("#searchsubmit");
        this.titleHeader = this.$main.$("h1");
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
    searchData(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.search.sendKeys(input);
            let results = yield click_1.ClickItem.Clickable(this.filterButton);
            if (results)
                yield click_1.ClickItem.clickLink(this.filterButton);
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEY7QUFFNUYsMkNBQTJDO0FBQzNDLDZDQUE4QztBQUU5QyxNQUFhLElBQUk7SUFXYixZQUE2QixRQUFRLGNBQUMsQ0FBQyxPQUFPLENBQUM7UUFBbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFSyxvQkFBb0IsQ0FBQyxJQUFhOztZQUNwQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pELElBQUcsQ0FBQSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFLLElBQUksRUFBRTtvQkFDdEQsT0FBTyxNQUFNLGlCQUFTLENBQUMsU0FBUyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUMvRjthQUNBO1FBQ0wsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEtBQWE7O1lBQzFCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDakMsSUFBSSxPQUFPLEdBQUcsTUFBTSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDMUQsSUFBRyxPQUFPO2dCQUFFLE1BQU0saUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3hELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1FBQzlELENBQUM7S0FBQTtDQUNKO0FBcENELG9CQW9DQyJ9