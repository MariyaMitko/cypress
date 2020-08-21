import utils from "../../lib/utils"
import mainPage from "../../pages/mainPage"
import uploadContractModal from "../../pages/uploadContractModal"

const user = Cypress.env("baseUser");

describe("Manage modal :: Upload contract file" , () => {
    it("Verify 'Upload contract' modal is opened", () => {

        utils.openAppAndLogin(user);
        mainPage.openCreationMenu();
        mainPage.openModal("Contract", "manage");

        uploadContractModal.getModal().should("be.visible")

    });

    it("Verify contract can be uploaded from directory", () => {

        uploadContractModal.importContract("contract.csv");

        uploadContractModal.getFileList("contract.csv")
            .then((text) => {
                expect(text).to.include("contract.csv");
            });

    });

});