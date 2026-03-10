import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
} from 'firebase/firestore';
import app from './firebase';

const db = getFirestore(app);

export const addProducts = async (products) => {
    try {
        await addDoc(collection(db, 'products'), products);
        alert('Producto guardado exitosamente.');
    } catch (error) {
        alert(error.message);
    }
};

export const getAllProducts = async () => {
    const snapshot = await getDocs(collection(db, 'products'));
    return snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
};

export const deleteProduct = async (id) => {
    try {
        await deleteDoc(doc(db, 'products', id));
    } catch (error) {
        alert(error.message);
    }
};

export const updateProduct = async (id, dato) => {
    try {
        await updateDoc(doc(db, 'products', id), dato);
    } catch (error) {
        alert(error.message);
    }
};
