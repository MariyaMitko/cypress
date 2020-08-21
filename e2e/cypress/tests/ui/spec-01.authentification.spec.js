import utils from "../../lib/utils"
import loginPage from "../../pages/loginPage"

const user = Cypress.env("baseUser");

describe("Authentication :: User can login into the app" , () => {
    it("Verify login page is opened", () => {

        loginPage.openPage();

        utils.getBrowserUrl().should("include", "#/auth/login");

    });

    it("Verify User can login with valid credentials", () => {

        loginPage.fillInEmail(user.login);
        loginPage.fillInPassword(user.password);

        loginPage.getSignInButton().should("not.be.visible")

    });

    it("Verify User is redirected on Turvo main page", () => {

        loginPage.clickSignIn();

        utils.getBrowserUrl().should("include", "#/me");

    })
});