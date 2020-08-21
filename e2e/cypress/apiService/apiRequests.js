import httpUtils from "./../lib/httpUtils";
import helper from "./../helper/helper";

function ApiRequests () {

    return {

        getUserPostRequest (token, params) {
            return {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                    "Nonce": helper.generateUUID()
                },
                url: "https://rehearsal-app-bravo.turvo.com/api/users?fullResponse=true",
                method: "POST",
                json: {
                    "full_name": params.name,
                    "emails":[{
                        "email": params.email,
                        "primary":true
                    }],
                    "permission":{
                        "id":3893,
                        "value":"Viewer"
                    },
                    "groups":[]
                }
            };
        },

        getUserPutRequest (token, params) {
            return {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                    "Nonce": helper.generateUUID()
                },
                url: `https://rehearsal-app-bravo.turvo.com/api/users/${params.userId}?fullResponse=true`,
                method: "PUT",
                json: {
                    "permission":{
                        "id":3896,
                        "value":"Editor"}
                },
                "componentKey":11707
            };
        },

        getUserDeleteRequest (token, params) {
            return {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                    "Nonce": helper.generateUUID()
                },
                url: `https://rehearsal-app-bravo.turvo.com/api/users/${params.userId}`,
                method: "DELETE"
            };
        }
    }
}

export default new ApiRequests;