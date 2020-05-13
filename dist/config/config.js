"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
class CorsConfig {
    constructor() {
        this.router = express.Router();
        this.configApp();
    }
    configApp() {
        this.options = {
            allowedHeaders: ["*"],
            credentials: false,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: true
        };
        dotenv.config();
        this.app = express();
        this.app.use(cors(this.options));
        this.router.use(cors(this.options));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/uploads', express.static(process.env.PWD + '/uploads'));
        this.app.use('/', express.static(process.env.PWD + '/dist'));
        this.app.use('/', this.router);
    }
}
exports.CorsConfig = CorsConfig;
exports.default = new CorsConfig();
//# sourceMappingURL=config.js.map