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
const protractor_1 = require("protractor");
const home_1 = require("../pageObject/home");
const click_1 = require("../helper/click");
const editComputer_1 = require("../pageObject/editComputer");
const addComputer_1 = require("../pageObject/addComputer");
const global_1 = require("../helper/global");
describe('Test computer website', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let home = new home_1.Home();
        yield home.website;
        protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    it('Check if the url is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('computers');
    }));
    it('Check when the title is clicked will redirect to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield click_1.ClickItem.Clickable(home.title);
        if (results)
            yield click_1.ClickItem.clickLink(home.title);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('computers');
    }));
    it('Check when the computer name is clicked, it moved to another page', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.traverseComputerName("ACE");
        expect(yield (yield protractor_1.browser.getCurrentUrl()).split("/")[(yield (yield protractor_1.browser.getCurrentUrl()).split("/").length) - 1]).toBeGreaterThan(0);
    }));
    it('Check the name set in the column matches with the data inside', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        expect(yield editComputer.computerName.getAttribute('value')).toBe(check);
    }));
    it('Check the introduced value when its empty', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        expect(yield editComputer.introduced.getAttribute('value')).toBe('');
    }));
    it('Check the discontinued value when its empty', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        expect(yield editComputer.discontinued.getAttribute('value')).toBe('');
    }));
    it('Check if the delete button is clickable', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        let results = yield click_1.ClickItem.Clickable(editComputer.delete);
        expect(results).toBeTruthy();
    }));
    it('Check if the save button is clickable', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        let results = yield click_1.ClickItem.Clickable(editComputer.save);
        expect(results).toBeTruthy();
    }));
    it('Check if the cancel button is clickable', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        let results = yield click_1.ClickItem.Clickable(editComputer.cancel);
        expect(results).toBeTruthy();
    }));
    it('Check if the cancel button is clicked, user will return to homepage', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        let results = yield click_1.ClickItem.Clickable(editComputer.cancel);
        if (results)
            yield click_1.ClickItem.clickLink(editComputer.cancel);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('computers');
    }));
    it('Check when add new computer is clicked, url is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield click_1.ClickItem.Clickable(home.addNewComputer);
        if (results)
            yield click_1.ClickItem.clickLink(home.addNewComputer);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('new');
    }));
    it('Check when add new computer is clicked, all inputs are empty by default', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let results = yield click_1.ClickItem.Clickable(home.addNewComputer);
        if (results)
            yield click_1.ClickItem.clickLink(home.addNewComputer);
        expect(yield editComputer.computerName.getAttribute('value')).toBe('');
        expect(yield editComputer.introduced.getAttribute('value')).toBe('');
        expect(yield editComputer.discontinued.getAttribute('value')).toBe('');
        expect(yield editComputer.company.getAttribute('value')).toBe('');
    }));
    it('When no input is given to the computer name, error will appear', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let addComputer = new addComputer_1.AddComputer();
        let results = yield click_1.ClickItem.Clickable(home.addNewComputer);
        if (results)
            yield click_1.ClickItem.clickLink(home.addNewComputer);
        let resultsCreate = yield click_1.ClickItem.Clickable(addComputer.create);
        if (resultsCreate)
            yield click_1.ClickItem.clickLink(addComputer.create);
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
        expect(yield addComputer.errorName.isDisplayed()).toBeTruthy();
    }));
    it('When conputer name is added and create is clicked, alert will appear', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let addComputer = new addComputer_1.AddComputer();
        let results = yield click_1.ClickItem.Clickable(home.addNewComputer);
        if (results)
            yield click_1.ClickItem.clickLink(home.addNewComputer);
        yield addComputer.computerName.sendKeys('Test');
        yield addComputer.create.click();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
        expect(yield home.alertMessage.isDisplayed()).toBeTruthy();
    }));
    it('When computer name is added and cancel is clicked, retrun to homepage', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let addComputer = new addComputer_1.AddComputer();
        let results = yield click_1.ClickItem.Clickable(home.addNewComputer);
        if (results)
            yield click_1.ClickItem.clickLink(home.addNewComputer);
        yield addComputer.computerName.sendKeys('Test');
        yield addComputer.cancel.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('computers');
    }));
    it('When a non-existent computer name is searched, the link will contain the searched name', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        const test = "testData1";
        yield home.searchData(test);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain(test);
    }));
    it('When a non-existant computer is searched, no computer will be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        const test = "testData1";
        yield home.searchData(test);
        expect(yield home.titleHeader.getText()).toBe('No computer');
    }));
    it('When a non-existant computer is searched, results will display nothing to display', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        const test = "testData1";
        yield home.searchData(test);
        expect(yield home.results.getText()).toBe('Nothing to display');
    }));
    it('When there is no need for pagination, the next and previous button will be disabled', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        const test = "testData1";
        yield home.searchData(test);
        expect(yield home.prev.getAttribute('class')).toContain("disabled");
        expect(yield home.next.getAttribute('class')).toContain("disabled");
    }));
    it('When there is nothing to display, the pagination should be displayed this way', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        const test = "testData1";
        yield home.searchData(test);
        expect(yield home.pagination.getText()).toBe("Displaying 1 to 0 of 0");
    }));
    it('When page loads with default data, next button should be enable and prev button should be disable', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        expect(yield home.prev.getAttribute('class')).toContain("disabled");
        expect(yield home.next.getAttribute('class')).not.toContain("disabled");
    }));
    it('When searched found results, a number of computers are found will be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        const test = "ACE";
        yield home.searchData(test);
        expect(yield home.titleHeader.getText()).toContain('computers found');
    }));
    it('When searched found results, the number of computers found will match the number of results', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        const test = "ACE";
        yield home.searchData(test);
        expect(Number(yield (yield home.titleHeader.getText()).split(" ")[0])).toBe(yield home.numberOfRows.count());
    }));
    it('When an invalid value is given for introduced, error message will be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        yield home.traverseComputerName("ACE");
        yield editComputer.introduced.sendKeys("test");
        let results = yield click_1.ClickItem.Clickable(editComputer.save);
        if (results)
            yield click_1.ClickItem.clickLink(editComputer.save);
        expect(yield editComputer.errorMessage.isDisplayed()).toBeTruthy();
    }));
    it('When an invalid value is given for discontinued, error message will be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        yield home.traverseComputerName("ACE");
        yield editComputer.discontinued.sendKeys("test");
        let results = yield click_1.ClickItem.Clickable(editComputer.save);
        if (results)
            yield click_1.ClickItem.clickLink(editComputer.save);
        expect(yield editComputer.errorMessage.isDisplayed()).toBeTruthy();
    }));
    it('When an invalid year is given for discontinued, error message will appear', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        yield home.traverseComputerName("ACE");
        yield editComputer.discontinued.sendKeys("99999-99-99");
        let results = yield click_1.ClickItem.Clickable(editComputer.save);
        if (results)
            yield click_1.ClickItem.clickLink(editComputer.save);
        expect(yield editComputer.errorMessage.isDisplayed()).toBeTruthy();
    }));
    it('When an invalid year is given for introduced, error message will appear', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        yield home.traverseComputerName("ACE");
        yield editComputer.introduced.sendKeys("99999-99-99");
        let results = yield click_1.ClickItem.Clickable(editComputer.save);
        if (results)
            yield click_1.ClickItem.clickLink(editComputer.save);
        expect(yield editComputer.errorMessage.isDisplayed()).toBeTruthy();
    }));
    it('When an invalid month is given for introduced, error message will appear', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        yield home.traverseComputerName("ACE");
        yield editComputer.introduced.sendKeys("2021-99-99");
        let results = yield click_1.ClickItem.Clickable(editComputer.save);
        if (results)
            yield click_1.ClickItem.clickLink(editComputer.save);
        expect(yield editComputer.errorMessage.isDisplayed()).toBeTruthy();
    }));
    fit('When an invalid month is given for introduced, error message will appear', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        yield home.traverseComputerName("ACE");
        yield editComputer.discontinued.sendKeys("2021-99-99");
        let results = yield click_1.ClickItem.Clickable(editComputer.save);
        if (results)
            yield click_1.ClickItem.clickLink(editComputer.save);
        expect(yield editComputer.errorMessage.isDisplayed()).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNkNBQTBDO0FBQzFDLDJDQUEyQztBQUMzQyw2REFBeUQ7QUFDekQsMkRBQXdEO0FBQ3hELDZDQUE2QztBQUc3QyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBRW5DLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDakIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO1FBQ3JCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUNsQixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQzdELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixTQUFTLENBQUMsR0FBUSxFQUFFO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVEsRUFBRTtRQUN4QyxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsZ0VBQWdFLEVBQUUsR0FBUyxFQUFFO1FBQzVFLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUE7UUFDckIsSUFBSSxPQUFPLEdBQUcsTUFBTSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENB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