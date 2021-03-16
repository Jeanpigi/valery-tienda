import React from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <>
            {
                progress > 0 &&
                <div className="progressBar" style={{ width: `${progress}%` }}>
                    <span>Carga de imágen: {progress}%</span>
                </div>
            }
        </>
    )
}

export default ProgressBar;
