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
        this.prev = this.$main.$("li.prev");
        this.next = this.$main.$("li.next");
        this.pagination = this.$main.$(".current a");
        this.numberOfRows = this.$main.$$("tbody tr");
        this.updatedAlert = this.$main.$(".alert-message.warning");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEY7QUFFNUYsMkNBQTJDO0FBQzNDLDZDQUE4QztBQUU5QyxNQUFhLElBQUk7SUFpQmIsWUFBNkIsUUFBUSxjQUFDLENBQUMsT0FBTyxDQUFDO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVLLG9CQUFvQixDQUFDLElBQWE7O1lBQ3BDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUEsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekQsSUFBRyxDQUFBLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQUssSUFBSSxFQUFFO29CQUN0RCxPQUFPLE1BQU0saUJBQVMsQ0FBQyxTQUFTLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQy9GO2FBQ0E7UUFDTCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsS0FBYTs7WUFDMUIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNqQyxJQUFJLE9BQU8sR0FBRyxNQUFNLGlCQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUMxRCxJQUFHLE9BQU87Z0JBQUUsTUFBTSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDeEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7UUFDOUQsQ0FBQztLQUFBO0NBQ0o7QUFoREQsb0JBZ0RDIn0=