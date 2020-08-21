import utils from "../lib/utils"

/**
 *
 * @constructor Main page
 */
function MainPage () {

    const searchRoot               = ".search",
        btnSearch                  = "[ng-click='header.showSearch()']",
        inptSearch                 = "[ng-model='search.query']",
        contextRows                = ".item-title",
        leftPaneItems              = "[ng-repeat='match in search.items']",
        rightPaneItemName          = ".entity-card .title";

    return {

        openForm () {

            utils.clickOn(cy.get(btnSearch), "open global search");

        },

       selectContext (context) {

           const row = cy.get(contextRows).contains(context);

           row.trigger("mouseover");
           utils.clickOn(row, `select ${context}`, true);

       },

        fillInSearch (data) {

            utils.clearAndType(inptSearch, data);

        },

        getSearchResultsCount () {

           return cy.get(leftPaneItems).its('length');

        },

        getEntityCardName () {

            return cy.get(rightPaneItemName).invoke("text")

        }

    }

}

export default new MainPage;