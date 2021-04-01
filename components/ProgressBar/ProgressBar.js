import React from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <>
            {
                progress > 0 &&
                <div className="progressBar">
                    <progress value={progress} max='100' style={{ width: '100%' }}>Carga de imágen: {progress}%</progress>
                </div>
            }
        </>
    )
}

export default ProgressBar;
