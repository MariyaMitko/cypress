import utils from "../lib/utils"

/**
 *
 * @constructor customer Details tab
 */
function CustomerDetails () {
    const accordionRoot          = ".accordion-customerAccount",
        sharingSegmentRoot       = ".segment-customer-sharing",
        summaryBit               = ".segment-customer-sharing > .summary > .bit",
        sharingCheckbox          = "[ng-model='segment.data.shareOperatingCarrier']",
        saveBtn                  = ".segment-customer-sharing [type='submit']";
    return {

        clickSettingsAccordion (action) {

          const settingsAccordion = cy.get(accordionRoot).last();

          utils.clickOn(settingsAccordion, `${action} Settings accordion`);

        },

        clickSharingSegment (action) {

            const sharingSegment = cy.get(sharingSegmentRoot);

            utils.clickOn(sharingSegment, `${action} Sharing segment`);

        },

        activateCheckbox () {

            const sharingToggle = cy.get(sharingCheckbox).first();

            utils.clickOn(sharingToggle, "activate checkbox", true);

        },

        getControls () {

           return cy.get(saveBtn);

        },

        save () {

            utils.clickOn(cy.get(saveBtn), "save");

        },

        getSummaryBit () {

            return cy.get(summaryBit);
        }

    }

}

export default new CustomerDetails;