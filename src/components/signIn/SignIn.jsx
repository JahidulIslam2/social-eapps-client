import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const SignIn = () => {
    const [signInError, setError] = useState("")
    const { signIn, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();


    const formHandle = (data) => {
        console.log(data)

        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                setError(error)
                console.error(error)
            })

    }

    const handleGoolelogIn = () => {

        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })

    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-900 uppercase">
                    Sign in
                </h1>
                <form onSubmit={handleSubmit(formHandle)} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-900 focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-900 focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <Link
                        href="#"
                        className="text-xs text-red-400 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-green-600 to-cyan-400 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-900">
                            Login
                        </button>
                    </div>
                    {signInError && <p className='text-red-600'>{signInError}</p>}
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button
                        onClick={handleGoolelogIn}
                        type="button"
                        className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>

                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to="/signUp"
                        className="font-medium text-green-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;