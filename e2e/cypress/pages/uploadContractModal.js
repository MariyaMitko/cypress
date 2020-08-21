import utils from "../lib/utils"

/**
 *
 * @constructor upload contract modal
 */
function UploadContractModal () {
    const root           = ".modal-body",
        filesRepeater    = "[ng-repeat='file in modal.uploaded']";

    return {

        getModal () {

            return cy.get(root);

        },

        importContract (pathToFile) {

            cy.get("input[type='file']").attachFile(pathToFile);

        },

        getFileList () {

            return cy.get(filesRepeater).invoke("text")
        }

    }

}

export default new UploadContractModal;