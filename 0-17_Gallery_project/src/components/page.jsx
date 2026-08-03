import React from 'react'

const Page = (props) => {
  return (
    <div>
       <a href={props.elem.url} target="_blank">
          <div className='h-40 w-44  '>
        <img src={props.elem.download_url} alt="" className='  h-full w-full object-cover rounded-xl overflow-hidden ' />
      </div>
      <h2 className='text-center mt-2 text-lg font-semibold'>
        {props.elem.author}
      </h2>
        </a>
    </div>
  )
}

export default Page
