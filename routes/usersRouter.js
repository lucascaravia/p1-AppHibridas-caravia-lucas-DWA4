import express from "express";

const router = express.Router();
router.use( express.json());

router.get('/', (req, res) => {
    console.log('GET Users')
    res.status(200).json( { msg: 'GET USERS'})
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('GET Users ', id)
    res.status(200).json( { msg: 'GET USERS ' + id})
})

router.post('/', (req, res) => {
    console.log('GET Users')
    res.status(200).json( { msg: 'POST USERS'})
})

router.delete('/:id', (req, res) => {
    console.log('DELETE Users')
    res.status(200).json( { msg: 'DELETE USERS'})
})

export default router;