"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_entity_1 = require("../entities/users.entity");
const membership_entity_1 = require("../entities/membership.entity");
const account_entity_1 = require("../entities/account.entity");
class Environment {
    constructor() {
        this.db = [{
                name: "mysql",
                type: "mysql",
                host: "localhost",
                //port: 3306,
                username: "root",
                password: "",
                database: "test",
                entities: [users_entity_1.default, membership_entity_1.default, account_entity_1.default],
                synchronize: true,
                extra: { max: 10 }
            }];
    }
    getConnection() {
        return this.db;
    }
}
exports.default = new Environment();
//# sourceMappingURL=environment.js.map