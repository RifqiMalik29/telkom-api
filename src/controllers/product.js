const productModel = require('../models/product');
const { resCustom, customResponse } = require('../helpers/res');

const getAllProduct = async (req, res) => {
    try {
        const result = await productModel.getAllProduct();
        const response = customResponse(200, 'OK', result);

        resCustom(res, response);
    } catch(err) {
        const response = customResponse(404, err.message);
        resCustom(res, response);
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productModel.getProductById(id);
        const response = customResponse(200, 'OK', result);

        resCustom(res, response);
    } catch(err) {
        const response = customResponse(404, err.message);
        resCustom(res, response);
    }
};

const postProduct = async (req, res) => {
    try {
        const setData = req.body;
        const result = await productModel.postProduct(setData);
        const response = customResponse(201, 'Created', result);

        resCustom(res, response);
    } catch(err) {
        const response = customResponse(404, err.message);
        resCustom(res, response);
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const setData = req.body;
        const result = await productModel.updateProduct(id, setData);
        const response = customResponse(201, 'Updated', result);

        resCustom(res, response);
    } catch(err) {
        const response = customResponse(500, err.message);
        resCustom(res, response);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productModel.deleteProduct(id);
        const response = customResponse(200, 'Deleted', result);

        resCustom(res, response);
    } catch(err) {
        const response = customResponse(404, err.message);
        resCustom(res, response);
    }
};

module.exports = { getAllProduct, getProductById, postProduct, updateProduct, deleteProduct }