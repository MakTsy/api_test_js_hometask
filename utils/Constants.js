
class Constants {

    static dropboxContentUrl = 'https://content.dropboxapi.com';
    static dropboxApiUrl = 'https://api.dropboxapi.com';
    static accessToken = '7-y5WJMuwsIAAAAAAAAAAUkXHqqcJnn3UscNIdiiOkTojar5p_iA-sWxM5ZGOY3V';

    // Paths to endpoints
    static uploadFilePath = '/2/files/upload';
    static getMetadataPath = '/2/sharing/get_file_metadata';
    static deleteFilePath = '/2/files/delete_v2';


    static get dropboxContentUrl() {
        return this.dropboxContentUrl;
    }

    static get dropboxApiUrl() {
        return this.dropboxApiUrl;
    }

    static get accessToken() {
        return this.accessToken;
    }

    static get uploadFilePath() {
        return this.uploadFilePath;
    }

    static get deleteFilePath() {
        return this.deleteFilePath;
    }

    static get getMetadataPath() {
        return this.getMetadataPath;
    }
}

module.exports = Constants;
