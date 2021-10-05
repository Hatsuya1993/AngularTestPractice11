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
        this.title = this.$main.$("a[href='/computers']");
        this.computerName = this.$main.$$("tbody tr td");
        this.addNewComputer = this.$main.$("#add");
        this.alertMessage = this.$main.$(".alert-message.warning");
        this.search = this.$main.$("#searchbox");
        this.filterButton = this.$main.$("#searchsubmit");
        this.titleHeader = this.$main.$("h1");
        this.results = this.$main.$(".well em");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEY7QUFFNUYsMkNBQTJDO0FBQzNDLDZDQUE4QztBQUU5QyxNQUFhLElBQUk7SUFZYixZQUE2QixRQUFRLGNBQUMsQ0FBQyxPQUFPLENBQUM7UUFBbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUUzQyxDQUFDO0lBRUssb0JBQW9CLENBQUMsSUFBYTs7WUFDcEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6RCxJQUFHLENBQUEsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBSyxJQUFJLEVBQUU7b0JBQ3RELE9BQU8sTUFBTSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDL0Y7YUFDQTtRQUNMLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxLQUFhOztZQUMxQixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2pDLElBQUksT0FBTyxHQUFHLE1BQU0saUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQzFELElBQUcsT0FBTztnQkFBRSxNQUFNLGlCQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN4RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtRQUM5RCxDQUFDO0tBQUE7Q0FDSjtBQXZDRCxvQkF1Q0MifQ==