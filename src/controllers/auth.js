const authModel = require('../models/auth');
const { response } = require('../helpers');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

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

module.exports = { postRegister };