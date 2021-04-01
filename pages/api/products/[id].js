import firebase from 'firebase/app'
import 'firebase/firestore'

const getProduct = async (req, res) => {
    const { query } = req;
    const { id } = query;

    await firebase.firestore().collection('products').doc(id).get().then(doc => {
        const data = doc.data()
        res.json(data);
    }).catch(() => {
        res.status(404).end()
    })
}

export default getProduct;