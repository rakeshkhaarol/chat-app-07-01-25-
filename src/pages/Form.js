//import area
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


//definetion area
function Form(
    {
        isSignInPage = false,
    }
) {

    //hooks area
    const [data, setdata] = useState({
        ...(isSignInPage ? {} : { fullName: '' }),
        email: '',
        password: ''
    });

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = isSignInPage
    ? { email: data.email, password: data.password }
    : { fullName: data.fullName, email: data.email, password: data.password };

  try {
    const res = await fetch(`http://localhost:8000/api/${isSignInPage ? 'login' : 'register'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const resData = await res.json();
    if(resData.token){
        localStorage.setItem('user:token', resData.token);
        localStorage.setItem('user:detail', resData.token)
        navigate('/')
    }

    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: resData.message || (isSignInPage ? 'Logged in successfully!' : 'Registered successfully!'),
      });
      // Optional: Redirect after success
      // navigate('/dashboard');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: resData.message || 'Something went wrong!',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Network Error',
      text: 'Could not connect to server.',
    });
  }
};



    //return statment
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg" style={{ 'boxShadow': '0 0 10px 2px gray' }}>
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    {isSignInPage ? 'sign_Up to Your Account ' : 'Create to Your Account'}

                </h2>
                
                <form className="space-y-4" onSubmit={(e) => { handleSubmit(e) }}>
                    {/* fullName Field */}
                    {!isSignInPage && <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-600"
                        >
                            fullName
                        </label>
                        <input
                            type="name"
                            id="name"
                            className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                            value={data.fullName}
                            onChange={(e) => setdata({ ...data, fullName: e.target.value })}
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