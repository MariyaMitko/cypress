
function HttpUtils () {
     return {

         getTokenRequestOptions ()  {

             const baseUrl = Cypress.env("baseUrl"),
                      user = Cypress.env("baseUser");

             return {
                 "method": "POST",
                 "url": `${baseUrl}***`,
                 "json": {
                     "scope": "read write",
                     "type": "business",
                     "grant_type": "password",
                     "username": user.login,
                     "password": user.password,
                     "remember": true
                 }
             };
         },

       getAccessToken () {

             const body = this.getTokenRequestOptions();

             return cy.request(body)
                 .then((respons) => {

                     return respons.body.access_token;

                 })

       }

    }
}

export default new HttpUtils;