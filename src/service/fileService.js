const conn = require("../db/connection")

 async function uploadFileService(req){
    try {
        const { name , size , filetype } = req.query;
        const result = await conn.query(
            'INSERT INTO file_metadata (name, size, type) VALUES ($1, $2, $3) RETURNING id',
            [name, size, filetype]
          );

          return {success : true , id : result?.rows[0]?.id}
        
    } catch (err) {
        return {success : false , message : err}
        
    }

}

async function searchForFileId(uid){
    try{
        const query = 'Select * from file_metadata where id = $1';
        const result = await conn.query(query, [uid]);
        console.log(result ,8754, result.rowCount)
        return result.rowCount >= 1;
    }
      catch(err){
        console.log(err)
      }
}

async function updateFileMetaData(req){
    const { name , size , filetype } = req.query;
    const query = await conn.query(
        'UPDATE files SET fileName = $1, fileSize = $2, fileType = $3 WHERE id = $4 RETURNING *',
        [filetype, size, fileType, req.query.uid]
      );
}

module.exports = {uploadFileService,searchForFileId}