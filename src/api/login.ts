import dbConnect from '../config/db-connect';
import Users from '../entities/users.entity';
import { json } from 'body-parser';
import * as bcrypt from 'bcryptjs';
import { Logger } from "tslog";
import * as jwt from 'jsonwebtoken';

class Login {
    log: any;
    constructor() {
        this.log = new Logger();
    }

    doLogin(req, res) {
        //console.log('test');
        dbConnect.connect().then(con => {
            //this.log.info(con);
            let userRepository = con[0].getRepository(Users);
            userRepository.find({ email: req.body.email }).then(data => {

                if (data.length > 0) {
                    bcrypt.compare(req.body.password, data[0].password, (err, match) => {
                        if (match) {
                            const user = { username: req.body.username, password: req.body.password };
                            const accessToken = jwt.sign(user, process.env.AUTH_KEY);
                            this.log.info(data);
                            res.json({
                                result: true,
                                message: 'password matches 123',
                                accessToken,
                                user: {
                                    firstName: data[0].firstName,
                                    lastName: data[0].lastName,
                                    email: data[0].email,
                                    phone: data[0].phone,
                                    profilePicture: ''
                                }
                            });
                        } else {
                            res.json([{
                                result: false,
                                message: 'password does not match'
                            }]);
                        }
                    });
                } else {
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

export default new Login();