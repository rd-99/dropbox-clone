const express = require('express');
const router = express.Router();
const fileController = require("../controller/fileController")
const {validFileId , validMetaData} = require("../validation/fileValidation")

router.post("/files/upload"  ,fileController.uploadFile)

router.get("/files" , fileController.retrieveFile)

router.put("/files/:fileId" , validFileId , fileController.updateFile)

router.delete("/files/:fileId" , validFileId , fileController.deleteFile)

router.get("/files/" , fileController.fetchAllFiles)

module.exports = router;