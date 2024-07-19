import { Router } from "express";
import { Propiedad } from "../mongoose/propiedad";
import { validationResult, checkShema, matchedData } from "express-validator "
import { createPropertyValidationSchema } from "../utils/validacionSchemas"

const router = Router();

router.post("api/propiedades", 
    checkShema(createPropertyValidationSchema),
    async (req, res) =>{
        const result = validationResult(req);
        if (!result.isEmpty()) return res.status(400).send(res.array());

        const data = matchedData(req);

        console.log(data);
        const newProperty = Propiedad(data);
        console.log(data);

        try {
            const saveProperty = await newProperty.save();
            return res.status(201).send(saveProperty)
        } catch (err){
            console.log(err);
            return res.sendStatus(400);
        }
    }
)

export default router