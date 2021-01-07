const response = (res, status, data) => {
    const result = {};
    result.status = status || 200;
    result.data = data;
    return res.status(result.status).send(result);
};

module.exports = response;