const userModel = require('../models/user');
const authModel = require('../models/auth');
const { resCustom, customResponse } = require('../helpers/res');
const { response } = require('../helpers');
const bcrypt = require('bcrypt');

module.exports = {
    getUserInfo: async (req, res) => {
        try {
            const id = req.token.user_id;
            const result = await userModel.userInfo(id);
            const custom = customResponse(200, 'OK', result);

            resCustom(res, custom);
        } catch(err) {
            const custom = customResponse(404, err.message);
            resCustom(res, custom)
        }
    },

    searchStore: async (req, res) => {
        try {
            const { store } = req.query;
            const userId = req.token.user_id;
            const result = await userModel.searchStore(store, userId);
            const custom = customResponse(200, 'OK', result);
            
            resCustom(res, custom);
        } catch(err) {
            const custom = customResponse(404, err.message);
            resCustom(res, custom);
        }
    },

    updateUser: async (req, res) => {
        try {
            const id = req.token.user_id;
            const setData = req.body;

            if (setData.currPassword && setData.password){
                const result = await authModel.checkUser(req.token);
                const check = bcrypt.compareSync(setData.currPassword, result[0].password);
                if (check){
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(setData.password, salt);
                    setData.password = hash;
                    delete setData.currPassword;
                } else {
                    return response(res, 403, { message: 'Invalid Password' });
                }
            }

            const result = await userModel.updateUser(id, setData);
            if (result.affectedRows == 1){
                const result = await userModel.userInfo(req.token.user_id);
                return response(res, 201, { message: `${Object.keys(req.body)} successfully updated`, data: result });
            }
        } catch (err){
            return response(res, 500, { message: err.message });
        }
    },
};