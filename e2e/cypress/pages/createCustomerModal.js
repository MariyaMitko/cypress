import utils from "../lib/utils"

/**
 *
 * @constructor create customer modal
 */
function CreateCustomerModal () {
    const root           = ".modal-body",
        inptCustomerName = "[ng-model='modal.account.displayName']",
        inptAddress      = "[ng-model='address.data']",
        btnCreate        = "[type='submit']";
    return {

        getModal () {

           return cy.get(root);

        },

        fillInData (customer) {

            utils.clearAndType(inptCustomerName, customer.name);
            utils.clearAndType(inptAddress, customer.address);
            utils.clickOn(cy.get(".pac-item-query span").contains(customer.address), `select ${customer.address}`)

        },

        getCreateButton () {

            return cy.get(btnCreate)
        },

        clickCreate () {

         const button = this.getCreateButton();

            utils.clickOn(cy.get(btnCreate), "submit customer creation");
            cy.wait(5000)

        }

    }

}

export default new CreateCustomerModal;