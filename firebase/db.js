import firebase from 'firebase/app'
import 'firebase/firestore'

// FireStore
export const addProducts = async (products) => {
    await firebase.firestore().collection('products').doc().set(products).then(() => {
        alert('Data was successfully sent to cloud firestore!');
    }).catch((error) => {
        alert(error);
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

export const  getAllProductsRealTime = () => {
    firebase.firestore().collection('products').onSnapshot((doc) => {
        const data = doc.data();
        return data
    })
}

export const deleteProduct = async (id) => {
    await firebase.firestore().collection('products').doc(id).delete().then(() => {
        console.log('Document successfully deleted!');
    }).catch(error => alert(error));
};

export const updateProduct = async (id, dato) => {
    await firebase.firestore().collection('products').doc(id).update(dato).then(() => {
        console.log('Document successfully updated!');
    }).catch(error => {
        alert(error);
    })
};
