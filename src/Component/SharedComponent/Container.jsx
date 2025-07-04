import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            {children}
        </div>
    );
};

export default Container;