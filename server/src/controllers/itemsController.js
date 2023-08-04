const { auth, isAuth } = require('../middlewares/authMdwr');
const itemsManager = require('../managers/itemsManager');
const router = require('express').Router();
// const userManager = require('../managers/userManager');
// const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/dashboard', auth, async (req, res) => {
    try {
      const items = await itemsManager.getAll().lean();
      res.json(items);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// router.get('/:animalId/details', async (req, res) => {
//     const animal = await itemsManager.getOne(req.params.animalId).lean();
//     const owner = await userManager.findUser(animal.owner);
//     const ownerEmail = owner.email
//     const isOwner = animal.owner.toString() === req.user?._id
//     const isDonated = animal.donations?.some(id => id == req.user?._id);

//     res.render('animals/details', { animal, isOwner, ownerEmail ,isDonated});
// });

// router.get('/search', async (req, res) => {
//     const { location } = req.query;
//     const animal = await itemsManager.search(location);
//     res.render('animals/search', { animal })
// })

// router.get('/:animalId/donate', auth, async (req, res) => {

//     await itemsManager.donate(req.user._id, req.params.animalId);

//     res.redirect(`/animals/${req.params.animalId}/details`)
// });

// router.get('/:animalId/edit', isAuth, async (req, res) => {
//     const animal = await itemsManager.getOne(req.params.animalId).lean();

//     res.render('animals/edit', { animal });
// });

// router.post('/:animalId/edit', isAuth ,async (req, res) => {
//     const animalData = req.body;

//     try {
//         await itemsManager.edit(req.params.animalId, animalData);

//         res.redirect(`/animals/${req.params.animalId}/details`);
//     } catch (err) {
//         res.render('animals/edit', {
//             error: getErrorMessage(err),
//             animal: animalData,
//         })
//     }

// });

// router.get('/:animalId/delete', isAuth, async (req, res) => {
//     await itemsManager.delete(req.params.animalId);
//     res.redirect('/items/dashboard')
// });


router.post('/create', auth,async (req, res) => {
    const itemsData = req.body;
   
    try {
        const item = await itemsManager.create(req.user._id, itemsData);
        res.send({item})

    } catch (err) {
        // res.render( 'animals/create' , { error: getErrorMessage(err), 
        //                             animal: itemsData });
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;