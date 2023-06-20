var express = require('express');
const User = require('../models/user');
var router = express.Router();

router.post("/", async function (req, res, next) {
    if (!req.session.user._id ) {
        return res.redirect('login', {
            layout: true,
            page: 'login',
            req
        });

    }

    try {
        
        await User.findByIdAndUpdate(req.session.user._id,req.body);
        let user = await User.findOne({ _id: req.session.user._id });

        // Update the user details    
        req.session.user = user;

        res.redirect('/personalArea/view');

    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, error: err.message });
    }
})

module.exports = router;