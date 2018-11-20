import { Router } from "express";
import userRouters from "./user";
import parcelRouters from "./parcel";

const routers = Router();

const notFound = (req, res) => {
  return res.status(404).send({message:"the url not found"})
}

routers.use(userRouters, parcelRouters,notFound);

export default routers;
