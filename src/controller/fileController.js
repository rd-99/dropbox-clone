const { uploadFileService, searchForFileId } = require("../service/fileService")
const fs = require("fs")
const fsPromises = fs.promises;
async function uploadFile(req, res, next) {
    try {
        const currFileUuid = await uploadFileService(req);

        //handleFileUpload();
        const fileContent = req._readableState.buffer[0];
        const buf = new Buffer.from(fileContent, 'binary');
        const storeResult = await writeToFile(currFileUuid, buf)
        if (storeResult.success) {
            res.send(currFileUuid)
        }
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}

async function retrieveFile(req, res, next) {
    try {
        const { uid } = req.query;
        const result = await searchForFileId(uid);
        if(result){
            const fileContent = await fsPromises.readFile(`Files/${uid}`)
            res.send(fileContent);
        }
        else res.send(result)        


    } catch (err) {
        res.status(400).json(err);

    }

}

async function updateFile(req, res, next) {
    try {
        const isFIleAlreadyExists = await searchForFileId(req.query.uid);
        if(isFIleAlreadyExists){
            
        }
        else{

        }


    } catch (err) {

    }

}

function deleteFile(req, res, next) {
    try {

    } catch (err) {

    }

}

function fetchAllFiles(req, res, next) {
    try {

    } catch (err) {

    }

}

async function writeToFile(currFileUuid, buf) {
    try {
        fs.writeFile(`Files/${currFileUuid.id}`, buf, (err) => {
            if (err) {
                return { success: false, error: (err) };
            }
        })
        return { success: true };
    }
    catch (err) {
        return { success: false, error: err };

    }


}

module.exports = { uploadFile, fetchAllFiles, deleteFile, updateFile, retrieveFile }