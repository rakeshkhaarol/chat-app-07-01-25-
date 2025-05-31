import React from 'react';
import Avtar from '../../src/assets/avtar.jpg';

function Dashboard() {
  
  const contacts = [
    { name: 'Pritesh', status: 'Offline', img: Avtar },
    { name: 'Anjali', status: 'Online', img: Avtar },
    { name: 'Rahul', status: 'Online', img: Avtar },
    { name: 'Simran', status: 'Online', img: Avtar },
    { name: 'Mohit', status: 'Online', img: Avtar },
    { name: 'Riya', status: 'Online', img: Avtar }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-slate-100 p-4 overflow-y-auto">
        <div className="flex items-center mb-6">
          <img className="rounded-full border-2 border-blue-500" src={Avtar} width={60} height={60} alt="avatar" />
          <div className="ml-4">
            <h6 className="text-xl font-semibold">Welcome</h6>
            <p className="text-sm text-gray-600">My Account</p>
          </div>
        </div>

        <hr className="mb-4" />
        <h2 className="text-blue-600 font-semibold mb-2">Messages</h2>
        <div className="space-y-3">
          {contacts.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-md shadow-sm hover:bg-blue-50 cursor-pointer">
              <img src={c.img} width={45} height={45} className="rounded-full" alt="avatar" />
              <div>
                <h6 className="text-sm font-medium">{c.name}</h6>
                <p className={`text-xs ${c.status === 'Online' ? 'text-green-500' : 'text-gray-500'}`}>{c.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="w-full md:w-3/4 flex flex-col bg-teal-50">
        {/* Header */}
        <div className="flex items-center justify-between bg-pink-100 px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <img src={Avtar} width={45} height={45} className="rounded-full" alt="avatar" />
            <div>
              <h6 className="text-md font-bold">Rakesh Kharol</h6>
              <p className="text-xs text-gray-500">online</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button title="Call">
              📞
            </button>
            <button title="Video Call">
              🎥
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="max-w-sm bg-white p-4 rounded-b-xl rounded-tr-xl shadow">
            Giving positive feedback is one way you can help improve your company's culture.
          </div>
          <div className="max-w-sm bg-blue-100 p-4 rounded-b-xl rounded-tl-xl ml-auto shadow">
            Absolutely agree! Recognition boosts morale.
          </div>
        </div>

        {/* Input Area */}
        <div className="flex items-center p-4 bg-white shadow-md">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <div className='p-4 ml-4 bg-pink rounded-full cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
          </div>
          <div className='p-4 ml-4 bg-pink rounded-full cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paperclip"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
