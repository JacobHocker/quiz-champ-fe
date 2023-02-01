import React from 'react';



export default function ProgressBar({ progress, max}) {

    const progressPercentage = Math.round((progress/max) * 100);

    
    const containerStyles = {
        height: 20,
        width: '50%',
        backgroundColor: "#a4b3b6a9",
        borderRadius: 50,
        margin: 50
    }
    
    const fillerStyles = {
        height: '100%',
        width: `${progressPercentage}%`,
        backgroundColor: 'var(--blue-secondary)',
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'center'
    }
    
    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'var(--roboto-text)'
    }
    
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${progressPercentage}%`}</span>
            </div>
        </div>
    )
}