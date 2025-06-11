import { Request, Response } from "express";

/**
 * Sends back a response from the server saying "CIAONE"
 * @param request The request object
 * @param response The response object
 */
export function sayCiaone(request: Request, response: Response) {
    response.send("CIAONE");
}

/**
 * Sends back a status response from the server
 * @param request The request object
 * @param response The response object
 */
export function status(request: Request, response: Response) {
    const statusResponse = {
        status: "OK",
    };

    response.json(statusResponse);
}
