import utils from "../../lib/utils"
import customerScreen from "../../pages/customerScreen"

const user = Cypress.env("baseUser");

describe("Customer screen :: Customer header data" , () => {
    it("Verify customer status is Active", () => {

        utils.openAppAndLogin(user);
        utils.openTab("summary", user);

        customerScreen.getCustomerStatus().should("have.text", "Active");

    });

    it("Verify customer name", () => {

        customerScreen.getCustomerName().should("have.text", "Regression Broker");

    });

    it("Verify customer databits", () => {

        customerScreen.getCustomerDataBits()
            .then((databits) => {
                expect(databits).to.include("$224,489.34 Bookings");
                expect(databits).to.include("$224,489.34 Bookings");
            })

    })
});