const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const jwtPassword = "secret123";
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const user = req.body.username;
    const pass = req.body.password;
    await Admin.create({username:user, password:pass});
    res.status(200).json({message: 'Admin created successfully'});
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const user = req.body.username;
    const pass = req.body.password;
    Admin.findOne({username:user, password:pass}).then((value) => {
        if(value){
            const token = jwt.sign(user, jwtPassword);
            res.status(200).json({ token: token });
        } else {
            res.sendStatus(404);
        }
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;