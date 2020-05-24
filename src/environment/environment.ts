
import Users from '../entities/users.entity';
import Membership from '../entities/membership.entity';
import Account from '../entities/account.entity';
class Environment {
    db = [{
        // name: "mysql",
        // type: "mysql",
        // host: "cvd-cleaner.mysql.database.azure.com",
        // //port: 3306,
        // username: "passive_income@cvd-cleaner",
        // password: "@Covid2020",
        // database: "cvd",
        // entities: [Users, Membership, Account],
        // synchronize: true,
        // extra: { max: 10 }
        name: process.env.DB_NAME,
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        //port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [Users, Membership, Account],
        synchronize: true,
        extra: { max: 10 }
    }];
    getConnection() {
        return this.db;
    }
}

export default new Environment();