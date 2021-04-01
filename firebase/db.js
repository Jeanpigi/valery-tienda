import firebase from 'firebase/app'
import 'firebase/firestore'

// FireStore
export const addProducts = async (products) => {
    await firebase.firestore().collection('products').doc().set(products).then(() => {
        console.log('Document successfully written!');
    }).catch((error) => {
        console.log(error);
    })
};

export const getAllProducts = async () => {
    return await firebase.firestore().collection('products').get().then(({ docs }) => {
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

export const deleteProduct = async (id) => {
    await firebase.firestore().collection('products').doc(id).delete().then(() => {
        console.log('Document successfully deleted!');
    }).catch(error => console.log(error));
};

export const updateProduct = async (id, dato) => {
    await firebase.firestore().collection('products').doc(id).update(dato).then(() => {
        console.log('Document successfully updated!');
    }).catch(error => {
        console.log(error);
    })
};
