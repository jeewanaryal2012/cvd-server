import * as express from "express";
import { Request, Response } from "express";
import { Logger } from "tslog";
import config from '../config/config';
import "reflect-metadata";

// APIs
import login from '../api/login';
import account from "../api/account";
import register from '../api/register';

class JRoutes {
    public app;
    router = express.Router();
    log: Logger;
    constructor() {
        this.app = config.app;
        this.routes();
        config.configApp();
    }

    private routes(): void {
        this.router.get('/', (req: Request, res: Response) => {
            res.sendFile(process.env.PWD + '/dist/uicomponent/index.html');
        });
        this.router.post('/login', (req: Request, res: Response) => {
            login.doLogin(req, res);
        });
        this.router.post('/register', (req: Request, res: Response) => {
            //console.log(req.body);
            register.doRegister(req, res);
        });
        this.router.get('/account', (req: Request, res: Response) => {
            account.saveAccount(req, res);
        });
        this.router.get('/test', (req: Request, res: Response) => {
            res.json([
                { message: 'test' },
                { env: 'ENV' },
                { db: '.env created for DB' }
            ]);
        });
        this.app.use('/', this.router);
    }


}

export default new JRoutes().app;