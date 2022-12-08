import express from 'express';
import Shopping from '../models/shoppingModel.js';
import data from '../data.js';

const shoppingRouter = express.Router();

shoppingRouter.post('/', async (req, res) => {//Post Request - On Buy Now - Get the information and send it to addShopping function in db.js 
    var brand = req.body.brand;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var name = req.body.name;
    var email = req.body.email;
    console.log(brand);
    const data = {
        products: [
            {
                // _id: '1',
                name: name,
                email: email,
                brand: brand,
                quantity: quantity,
                price: price,
            },
        ]
    }
    const addedShopping = await Shopping.insertMany(data.products);
    res.send({ addedShopping });
});
export default shoppingRouter;