import React from 'react'
import Avtar from '../../src/assets/avtar.jpg'
function Dashboard() {
  //hooks area
  const contacts = [
    {
      name: 'deepk',
      status: 'online',
      img: Avtar
    },
    {
      name: 'deepk',
      status: 'online',
      img: Avtar
    },
    {
      name: 'deepk',
      status: 'online',
      img: Avtar
    },
    {
      name: 'deepk',
      status: 'online',
      img: Avtar
    },
    {
      name: 'deepk',
      status: 'online',
      img: Avtar
    },
    {
      name: 'deepk',
      status: 'online',
      img: Avtar
    },
  
  
  ]

  //function definetion area


  //return statent
  return (
    <div className='w-screen flex '>
      <div className='w-[25%] h-screen  bg-Slate'>
        <div className='flex justify-center items-center my-6 cursor-pointer'>
          <img className='rounded-full border-[2px] border-primary' src={Avtar} width={75} height={75} alt='avtar' />
          <div className='ml-4'>
            <h6 className='text-2xl'>heading</h6>
            <p className='text-xl font-light'>my Account</p>
          </div>
        </div>
        <hr />
        <div className='mx-14 mt-2'>

          <h1 className='text-primary text-lg'>Massage</h1>
          <div>
            {/* array.map(function(currentValue, index, arr), thisValue) */}
            {
              contacts.map((cv) => {
                return (

                  <div className='flex items-center py-3 border-b border-gray'>
                    <div className='flex cursor-pointer items-center'>

                    <img src={cv.img} width={50} height={50} alt='avtar' />
                    <div className='ml-4'>
                      <h6 className='text-lg'>{cv.name}</h6>
                      <p className='text-sm font-light text-gray-600'>{cv.status}</p>
                    </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
      <div className='w-[75%] h-screen '></div>
      <div className='w-[25%] h-screen'></div>
    </div>
  )
}

export default Dashboard