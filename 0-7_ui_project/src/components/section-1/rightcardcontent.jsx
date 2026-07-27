import React from 'react'

function Rcont() {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
        <h2 className=' bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold'>1</h2>
        <div className='font-bold text-amber-50 text-lg leading-normal mt-28'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aperiam rerum nobis mollitia officiis eum deleniti non quo. Quisquam, facere reiciendis.
        </div>
        <div className=' flex justify-between'>
            <button className='bg-blue-600 text-amber-50 font-semibold px-7 py-3 rounded-full'>Satisfied</button>
            <button className='bg-blue-600 text-amber-50 font-semibold px-7 py-3 rounded-full'><i className="ri-arrow-up-circle-line"></i></button>
        </div>
       </div>
  )
}

export default Rcont
