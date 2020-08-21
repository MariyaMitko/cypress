import utils from "../lib/utils"

/**
 *
 * @constructor Profile Pane
 */
function ProfilePane () {

    const accountName          = ".name",
        groupListBtn           = ".profile-menu .tu-icon-down-menu",
        activeGroup            = "[ng-repeat='group in header.groups track by $index'] .tu-icon-check",
        settingsRows           = ".dropdown-menuitem .trigger";

    return {

        getAccountName () {

            return cy.get(accountName);
        },

        clickOnGroupList (action) {

            const listTrigger = cy.get(groupListBtn).last();

            utils.clickOn(listTrigger, `${action} groups list`, true);

        },

        selectAccountMenu (menu) {

            const row = cy.get(settingsRows).contains(menu);

            utils.clickOn(row, `select ${menu}`, true);

        },

        gerActiveGroup () {

            return cy.get(activeGroup);

        }

    }

}

export default new ProfilePane;