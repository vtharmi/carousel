const express = require('express');
const TestController = require('../controllers/carouselLoader');

const router = express.Router();


router.get("/api/carousel", (req, res) => {
    TestController.getImages(req.query)
        .then(result => {
            console.log("res", res);
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: "failed to retrieve",
                err: err
            })
        })
})

module.exports = router;