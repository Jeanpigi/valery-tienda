import React, { useState, useEffect } from 'react';
// Components
import Button from '@components/Button/Button';
// Db
import { addProducts, upLoadImage } from '@lib/db';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (file) {
            let onProgress = () => {}

            let onError = () => {}

            let onComplete = () => {
                console.log('on clomplete');
                file.snapshot.ref.getDownloadURL().then(setUrl);
            }

            file.on('state_changed', onProgress, onError, onComplete)
        }
    }, [file])

    const handleChange = (e) => {
        const image = e.target.files[0];

        const file = upLoadImage(image);

        setFile(file);
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

                    <label htmlFor="image">
                        <span>Subir Imagen</span>
                        <input id="image" type="file" onChange={handleChange}  />
                        {url && <img src={url} />}
                    </label>

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
            `}
            </style>
        </>
    )
};

export default Dashboard;
