// db
import { dbFirestore } from '@lib/firebase';
// db
import { getAllProducts  } from '@lib/db';

const getProducts =  (req, res) => {
    getAllProducts().then((results) => {
        const products = results;
        res.status(200).json(products);
    })
}

export default getProducts;