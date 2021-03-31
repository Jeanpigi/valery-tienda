// db
import { getAllProducts  } from '@firebase/db';

const getProducts =  (req, res) => {
    getAllProducts().then((results) => {
        const products = results;
        res.status(200).json(products);
    }).catch(() => {
        res.status(404).end()
    })
}

export default getProducts;