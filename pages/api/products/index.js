// db
import { getAllProducts } from '@lib/db';

const getProducts = (req, res) => {
    getAllProducts().then((results) => {
        const products = results;
        res.status(200).json(products);
    }).catch(() => {
        res.status(405).end()
    })
}

export default getProducts;