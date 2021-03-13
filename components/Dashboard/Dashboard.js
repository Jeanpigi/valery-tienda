import React, { useState, useEffect } from 'react';
// Components
import Button from '@components/Button/Button';
// Db
import { addProducts } from '@lib/db';
import { storageFirebase  } from '@lib/firebase';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (file) {
            const uploadTask = storageFirebase.ref().child(`images/${file.name}`).put(file);
            uploadTask.on('state_changed', (snapshot) => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress} % done`);
            }, (error) => {
                console.log(error);
            }, () => {
                console.log('on clomplete');
                uploadTask.snapshot.ref.getDownloadURL().then(setUrl);
            })
        }
    }, [file])

    const handleChange = (e) => {
        const image = e.target.files[0];
        setFile(image);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addProducts({
            name,
            description,
            price,
            url,
        });

        setName('');
        setDescription('');
        setPrice('');
        setFile(null);
        setUrl('');
    };

    return (
        <>
            <div className="profile_dashboard">
                <form className="dashboard_form">
                    <label htmlFor="producto">
                        <span>Nombre del producto</span>
                        <input id="producto" type="text" value={name} onChange={({target}) => setName(target.value)} />
                    </label>

                    <label htmlFor="description">
                        <span>Descripción del producto</span>
                        <textarea
                            id="description"
                            type="text"
                            value={description}
                            rows="7"
                            cols="50"
                            onChange={({target}) => setDescription(target.value)} />
                    </label>

                    <label htmlFor="precio">
                        <span>Precio del producto</span>
                        <input id='precio' type="number" value={price} onChange={({target}) => setPrice(target.value)} />
                    </label>

                    <div>
                        <span>Subir Imagen</span>
                        <input type="file" onChange={handleChange}  />
                        {url && <img src={url} width="10px" height="10px" />}
                    </div>

                    <Button onClick={handleSubmit} type='button'>Guardar Producto</Button>
                </form>
            </div>
            <style jsx>
                {`
                    .profile_dashboard {
                        margin: 0 2rem;
                    }

                    .profile_dashboard > h1 {
                        font-weight: 500;
                        margin-bottom: 2rem;
                        text-align: center;
                    }

                    .dashboard_form  {
                        background-color: #672E8C;
                        color: #F4ED42;
                        text-align: center;
                        height: fit-content;
                        border-radius: .5rem;
                        border: 0.1rem solid #672E8C;
                        padding: 2rem;
                    }

                    .dashboard_form > label {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 3rem;
                    }

                    .dashboard_form > label > span {
                        padding-bottom: 1rem;
                        font-size: 1.6rem;
                    }

                    @media screen and (min-width: 766px) {
                        .profile_dashboard {
                            margin: 0 21rem;
                        }
                    }
            `}
            </style>
        </>
    )
};

export default Dashboard;
