const router = require('express').Router();
const userController = require('./controllers/userController');
const itemsController = require('./controllers/itemsController')

router.use('/users', userController);
router.use('/items', itemsController);
router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;