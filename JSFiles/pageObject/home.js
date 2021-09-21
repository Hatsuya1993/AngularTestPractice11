"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
class Home {
    constructor() {
        this.website = protractor_1.browser.get("https://computer-database.gatling.io/computers");
        this.title = protractor_1.element(protractor_1.by.linkText("Computer database"));
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Y7QUFJeEYsTUFBYSxJQUFJO0lBQWpCO1FBRUksWUFBTyxHQUFTLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7UUFDN0UsVUFBSyxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0lBR3JFLENBQUM7Q0FBQTtBQU5ELG9CQU1DIn0=