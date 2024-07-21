import { Router } from "express";

const router = Router();
router.get("/api/products", (req,res) => {
    return res.send([{id: 123, name: "chicken breat", price: 12.99}]);

});
export default router