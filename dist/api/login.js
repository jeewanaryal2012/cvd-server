"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connect_1 = require("../config/db-connect");
const users_entity_1 = require("../entities/users.entity");
const bcrypt = require("bcryptjs");
const tslog_1 = require("tslog");
const jwt = require("jsonwebtoken");
class Login {
    constructor() {
        this.log = new tslog_1.Logger();
    }
    doLogin(req, res) {
        //console.log('test');
        db_connect_1.default.connect().then(con => {
            let user = new users_entity_1.default();
            console.log('connected ....', process.env.FOO);
            user.firstName = 'Jeewan000';
            user.lastName = 'Aryal2';
            user.email = 'jeewan2@gmail.com';
            user.phone = '972-251-3155';
            user.password = 'pass';
            let userRepository = con[0].getRepository(users_entity_1.default);
            // userRepository.find({ email: 'jeewan@gmail.com' }).then(data => {
            //     console.log(data);
            // });
            userRepository.find({ email: 'jeewan@gmail.com' }).then(data => {
                this.log.info(data);
                if (data.length > 0) {
                    bcrypt.compare(req.body.password, data[0].password, (err, match) => {
                        if (match) {
                            let ts = Date.now();
                            const user = { username: req.body.username, password: req.body.password };
                            const accessToken = jwt.sign(user, process.env.AUTH_KEY);
                            res.json({
                                result: false,
                                message: 'password matches'
                            });
                        }
                        else {
                            res.json([{
                                    result: false,
                                    message: 'password does not match'
                                }]);
                        }
                    });
                }
                else {
                    res.json([{
                            result: false,
                            message: 'no record found'
                        }]);
                }
            }, err => {
                res.json([{
                        result: false,
                        message: 'error 1'
                    }]);
            });
        }, err => {
            res.json([{
                    result: false,
                    message: 'error 2'
                }]);
        });
    }
}
exports.default = new Login();
//# sourceMappingURL=login.js.map