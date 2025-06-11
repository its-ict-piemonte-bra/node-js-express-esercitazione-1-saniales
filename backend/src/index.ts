import express from "express";

// importiamo il router "example", definito nel
// file "./routes/example.routes.ts"
import { exampleRouter, exercisesMvcRouter } from "./routes";
import { sayCiaone, status } from "./controllers/example.controller";

const app = express();
const port = 3000;

// aggiungiamo il router "example" al nostro
// server express
app.use(exampleRouter);
app.use(exercisesMvcRouter);

// app.get -> uso il method "GET"
// primo parametro -> percorso di ascolto /
// secondo parametro -> funzione che dice cosa fare:
//                      1. req -> oggetto che rappresenta la richiesta in arrivo
//                                da qui io posso accedere ai parametri, usando
//                                req.params.parametro (sempre stringa, convertire se
//                                necessario)
//                      2. res -> oggetto che permette di rispondere al client.
//                                res.send(...) -> invia stringhe
//                                oppure res.json(oggetto) -> converte in stringa JSON
//                                e invia
// app.get("/", function (req, res) {
//     res.send("OK");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
