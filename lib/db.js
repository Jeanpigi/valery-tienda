import { dbFirestore } from '@lib/firebase';

// FireStore
const addProducts = async (products) => {
    await dbFirestore.collection('products').doc().set(products).then(() => {
        console.log('Document successfully written!');
    }).catch((error) => {
        console.log(error);
    })
};

const getAllProducts = async () => {
    return await dbFirestore.collection('products').get().then(({ docs }) => {
        return docs.map((doc) => {
            const data = doc.data()
            const id = doc.id

            return {
                ...data,
                id,
            }
        })
    })
}

const deleteProduct = async (id) => {
    await dbFirestore.collection('products').doc(id).delete().then(() => {
        console.log('Document successfully deleted!');
    }).catch(error => console.log(error));
};

const updateProduct = async (id, dato) => {
    await dbFirestore.collection('products').doc(id).update(dato).then(() => {
        console.log('Document successfully updated!');
    }).catch(error => {
        console.log(error);
    })
};

export {
    addProducts,
    getAllProducts,
    deleteProduct,
    updateProduct
}