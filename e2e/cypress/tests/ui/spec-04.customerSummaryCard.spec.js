import utils from "../../lib/utils"
import summaryTab from "../../pages/customerSummaryTab"

const user = Cypress.env("baseUser");

describe("Customer Summary tab :: Customer stats card" , () => {
    it("Verify customer stats", () => {
       cy.fixture("customer").then((data) => {

          utils.openAppAndLogin(user);
          utils.openTab("summary");

          summaryTab.getStatsData()
          .then((cardData) => {
              expect(cardData).to.include(`Shipments${data.shipments}`);
              expect(cardData).to.include(`Total revenue${data.totalRevenue}`);
              expect(cardData).to.include(`Net revenue per shipment${data.netRevenue}`);
              expect(cardData).to.include(`Margin${data.margin}`);
              expect(cardData).to.include(`Available credit${data.availableCredit}`);
              expect(cardData).to.include(`Customer since${data.term}`);

          });
       })
    });
});