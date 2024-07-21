import { Router } from "express";
import propiedesRouer from "./propiedades"
import productosRouter from "./productos"

const router = Router();
router.use(propiedesRouer);
router.use(productosRouter);

export default router;