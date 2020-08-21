import apiRequests from "./apiRequests";

function RequestSender () {

    return {

        createUser (token, params) {

          const requestData = apiRequests.getUserPostRequest(token, params);

          cy.log(`Create user ${params.name}`);

          return cy.request(requestData);

        },

        updateUser (token, params) {

            const requestData = apiRequests.getUserPutRequest(token, params);

            cy.log(`Update user ${params.userId}`);

            return cy.request(requestData);

        },

        deleteUser (token, params) {

            const requestData = apiRequests.getUserDeleteRequest(token, params);

            cy.log(`Delete user ${params.userId}`);

            return cy.request(requestData);

        }
    }
}

export default new RequestSender;