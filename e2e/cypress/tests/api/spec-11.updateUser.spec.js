import requestSender from "../../apiService/requestSender";
import httpUtils from "../../lib/httpUtils";
import helper from "../../helper/helper";

import utils from "../../lib/utils";

const user = Cypress.env("baseUser"),
requestParams = {userId: 211823};

describe("Turvo API :: Update user" , () => {
    it("Verify PUT response", () => {

        utils.openAppAndLogin(user);

        httpUtils.getAccessToken()
            .then((token) => {
                requestSender.updateUser(token, requestParams).then(response => {

                    cy.log(`User ${response.body.id} was updated`);

                    expect(response.body).to.have.property("id", requestParams.userId);
                    expect(response.body.details.Basic.permission).to.have.property("value", "Editor");

                })
            });


    });

});