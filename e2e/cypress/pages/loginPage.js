import utils from "../lib/utils"

/**
 *
 * @constructor login page
 */
function LoginPage () {

    const inptEmail  = "[ng-model='login.email']",
        inptPassword = "[ng-model='login.password']",
        btnSignIn    = "button[ng-click='login.doLogin()']";

    return {

        openPage (url) {

            const targetURL = url ? url : Cypress.env("baseUrl");

            cy.visit(targetURL);
            cy.log(`Open ${targetURL}`)

        },

        getSignInButton () {

            return cy.get(btnSignIn)
        },

        fillInEmail (email) {

            utils.clearAndType(inptEmail, email);

        },

        fillInPassword (password) {

            utils.clearAndType(inptPassword, password);

        },

        clickSignIn () {

            utils.clickOn(cy.get(btnSignIn), "to sign in");

        }


    }

}

export default new LoginPage;