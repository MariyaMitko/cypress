import utils from "../../lib/utils"
import mainPage from "../../pages/mainPage"
import profilePane from "../../pages/profilePane"
import adminConsole from "../../pages/adminConsole"

const user = Cypress.env("baseUser");

describe("Admin console :: Console panes", () => {
    it("Verify available panes", () => {

        utils.openAppAndLogin(user);
        mainPage.openProfilePane();
        profilePane.selectAccountMenu("Admin console");

        adminConsole.getActivePanes()
            .then((text) => {
                expect(text).to.include("Company profile");
                expect(text).to.include("Users");
                expect(text).to.include("Groups");
                expect(text).to.include("API documentation");
                expect(text).to.include("Payments");
                expect(text).to.include("Upload history");

            })

    });

    it("Verify unavailable panes", () => {

        adminConsole.getActivePanes()
            .then((text) => {
                expect(text).not.to.include("App integrations");
                expect(text).not.to.include("Turvo connections");
                expect(text).not.to.include("Stats");
                expect(text).not.to.include("Document templates");

            })

    });

});