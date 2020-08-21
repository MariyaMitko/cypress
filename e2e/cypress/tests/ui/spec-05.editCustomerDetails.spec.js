import utils from "../../lib/utils"
import customerDetails from "../../pages/customerDetails"
import customerModal from "../../pages/createCustomerModal";

const user     = Cypress.env("baseUser"),
      customer = Cypress.env("customer");

describe("Customer Details tab :: Edit Sharing segment" , () => {
    it("Activate checkbox and save changes", () => {

        utils.openAppAndLogin(user);
        utils.openTab("details", customer);
        customerDetails.clickSettingsAccordion("expand");
        customerDetails.clickSharingSegment("expand");
        customerDetails.activateCheckbox();
        customerDetails.save();

        customerDetails.getControls().should("be.disabled");


    });

    it("Verify segment summary bit", () => {

        customerDetails.clickSharingSegment("collapse");

        customerDetails.getSummaryBit().should("have.text", "Share operating carrier");

    });

});