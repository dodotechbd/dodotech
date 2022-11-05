import React from 'react';

const Template = ({project}) => {

    const {name, img }= project;
    return (
        <div className='mx-auto hover:-translate-y-5 border-neutral  transform transition duration-300'>
            <img src={img} alt='' />
            <h1 className='text-2xl front-bold text-center'>{name}</h1>
            
        </div>
    );
};

export default Template;