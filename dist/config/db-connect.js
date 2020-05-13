"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const environment_1 = require("../environment/environment");
class DBConnect {
    constructor() {
        this.con = environment_1.default.getConnection();
        this.connections = typeorm_1.createConnections(this.con);
    }
    connect() {
        //const connections = createConnections(this.con);
        return this.connections;
    }
    disconnect() {
        this.connections.close();
    }
}
exports.default = new DBConnect();
//# sourceMappingURL=db-connect.js.map