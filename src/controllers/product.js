const productModel = require('../models/product');
const { resCustom, customResponse } = require('../helpers/response');

const getAllProductAsc = async (req, res) => {
    try {
        const { q, page, limit } = req.query;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = await productModel.getAllProductAsc(q, page, limit);
        const resultPagination = result.slice(startIndex, endIndex)
        const response = customResponse(200, { msg: 'OK', page: page}, resultPagination);

        resCustom(res, response);
    } catch(err) {
        const response = customResponse(404, err.message);
        resCustom(res, response);
    }
};

const getAllProductDesc = async (req, res) => {
    try {
        const { q, page, limit } = req.query;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = await productModel.getAllProductDesc(q, page, limit);
        const resultPagination = result.slice(startIndex, endIndex);
        const response = customResponse(200, { msg: 'OK', page: page }, resultPagination);

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

module.exports = { getAllProductAsc, getAllProductDesc, getProductById, postProduct, updateProduct, deleteProduct }