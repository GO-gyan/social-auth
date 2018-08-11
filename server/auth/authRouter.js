const Router = require('express').Router();
const controller = require('./authController');

Router.get('/:test', (req, res) => {
    try {
        return res.json(req.params.test);
    } catch (err) {
        console.error("Caught exception: ", err);
        return res.status(500).json({
            error: 'Something went wrong while pathing, please try later..!'
        });
    }
});

module.exports = Router;