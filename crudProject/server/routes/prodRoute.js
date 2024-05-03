import express from 'express';
import userModel from '../model/prodModel.js';
import { Update, create, deleteProd, getAll, getOne} from '../controller/prodController.js';

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", Update)
route.delete("/delete/:id", deleteProd)

export default route;