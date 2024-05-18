const Joi = require("joi")

//validates that the file id should only be a uuid.
const validFileId = (req,res,next) => {
    const uuidSchema = Joi.string().uuid();
    const { error } = uuidSchema.validate(req.params.id);
    if (error) {
        return res.status(400).send({ error: 'Invalid UUID' });
    }
    next();
}

//validates the meta-data for the incoming file 
//add .required if we want the fields to be mandatory.
 const validMetaData = (req,res,next) => {
    next();
    const metaDataSchema = Joi.object({
        name: Joi.string().required(),
        size: Joi.number().integer(),
        filetype: Joi.string()
      });

      const { error } = metaDataSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ error: error });
    }
    next();
}

module.exports = {validMetaData , validFileId}