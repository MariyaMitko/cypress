import utils from "../lib/utils"

/**
 *
 * @constructor Main page
 */
function MainPage () {

    const openCreateModalsBtn  = "[model='item']",
        modalLinks             = "[ng-repeat='option in ::optionCategoryValue'] a",
        subModal               = ".create-group-container",
        accountBtn             = ".icon-avatar";

    return {

        openCreationMenu () {

            utils.clickOn(cy.get(openCreateModalsBtn).first(), "open creation menu");

        },

        openModal (modal, group) {

        if (group === "create")  {

           cy.get(subModal).first().within(() => {

                const modalLink = cy.get(modalLinks).contains(modal);

                utils.clickOn(modalLink, `open create ${modal} modal`);
            });

        } else if (group === "manage") {

            cy.get(subModal).last().within(() => {

                const modalLink = cy.get(modalLinks).contains(modal);

                utils.clickOn(modalLink, `open manage ${modal} modal`);
            });

        }


        },

        openProfilePane () {

            utils.clickOn(cy.get(accountBtn).last(), "open profile pane");

        }

    }

}

export default new MainPage;