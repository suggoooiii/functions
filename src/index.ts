import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import bodyParser = require("body-parser");
import cors = require("cors");
import {routesConfig} from "./users/routes-config";

admin.initializeApp();

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: true}));
routesConfig(app);

export const api = functions.https.onRequest(app);

// https://firebase.google.com/docs/functions/typescript
// export const helloWorld = functions.https.onRequest((request, response) => {
// functions.logger.info("Hello logs!", {structuredData: true});
// response.send("Hello from Firebase!");
// });
