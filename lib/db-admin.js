import { dbFirestore } from '@lib/admin';

export const getAllProducts = async () => {
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