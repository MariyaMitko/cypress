import requestSender from "../../apiService/requestSender";
import httpUtils from "../../lib/httpUtils";
import helper from "../../helper/helper";

import utils from "../../lib/utils";

const user = Cypress.env("baseUser"),
requestParams = {userId: 211823};

describe("Turvo API :: Delete user" , () => {
    it("Verify DELETE response", () => {

        utils.openAppAndLogin(user);

        httpUtils.getAccessToken()
            .then((token) => {
                requestSender.deleteUser(token, requestParams).then(response => {

                    cy.log(`User ${requestParams.userId} was deleted`);

                    expect(response.body.respCode).to.eq(206);
                    expect(response.body.respMsg).to.eq("SUCCESS_DELETE");

                })
            });


    });

});