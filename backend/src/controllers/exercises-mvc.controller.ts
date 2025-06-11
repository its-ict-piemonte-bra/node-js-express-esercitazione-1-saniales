import { Request, Response } from "express";

export function echoMessage(request: Request, response: Response) {
    const message = request.query.msg;
    if (!message) {
        const errorMessage = {
            error: "msg parameter is required",
        };

        response.status(400);
        response.json(errorMessage);
        return;
    }

    const echoResponse = {
        msg: message,
    };

    response.json(echoResponse);
}

export function wordLength(request: Request, response: Response) {
    const serverResponse = {
        word: request.params.word,
        length: request.params.word.length,
    };

    response.json(serverResponse);
}

export function palindrome(request: Request, response: Response) {
    const reverse = Array.from(request.params.word).reverse().join("");

    // oppure col for
    // let reverse = "";
    // for (let i = 0; i < request.params.word.length; i++) {
    //     reverse += request.params.word[request.params.word.length - i - 1];
    // }

    let isPalindrome = false;
    if (request.params.word == reverse) {
        isPalindrome = true;
    }

    const serverResponse = {
        word: request.params.word,
        reverse: reverse,
        palindrome: isPalindrome,
    };

    response.json(serverResponse);
}

export function odd(request: Request, response: Response) {
    const { n } = request.params;

    const number = parseInt(n) || null;
    if (!number) {
        const errorMessage = {
            error: "n must be a number"
        };

        response.status(400);
        response.json(errorMessage);
        return;
    }

    const serverResponse = {
        n: number,
        odd: number % 2 == 1,
    };

    response.json(serverResponse);
}

export function doubled(request: Request, response: Response) {
    const { n } = request.params;

    const number = parseInt(n) || null;
    if (!number) {
        const errorMessage = {
            error: "n must be a number"
        };

        response.status(400);
        response.json(errorMessage);
        return;
    }

    const serverResponse = {
        n: number,
        doubled: number * 2,
    };

    response.json(serverResponse);
}