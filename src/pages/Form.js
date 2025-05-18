//import area
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//definetion area
function Form(
    {
        isSignInPage = false,
    }
) {

    //hooks area
    const [data, setdata] = useState({
        ...(isSignInPage && {
            username: ''
        }),
        email: '',
        password: ''
    })

    console.log()
    ///function definetion area
    const hendalSubmit = async (e) => {
        console.log('sdraagsfga', data)
        e.preventDefault(); // Don't forget to prevent default form submission behavior
        
           const res = await fetch(`http://localhost:8000/api/${isSignInPage ? 'register' : 'login'}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await res.json()
            console.log('res --->>>>', resData)
            // const contentType = res.headers.get("content-type");

            // let resData;
            // if (contentType && contentType.includes("application/json")) {
            //     resData = await res.json();
            // } else {
            //     resData = await res.text();
            // }

            // console.log('data----', resData);

        
    }


    //return statment
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg" style={{ 'boxShadow': '0 0 10px 2px gray' }}>
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    {isSignInPage ? 'sign_Up to Your Account ' : 'Create to Your Account'}

                </h2>
                <form className="space-y-4" onSubmit={(e) => { hendalSubmit(e) }}>
                    {/* username Field */}
                    {!isSignInPage && <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-600"
                        >
                            UserName
                        </label>
                        <input
                            type="name"
                            id="name"
                            className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                            value={data.username}
                            onChange={(e) => setdata({ ...data, username: e.target.value })}
                        />
                    </div>}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                            value={data.email}

                            onChange={(e) => setdata({ ...data, email: e.target.value })}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                            value={data.password}
                            onChange={(e) => setdata({ ...data, password: e.target.value })}
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {isSignInPage ? 'sign_Up' : 'sign_in'}
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="text-sm text-center text-gray-500">
                    {isSignInPage ? " Don't have an account ? " : 'Alrady have an account ? '}
                    <span className='text-primary cursor-pointer underline' onClick={() => navigate(`/users/${isSignInPage ? 'sign_in' : 'sign_up'}`)}>{isSignInPage ? 'sign_in' : 'sign_up'}</span>
                    {/* <Link onClick={()={nevigate(isSignInPage ? '/users/signIn' : '/users/sign_Up')}} to={isSignInPage ? '/users/signIn' : '/users/sign_Up'} className="text-blue-500 hover:underline">
                       {isSignInPage?'sign in' : 'sign_Up'}
                    </Link>  */}
                </div>
            </div>
        </div>
    )
}

//export area
export default Form