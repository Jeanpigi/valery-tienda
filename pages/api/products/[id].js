import { dbFirestore } from '@lib/admin';

const getProduct = async (req, res) => {
    const { query } = req;
    const { id } = query;

    await dbFirestore.collection('products').doc(id).get().then(doc => {
        const data = doc.data()
        res.json(data);
    }).catch(() => {
        res.status(404).end()
    })
}

export default getProduct;