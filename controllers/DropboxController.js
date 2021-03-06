let axios = require("axios");
let Constants = require("../utils/Constants");

class DropboxController {

    constructor() {
        this.dropBoxFilePath = "/TestFile.txt";
        this.uploadFileToStorageConf = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': 'Bearer ' + Constants.accessToken,
                'Dropbox-API-Arg': `{"mode":"add","path":"${this.dropBoxFilePath}","mute":false,"autorename":true}`
            },
            data: {
                binary: "../TestFile.txt"
            }
        };

        this.getFileConf = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Constants.accessToken,
            },
            data: {
                "path": this.dropBoxFilePath
            }
        };
    }

    async uploadFileToStorage() {
        return axios(Constants.dropboxContentUrl + Constants.uploadFilePath, this.uploadFileToStorageConf);
    }

    async getFileMetadata() {
        return  axios(Constants.dropboxApiUrl + Constants.getMetadataPath, this.getFileConf);
    }

    async deleteFileFromStorage() {
        return axios(Constants.dropboxApiUrl + Constants.deleteFilePath, this.getFileConf);
    }
}

module.exports = DropboxController;
