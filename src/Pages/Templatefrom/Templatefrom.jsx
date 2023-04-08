import React from 'react';

const Templatefrom = ({img,Title,description,bgClass}) => {
  return (
    <div className= {`${bgClass}`}>
      <div className='px-4 py-12   hover:-translate-y-5   transform transition duration-300  '>
        <div className='flex items-center gap-8 '> 
          <div className='bg-white w-16 h-16 '>
            <img className='p-4 ' src={img} alt="album" />
          </div>
          <div className='w-52'>
            <h2 className='text-xl text-white font-bold'>{Title}</h2>
          </div>
        </div>
        <p className='mt-8 text-white font-semibold'>{description}</p>
      </div>
    </div>
  );
};

export default Templatefrom;