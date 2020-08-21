import loginPage from "./../pages/loginPage"

function Utils () {
     return {

         getBrowserUrl ()  {

             return cy.url();
         },

         clearAndType (inptField, value) {

             cy.get(inptField).clear();
             cy.get(inptField).type(value);
             cy.log(`Fill in ${value}`)

         },

         clickOn (button, description, force = false) {

             button.click({force: force});
             cy.log(`Perform click to ${description}`)

         },

         openAppAndLogin (user) {

             loginPage.openPage();
             loginPage.fillInEmail(user.login);
             loginPage.fillInPassword(user.password);
             loginPage.clickSignIn();

         },

         openTab (tab, entity) {

             const baseUser = entity ? entity : Cypress.env("baseUser"),
                 targetURL = `${baseUser.url}/${tab}`;

             cy.visit(targetURL);
             cy.log(`Open ${targetURL}`)

         }

    }
}

export default new Utils;