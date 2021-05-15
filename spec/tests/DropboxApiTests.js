let DropboxController = require("../../controllers/DropboxController");
let assert = require('assert');

let dropboxController = new DropboxController();

describe('You can upload file', function () {
    it('upload file to dropbox', async function () {
        const response = await dropboxController.uploadFileToStorage();
        assert(response.statusCode === 200,'Error message');
        console.log(response);
    })
})

describe('You can get Metadata', function () {
    it('get file metadata', async function () {
        const response = await dropboxController.getFileMetadata();
        assert(response.status === 200,'Error message');
    })
})

// describe('You can delete', function () {
//     it('delete file', async function () {
//         const response = await dropboxController.deleteFileFromStorage();
//         assert(response.statusCode === 200,'Error message');
//     })
// })

