const router = require('express').Router();
const userManager = require('../managers/userManager');





router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await userManager.login(email, password);
        
        res.cookie('token', token);
        res.send({token})

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

})



router.post('/register', async (req, res) => {
    
    const { email, password, passwordRepeat } = req.body;
    try {
       const token =  await userManager.register({ email, password , passwordRepeat });
       
       res.cookie('token', token)
        res.send({token})
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

});

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    
})
module.exports = router;