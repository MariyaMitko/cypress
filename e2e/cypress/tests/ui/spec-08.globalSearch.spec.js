import utils from "../../lib/utils"
import globalSearch from "../../pages/globalSearch"

const user = Cypress.env("baseUser");

describe("Global search :: Customer search by name", () => {
    it("Verify title of founded entity", () => {

        utils.openAppAndLogin(user);
        globalSearch.openForm();
        globalSearch.selectContext("Customers");
        globalSearch.fillInSearch("Regression Broker");

        globalSearch.getEntityCardName()
            .then((name) => {
                expect(name).to.equal("Regression Broker");
            });
    });

    it("Verify count of founded entities", () => {

        globalSearch.getSearchResultsCount()
            .then((count) => {
                expect(count).to.equal(1);
            });
    });

});