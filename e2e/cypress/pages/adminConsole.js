import utils from "../lib/utils"
import _  from "lodash"
/**
 *
 * @constructor user admin console
 */
function AdminConsole () {
    const activePanes    = ".admin-card-trigger:not(.admin-card-trigger-disabled)",
          paneTitle      = ".admin-card-title";
    return {

        getActivePanes () {

          return cy.get(activePanes)
                .getTextArray();
        },

    }

}

export default new AdminConsole;