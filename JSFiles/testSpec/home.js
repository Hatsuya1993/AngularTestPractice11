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
describe('Test computer website', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let home = new home_1.Home();
        yield home.website;
        protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(5000);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    it('Check if the url is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('computers');
    }));
    it('Check when the title is clicked will redirect to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
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
    fit('Check if the save button is clickable', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        let results = yield click_1.ClickItem.Clickable(editComputer.save);
        expect(results).toBeTruthy();
    }));
    fit('Check if the cancel button is clickable', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let editComputer = new editComputer_1.EditComputer();
        let check = "ACE";
        yield home.traverseComputerName(check);
        let results = yield click_1.ClickItem.Clickable(editComputer.cancel);
        expect(results).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNkNBQTBDO0FBQzFDLDJDQUEyQztBQUMzQyw2REFBeUQ7QUFHekQsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtJQUVuQyxVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ2pCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDbEIsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNwQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixTQUFTLENBQUMsR0FBUSxFQUFFO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVEsRUFBRTtRQUN4QyxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsZ0VBQWdFLEVBQUUsR0FBUyxFQUFFO1FBQzVFLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUE7UUFDckIsTUFBTSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNB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