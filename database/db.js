import { dbFirebase } from './firebase';

//FireBase Database
export const getAllProducts = async () => {
    const products = await dbFirebase.collection('products').get();
    products.forEach((docs) => {
        return docs;
    })
}

