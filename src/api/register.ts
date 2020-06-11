import dbConnect from '../config/db-connect';
import { Request, Response } from "express";
//import Profile from '../entities/profile';
import users from '../entities/users.entity';
import { json } from 'body-parser';
import * as bcrypt from 'bcryptjs';
import { Logger } from "tslog";
import * as jwt from 'jsonwebtoken';
import UsersEntity from '../entities/users.entity';
import account from './account';
import * as SendGrid from 'sendgrid';

export class SendGridMail extends SendGrid.mail.Mail { }
export class SendGridEmail extends SendGrid.mail.Email { }
export class SendGridContent extends SendGrid.mail.Content { }

class Register {
    log: any;
    //account: Account;
    private sendGrid;
    private sendgridApiKey: string
    constructor() {
        this.log = new Logger();
        this.sendGrid = SendGrid('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');
    }

    doRegister(req: Request, res: Response) {
        dbConnect.connect().then(con => {
            let users = new UsersEntity();
            users.firstName = req.body.firstName;
            users.lastName = req.body.lastName;
            users.email = req.body.email;
            users.phone = req.body.phone;
            users.password = bcrypt.hashSync(req.body.password, 10);
            let userRepository = con[0].getRepository(UsersEntity);
            userRepository.find({ email: req.body.email }).then(data => {
                if (data.length === 0) {
                    con[0].manager.save(users).then(rs => {
                        this.createAccount(rs);
                        let mail = new SendGridMail(
                            new SendGridEmail('jeewanaryal@gmail.com'),
                            'Sending with SendGrid is Fun',
                            new SendGridEmail('jeewanaryal@gmail.com'),
                            new SendGridContent('text/html', '<h1>This is h1 tag</h1>'));
                        this.send(mail).then(mailRes => {
                            this.log.info(mailRes);
                        });
                        res.json([{
                            result: true,
                            message: 'Registration success. Now, you can login with your email and password'
                        }]);
                    });
                } else {
                    res.json([{
                        result: false,
                        message: 'Registration unsuccess. User already exixts.'
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
        account.setAccount(accountData);
    }

    send(mail: SendGridMail): Promise<any> {

        let request = this.sendGrid.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });

        return this.sendGrid.API(request);
    }

}

export default new Register();