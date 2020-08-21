import utils from "../../lib/utils"
import mainPage from "../../pages/mainPage"
import customerModal from "../../pages/createCustomerModal"

const user = Cypress.env("baseUser");

describe("Customer :: User can create a customer" , () => {
    it("Verify create customer modal is opened", () => {

        utils.openAppAndLogin(user);
        mainPage.openCreationMenu();
        mainPage.openModal("Customer", "create");

        customerModal.getModal().should("be.visible")

    });

    it("Verify customer can be created with required data", () => {

        customerModal.fillInData({name: "Test Customer", address: "Los Angeles"});

        customerModal.getCreateButton().should("not.be.disabled");

    });

    it("Verify User is redirected on customer page", () => {

        customerModal.clickCreate();

        utils.getBrowserUrl().should("include", "summary");

    })
});