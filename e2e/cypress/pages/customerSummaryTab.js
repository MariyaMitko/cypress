import utils from "../lib/utils"
import _  from "lodash"
/**
 *
 * @constructor customer summary tab
 */
function CustomerSummaryTab () {
    const statsCardRoot  = ".summary-card",
        dataRws          = ".stats-card .card-row div";
    return {

        getStatsData () {

          return cy.get(dataRws).invoke("text");

        },

    }

}

export default new CustomerSummaryTab;