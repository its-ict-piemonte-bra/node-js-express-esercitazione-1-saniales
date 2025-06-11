import { Router } from "express";

import { sayCiaone, status } from "../controllers/example.controller";

const exampleRouter = Router();

exampleRouter.get("/", sayCiaone);
exampleRouter.get("/status", status);

export { exampleRouter };