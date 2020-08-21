import requestSender from "../../apiService/requestSender";
import httpUtils from "../../lib/httpUtils";
import helper from "../../helper/helper";

import utils from "../../lib/utils";

const user = Cypress.env("baseUser"),
requestParams = {name: helper.generateName(), email: helper.generateEmail()};

describe("Turvo API :: Create user" , () => {
    it("Verify POST response", () => {

        utils.openAppAndLogin(user);

        httpUtils.getAccessToken()
            .then((token) => {
                requestSender.createUser(token, requestParams).then(response => {

                    cy.log(`User ${response.body.userId} was created`);

                    expect(response.body.respCode).to.eq(204);
                    expect(response.body).to.have.property("userId");
                    expect(response.body.details.Basic).to.have.property("full_name", requestParams.name);
                    expect(response.body.details.Basic).to.have.property("userName", requestParams.email);

                })
            });


    });

});