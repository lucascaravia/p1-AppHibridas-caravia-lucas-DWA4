import express from "express";

const router = express.Router();
router.use( express.json());

router.get('/', (req, res) => {
    console.log('GET Carrito')
    res.status(200).json( { msg: 'GET CAR'})
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('GET card ', id)
    res.status(200).json( { msg: 'GET card ' + id})
})

router.post('/', (req, res) => {
    console.log('ADD car')
    res.status(200).json( { msg: 'POST car'})
})

router.delete('/:id', (req, res) => {
    console.log('DELETE Car')
    res.status(200).json( { msg: 'DELETE Car'})
})

export default router;