const { auth, isAuth } = require('../middlewares/authMdwr');
const itemsManager = require('../managers/itemsManager');
const router = require('express').Router();


router.get('/dashboard', auth, async (req, res) => {
    try {
      const items = await itemsManager.getAll().lean();
      res.json(items);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  router.get('/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    const item = await itemsManager.getOne(itemId).lean();
    const isOwner = item.owner.toString() === req.user?._id;
    
    
    res.json({ item, isOwner });
  });

router.post('/:itemId/edit' ,async (req, res) => {
    const itemData = req.body;
    console.log(itemData)
    try {
       const item = await itemsManager.edit(req.params.itemId, itemData);
        
        res.send({item})
    } catch (err) {
      res.status(400).json({ error: err.message });
    }

});

router.get('/:itemId/delete',  async (req, res) => {
   const deleted = await itemsManager.delete(req.params.itemId);

   res.send({deleted})
});


router.post('/create', auth,async (req, res) => {
    const itemsData = req.body;
   
    try {
        const item = await itemsManager.create(req.user._id, itemsData);
        res.send({item})

    } catch (err) {
        
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;