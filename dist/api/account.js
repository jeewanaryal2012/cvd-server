"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connect_1 = require("../config/db-connect");
const tslog_1 = require("tslog");
const account_entity_1 = require("../entities/account.entity");
class Account {
    constructor() {
        this.log = new tslog_1.Logger();
    }
    setAccount(accountData) {
        db_connect_1.default.connect().then(con => {
            let accountEntity = new account_entity_1.default();
            accountEntity.userId = accountData.userId;
            accountEntity.headline = accountData.headline;
            accountEntity.description = accountData.description;
            accountEntity.regionStates = accountData.regionStates;
            accountEntity.regionCities = accountData.regionCities;
            accountEntity.imageProfile = accountData.imageProfile;
            accountEntity.imageSlider = accountData.imageSlider;
            accountEntity.contactEmail = accountData.contactEmail;
            accountEntity.contactPhone = accountData.contactPhone;
            accountEntity.contactWebsite = accountData.contactWebsite;
            let userRepository = con[0].getRepository(account_entity_1.default);
            userRepository.find().then(data => {
                con[0].manager.save(accountEntity).then(rs => {
                    this.log.info(rs);
                });
            }, err => {
            });
        }, err => {
        });
    }
    saveAccount(req, res) {
        //console.log('test');
        db_connect_1.default.connect().then(con => {
            let accountEntity = new account_entity_1.default();
            accountEntity.userId = req.body.userId;
            accountEntity.headline = req.body.headline;
            accountEntity.description = req.body.description;
            accountEntity.regionStates = req.body.regionStates;
            accountEntity.regionCities = req.body.regionCities;
            accountEntity.imageProfile = req.body.imageProfile;
            accountEntity.imageSlider = req.body.imageSlider;
            accountEntity.contactEmail = req.body.contactEmail;
            accountEntity.contactPhone = req.body.contactPhone;
            accountEntity.contactWebsite = req.body.contactWebsite;
            let userRepository = con[0].getRepository(account_entity_1.default);
            userRepository.find().then(data => {
                if (data.length <= 0) {
                    con[0].manager.save(accountEntity).then(rs => {
                        this.log.info(rs);
                    });
                    res.json([{
                            result: true,
                            message: 'Registration success'
                        }]);
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
}
exports.default = new Account();
//# sourceMappingURL=account.js.map