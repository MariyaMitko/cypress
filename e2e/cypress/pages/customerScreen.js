import utils from "../lib/utils"

/**
 *
 * @constructor customer screen
 */
function CustomerScreen () {
    const root           = ".account-hero",
        customerStatus   = "[ng-if='entity.heroData.status.displayName']",
        customerName     = ".flex-al-start",
        customerDatabits = "[ng-if='entity.heroData.shipmentsYtd']";
    return {

        getCustomerStatus () {

          return cy.get(customerStatus);

        },

        getCustomerName () {

            return cy.get(customerName);

        },

        getCustomerDataBits () {

            return cy.get(customerDatabits).invoke('text');

        }

    }

}

export default new CustomerScreen;