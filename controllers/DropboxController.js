let got = require("got");
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
            url: Constants.dropboxApiUrl + Constants.getMetadataPath,
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
        return got(Constants.dropboxContentUrl + Constants.uploadFilePath, this.uploadFileToStorageConf);
    }

    async getFileMetadata() {
        return  axios(this.getFileConf);
    }

    async deleteFileFromStorage() {
        return got(Constants.dropboxApiUrl + Constants.deleteFilePath, this.getFileConf);
    }
}

module.exports = DropboxController;
