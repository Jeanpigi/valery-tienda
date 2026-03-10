import { getFirestore, doc, getDoc } from 'firebase/firestore';
import app from '@firebase/firebase';

const getProduct = async (req, res) => {
    const { id } = req.query;

    try {
        const db = getFirestore(app);
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }

        res.status(200).json({ ...docSnap.data(), id: docSnap.id });
    } catch (error) {
        res.status(500).end();
    }
};

export default getProduct;
