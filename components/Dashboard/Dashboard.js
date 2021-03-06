import React, { useState, useEffect } from 'react';
// Components
import Button from '@components/Button/Button';
import ProgressBar from '@components/ProgressBar/ProgressBar'
// Firebase
import firebase from 'firebase/app';
import 'firebase/storage';
// Db
import { addProducts } from '@firebase/db';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (file) {
            const uploadTask = firebase.storage().ref().child(`images/${file.name}`).put(file);
            uploadTask.on('state_changed', (snapshot) => {
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
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

                    <div className="dashboard_upload_img">
                        <label htmlFor="url">
                            <span>Subir Imagen</span>
                            <input id="url" type="file" onChange={handleChange} />
                        </label>
                        <ProgressBar progress={progress} />
                        {url && <img src={url} width="100px" height="100px" />}
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
                        background: var(--color-primary);
                        color: var(--color-white);
                        text-align: center;
                        height: fit-content;
                        border-radius: .5rem;
                        border: 0.1rem solid var(--color-four);
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

                    .dashboard_upload_img {
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                        height: 30rem;
                        align-items: center;
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
