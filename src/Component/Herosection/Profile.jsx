import React from 'react';

import user from '../../assets/user.png'
import './hero.css'

const ProfileWithDots = () => {
  return (
    <div className='relative'>
        <div className='rounded-2xl overflow-hidden header__image'>
            <img src={user} alt="" />

        </div>

    </div>
  );
};

export default ProfileWithDots;
