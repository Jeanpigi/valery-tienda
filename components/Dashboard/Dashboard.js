import React from 'react';
// Components
import Button from '@components/Button/Button';


const Dashboard = ({ name, description, price, handleInputChange, handleSubmit }) => {
    return (
        <>
            <div className="profile_dashboard">
                <form className="dashboard_form">
                    <label htmlFor="producto">
                        <span>Nombre del producto</span>
                        <input id="producto" type="text" value={name} onChange={handleInputChange} />
                    </label>

                    <label htmlFor="description">
                        <span>Descripción del producto</span>
                        <textarea
                            id="description"
                            type="text"
                            value={description}
                            rows="7"
                            cols="50"
                            onChange={handleInputChange} />
                    </label>

                    <label htmlFor="precio">
                        <span>Precio del producto</span>
                        <input id='precio' type="number" value={price} onChange={handleInputChange} />
                    </label>

                    <Button onClick={handleSubmit} type='button'>Guardar Producto</Button>
                </form>
            </div>
            <style jsx>
                {`
                    .profile_dashboard {
                        display: grid;
                        justify-content: center;
                        align-items: center;
                    }

                    .profile_dashboard > h1 {
                        font-weight: 500;
                        margin-bottom: 2rem;
                        text-align: center;
                    }

                    .dashboard_form  {
                        display: grid;
                        gap: 1rem;
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
