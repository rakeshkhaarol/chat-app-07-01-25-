import React, { useState } from 'react'
import Avtar from '../../src/assets/avtar.jpg'
function Dashboard() {
  //hooks area
  //mongodb+srv://rakeshkharol457:<db_password>@cluster0.n7hzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('user:detail')))
  console.log('user -->',user)
  const contacts = [
    {
      name: 'Pritesh',
      status: 'Offline',
      img: Avtar
    },
    {
      name: 'Pritesh',
      status: 'online',
      img: Avtar
    },
    {
      name: 'Pritesh',
      status: 'online',
      img: Avtar
    },
    {
      name: 'Pritesh',
      status: 'online',
      img: Avtar
    },
    {
      name: 'Pritesh',
      status: 'online',
      img: Avtar
    },
    {
      name: 'Pritesh',
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
            <h6 className='text-2xl'>{user?.fullName}</h6>
            <p className='text-xl font-light'>my Account</p>
          </div>
        </div>
        <hr />
        <div className='mx-14 mt-2'>

          <h1 className='text-primary text-lg'>Massage</h1>
          <div>
            {/* array.map(function(currentValue, index, arr), thisValue) */}
            {
              contacts.map((cv,idx) => {
                return (

                  <div key={idx} className='flex items-center py-3 border-b border-gray'>
                    <div className='flex cursor-pointer items-center '>

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
      <div className='w-[75%] h-screen bg-Teal flex items-center flex-col'>
        <div className='bg-pink w-[75%] h-[60px] mt-10 rounded-full flex items-center px-10'>
          <div className='cursor-pointer'>
            <img src={Avtar} width={50} height={50} alt='avtar' className='rounded-full ' />
          </div>
          <div className='ml-8 mr-auto'>
            <h6 className='text-lg'>Rakesh Kharol</h6>
            <p className='text-sm font-light text-gray-600'>online</p>

          </div>
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone-call"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>
          </div>
          <div className='ml-4 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-video-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" /><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M7 12l4 0" /><path d="M9 10l0 4" /></svg></div>

        </div>
        <div className='h-[75%] w-full overflow-scroll'>
          <div className='h-[1000px] px-10 py-14'>
            <div className='max-w-[40%] bg-pink rounded-b-xl rounded-tr-xl p-4 relative'>
              Giving positive feedback is one way you can help improve your company's culture.
              <div className='absolute -top-0 -left-2 w-5 h-3 bg-pink rotate-25 rounded-b-[66px] rounded-tr-xl'></div>
            </div>
            <div className='max-w-[40%] bg-pink rounded-b-xl rounded-tl-xl p-4 ml-auto relative'>
              Giving positive feedback is one way you can help improve your company's culture.
              <div className='absolute -top-0 -right-2 w-5 h-3 bg-pink rotate-25 rounded-b-[66px] rounded-tr-xl'></div>
            </div>
          </div>
        </div>
        <div className='p-5 w-full flex flex-center '>
          <input placeholder='Type a massage...' className='w-full p-2 rounded-full focus:border-none outline-none shadow-lg' />
          <div className='p-4 ml-4 bg-pink rounded-full cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
          </div>
          <div className='p-4 ml-4 bg-pink rounded-full cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-paperclip"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" /></svg>
          </div>

        </div>
      </div>
      <div className='w-[25%] h-screen'></div>
    </div>
  )
}

export default Dashboard