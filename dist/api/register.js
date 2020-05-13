"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connect_1 = require("../config/db-connect");
const bcrypt = require("bcryptjs");
const tslog_1 = require("tslog");
const users_entity_1 = require("../entities/users.entity");
const account_1 = require("./account");
class Register {
    //account: Account;
    constructor() {
        this.log = new tslog_1.Logger();
    }
    doRegister(req, res) {
        db_connect_1.default.connect().then(con => {
            let users = new users_entity_1.default();
            users.firstName = req.body.firstName;
            users.lastName = req.body.lastName;
            users.email = req.body.email;
            users.phone = req.body.phone;
            users.password = bcrypt.hashSync(req.body.password, 10);
            let userRepository = con[0].getRepository(users_entity_1.default);
            userRepository.find({ email: req.body.email }).then(data => {
                if (data.length <= 0) {
                    con[0].manager.save(users).then(rs => {
                        this.createAccount(rs);
                        res.json([{
                                result: true,
                                message: 'Registration success'
                            }]);
                    });
                }
                else {
                    res.json([{
                            result: false,
                            message: 'Registration unsuccess'
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
    createAccount(rs) {
        let accountData = {
            userId: rs.userId,
            headline: '',
            description: '',
            regionStates: '',
            regionCities: '',
            imageProfile: '',
            imageSlider: '',
            contactEmail: '',
            contactPhone: '',
            contactWebsite: ''
        };
        account_1.default.setAccount(accountData);
    }
}
exports.default = new Register();
//# sourceMappingURL=register.js.map