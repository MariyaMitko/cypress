import utils from "../../lib/utils"
import mainPage from "../../pages/mainPage"
import profilePane from "../../pages/profilePane"

const user = Cypress.env("baseUser");

describe("User profile :: Profile pane", () => {
    it("Verify user name", () => {

        utils.openAppAndLogin(user);
        mainPage.openProfilePane();

        profilePane.getAccountName().should("have.text", "Regression Broker")

    });

    it("Verify User user default group", () => {

        profilePane.clickOnGroupList("open");

        profilePane.gerActiveGroup().should("have.text", "regression broker")

    });

});