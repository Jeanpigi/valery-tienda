import { dbFirebase } from '@lib/firebase';

// FireStore
export const getAllProducts = async () => {
    await dbFirebase.collection('products').get().then((querySnapShot) => {
        querySnapShot.forEach((doc => {
            console.log(doc.id, doc.data());
        })).catch(error => console.log(error));
    })
};

export const addProducts = async (products) => {
    await dbFirebase.collection('products').doc().set(products).then(() => {
        console.log('Document successfully written!');
    }).catch((error) => {
        console.log(error);
    })
};

export const getProduct = async (id) => {
    await dbFirebase.collection('products').doc(id).get().then(() => {
        console.log('Obteniendo documento');
    }).catch(error => console.log(error))
};

export const deleteProduct = async (id) => {
    await dbFirebase.collection('products').doc(id).delete().then(() => {
        console.log('Document successfully deleted!');
    }).catch(error => console.log(error));
};

export const updateProduct = async (id, dato) => {
    await dbFirebase.collection('products').doc(id).update(dato).then(() => {
        console.log('Document successfully updated!');
    }).catch(error => {
        console.log(error);
    })
};