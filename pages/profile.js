import React from 'react';
// Components
import Dashboard from '@components/Dashboard/Dashboard';

const profile = () => {

  return (
    <>
      <div className="profile">
        <div className="profile_container">
          <h1>Bienvenido a tu cuenta de usuario</h1>
          <div className="profile_user">
            <i className="far fa-user" aria-hidden />
          </div>
        </div>
        <Dashboard />
      </div>
      <style jsx>
        {`
            .profile_container {
              display: flex;
              flex-direction: column;
              margin: 1rem;
              align-items: center;
            }
            .profile_user {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 1rem;
            }
            .button {
              margin-top: 1rem;
            }
        `}
      </style>
    </>
  );
};

export default profile;
