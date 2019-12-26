const { Router } = require('express');
const router = Router();

router.post('/create', async function (req, res) {
    try {
        const { firstName, lastName, birthday } = req.body;
        console.log(firstName);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong', error: e });
    }
})

router.post('/getAll', async function (req, res) {
    try {
        console.log('All players');
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong', error: e });
    }
})

module.exports = router