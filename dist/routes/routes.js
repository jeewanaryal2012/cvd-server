"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
require("reflect-metadata");
// APIs
const login_1 = require("../api/login");
const account_1 = require("../api/account");
const register_1 = require("../api/register");
class JRoutes {
    constructor() {
        this.router = express.Router();
        this.app = config_1.default.app;
        this.routes();
        config_1.default.configApp();
    }
    routes() {
        this.router.get('/', (req, res) => {
            res.sendFile(process.env.PWD + '/dist/uicomponent/index.html');
        });
        this.router.post('/login', (req, res) => {
            login_1.default.doLogin(req, res);
        });
        this.router.post('/register', (req, res) => {
            //console.log(req.body);
            register_1.default.doRegister(req, res);
        });
        this.router.get('/account', (req, res) => {
            account_1.default.saveAccount(req, res);
        });
        this.app.use('/', this.router);
    }
}
exports.default = new JRoutes().app;
//# sourceMappingURL=routes.js.map