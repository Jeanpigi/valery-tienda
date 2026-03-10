import React from 'react';
// Components
import Dashboard from '@components/Dashboard/Dashboard';
import Button from '@components/Button/Button';

const Profile = ({ user, logout }) => {
    return (
        <>
            <div className="profile">
                <div className="profile_container">
                    <div className="profile_user">
                        <div className="profile_avatar">
                            <i className="far fa-user" aria-hidden />
                        </div>
                        <div className="profile_info">
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                        <Button onClick={() => logout()} type='button'>Cerrar Sesión</Button>
                    </div>
                </div>
            </div>
            <Dashboard />
            <style jsx>
                {`
                    .profile {
                        padding: 2.4rem 2rem 1rem;
                    }

                    .profile_container {
                        max-width: 640px;
                        margin: 0 auto;
                    }

                    .profile_user {
                        display: flex;
                        align-items: center;
                        gap: 1.6rem;
                        background: white;
                        border-radius: 16px;
                        padding: 2rem;
                        box-shadow: 0 4px 24px rgba(100, 0, 153, 0.08);
                        border: 1px solid rgba(171, 62, 216, 0.15);
                        flex-wrap: wrap;
                    }

                    .profile_avatar {
                        width: 5.6rem;
                        height: 5.6rem;
                        border-radius: 50%;
                        background: var(--color-primary);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 2.4rem;
                        color: white;
                        flex-shrink: 0;
                    }

                    .profile_info {
                        flex: 1;
                    }

                    .profile_info h2 {
                        font-size: 1.8rem;
                        font-weight: 700;
                        color: var(--color-five);
                        margin-bottom: 0.4rem;
                    }

                    .profile_info p {
                        font-size: 1.4rem;
                        color: #666;
                        font-weight: 300;
                    }
                `}
            </style>
        </>
    )
}

export default Profile
