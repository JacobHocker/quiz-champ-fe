import React from 'react';
import './AvatarModal.scss';


export default function AvatarModal({ avatarName, setAvatarName, avatarList, avatar, setShowModal, setAvatar }) {
    

    
    
    
    return (
        <div className='avatar-modal'>
            <div className='avatar-modal-content'>
                <div className='avatar-modal-header'>
                    <h1 className='avatar-modal-title'>
                        {avatarName === "" ? 'Choose Avatar' : `${avatarName} selected!`}
                    </h1>
                </div>
                <div className='avatar-modal-body'>
                    {avatarList.map((avi) => (
                        <img 
                        key={avi.id} 
                        src={avi.avatarAddress} 
                        alt={avi.avatarName} 
                        className={avatar === avi.avatarAddress ? 'selected-reg-avatar' : 'reg-avatar'}
                        onClick={() => {
                            setAvatar(avi.avatarAddress)
                            setAvatarName(avi.avatarName)
                        }}
                        />
                    ))}
                </div>
                <div className='avatar-modal-footer'>
                    <button className='auth-btn' onClick={() => {setShowModal(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}