module.exports = {
    response: (res, status, data) => {
        const result = {};
        result.status = status || 200;
        result.data = data
        return res.status(status).send(result);
    }
}