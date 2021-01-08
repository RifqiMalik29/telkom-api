const cartModel = require('../models/cart');
const { customResponse, resCustom } = require('../helpers/res');
const { response } = require('../helpers');

module.exports = {
    addToCart: async (req, res) => {
        try {
            const setData = req.body;
            if (setData.seller == req.token.owner){
                return response(res, 403, { message: "You can't add your own product" });
            } else {
                const result = await cartModel.addToCart(setData);
                response(res, 201, { data: result, message: 'Success add to cart' });
            }
        } catch(err) {
            const custResponse = customResponse(500, err.message);
            resCustom(res, custResponse);
        }
    },

    deleteFromCart: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await cartModel.deleteCart(id);
            const custResponse = customResponse(200, 'Deleted', result);

            resCustom(res, custResponse);
        } catch(err) {
            const custResponse = customResponse(404, err.message);
            resCustom(res, custResponse);
        }
    },

    updateChecklist: async (req, res) => {
        try {
            const { id } = req.params;
            const setData = req.body;
            if (setData.checklist > 1){
                return response(res, 404, { message: 'Error' });
            }
            const result = await cartModel.updateCart(id, setData);
            if (result.affectedRows == 0){
                return response(res, 404, { message: 'ID Not Found' });
            }
            const custResponse = customResponse(201, 'Updated', result);
            console.log(result.affectedRows);

            resCustom(res, custResponse);
        } catch(err) {
            const custResponse = customResponse(500, err.message);
            resCustom(res, custResponse);
        }
    },

    showAllCart: async (req, res) => {
        try {
            const { userId } = req.query;
            const result = await cartModel.getAllCart(userId);
            if (userId != req.token.user_id){
                const custResponse = customResponse(403, 'Forbidden');
                resCustom(res, custResponse);
            } else {
                const custResponse = customResponse(200, 'OK', result);
                resCustom(res, custResponse);
            }
        } catch(err) {
            const custResponse = customResponse(404, err.message);
            resCustom(res, custResponse);
        }
    },
};