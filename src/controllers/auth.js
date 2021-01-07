const authModel = require('../models/auth');
const { response } = require('../helpers');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const postRegister = async (req, res) => {
    try {
        const errors = validationResult(req).array();
        if (!errors.length){
            const setData = req.body;
            const checkUser = await authModel.checkUser(setData);
            if (checkUser[0]){
                return response(res, 403, { message: 'Email already exist' });
            }
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newData = { ...setData, password: hash };
            const result = await authModel.postRegister(newData);
            response(res, 201, { data: result, message: 'Register Success' });
        } else {
            response(res, 403, {message: errors });
        }
    } catch(err) {
        response(res, 500, { message: err.message });
    }
};

const postLogin = async (req, res) => {
    try {
        const setData = req.body;
        const result = await authModel.checkUser(setData);
        if (!result[0]){
            res.status(401).send({ message: 'Email no found' });
        }
        let check = true;
        if (result[0].role != 6){
            check = bcrypt.compareSync(setData.password, result[0].password);
        }
        if (check){
            const { id, name, email, phone, pin, photo } = result[0];
            const token = jwt.sign({ id, name, email, phone, pin, photo }, process.env.PRIVATE_KEY);
            let roles = 'user';
            if (role == 6){
                roles = 'admin'
            };
            response(res, 200, { message: 'Login Success', token, roles })
        } else {
            res.status(401).send({ message: 'Invalid Password' });
        }
    } catch(err) {
        response(res, 500, { message: err.message });
    }
};

module.exports = { postRegister, postLogin };