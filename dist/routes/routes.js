"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
require("reflect-metadata");
//import { Users } from '../entities/users';
// import { Membership } from '../entities/membership';
// import { Profile } from '../entities/profile';
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
            console.log(process.env.PWD);
            //res.sendFile(process.env.PWD + '/dist/uicomponent/index.html');
            res.json({
                message: 'Home page'
            });
        });
        this.router.get('/login', (req, res) => {
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
/*
connect(res) {
        // console.log(__dirname);
        console.log(process.env.PWD + '/entities/users.ts');
        const connections = createConnections([{
            name: "mysql",
            type: "mysql",
            host: "localhost",
            //port: 3306,
            username: "root",
            password: "",
            database: "test",
            entities: [Users, Membership, Profile], //[`${process.env.PWD}/entities/user.ts`],
            //entities: [`${process.env.PWD}/entities/users.ts`],
            synchronize: true
        }]);
        connections.then(ct => {
            //console.log(ct);
        });
        res.json({});

        const connections = createConnections([{
            name: "mysql",
            type: "mysql",
            host: "localhost",
            //port: 3306,
            username: "root",
            password: "",
            database: "test",
            //entities: [Users],
            synchronize: true
        }]);

        // connections.then(ct => {
        //     let photo = new Users();
        //     photo.firstName = "Me and Bears";
        //     photo.lastName = "I am near polar bears";
        //     photo.email = "photo-with-bears.jpg";
        //     photo.password = '';
        //     ct[0].getCustomRepository(Users).find().then
        // }).catch(error => console.log(error));


        connections
            .then(connection => {
                let photo = new Users();
                photo.firstName = "Me and Bears";
                photo.lastName = "I am near polar bears";
                photo.email = "photo-with-bears.jpg";
                photo.password = '';
                console.log('here ------------------------- ');
                //console.log(connection[0].manager);

                // let photoRepository = connection[0].getRepository(Users);
                // photoRepository.find().then(data => {
                //     console.log(data);
                //     res.json({
                //         data: data
                //     });
                // }, err => { });
                return connection[0].manager
                    .save(photo)
                    .then(photo => {
                        console.log("Photo has been saved. Photo id is", photo.id);
                    });
            })
            .catch(error => {

            });



        }
*/ 
//# sourceMappingURL=routes.js.map