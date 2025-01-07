//import area
import React from 'react'

//definetion area
function Form(
    {
        isSignInPage=true,
    }
) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    {isSignInPage ? 'Login to Your Account ': 'Create to Your Account'}
                    
                </h2>
                <form className="space-y-4">
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
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                             className="w-full px-4 py-2 text-white bg-gray rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {isSignInPage ? 'Login' : 'sign in'}
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="text-sm text-center text-gray-500">
                     {isSignInPage?" Don't have an account ?":'Alrady have an account ? '}
                    <a href="/register" className="text-blue-500 hover:underline">
                       {isSignInPage?'sign in' : 'login'}
                    </a>
                </div>
            </div>
        </div>
    )                   
}

//export area
export default Form