import { Router } from "express";

import { 
    echoMessage, 
    wordLength, 
    palindrome, 
    odd,
    doubled,
} from "../controllers/exercises-mvc.controller";

const exercisesMvcRouter = Router();

exercisesMvcRouter.get("/exercises-mvc/echo", echoMessage);
exercisesMvcRouter.get("/exercises-mvc/:word/length", wordLength);
exercisesMvcRouter.get("/exercises-mvc/:word/palindrome", palindrome);

exercisesMvcRouter.get("/exercises-mvc/numbers/:n/odd", odd);
exercisesMvcRouter.get("/exercises-mvc/numbers/:n/doubled", doubled);

export { exercisesMvcRouter };