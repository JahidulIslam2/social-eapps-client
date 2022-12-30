import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpErros, setSIgnUpErros,] = useState("")



    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const handleSignUp = data => {
        setSIgnUpErros("")
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

                const userInfo = {
                    displayName: data.name,
                    address: data.address,
                    university: data.university,

                }
                updateUser(userInfo)
                    .then(() => {
                        storeUser(data.name, data.address, data.university, data.email)
                    })
                    .catch((error) => {
                        console.error(error)
                    })

            })
            .catch((error) => {
                console.error(error)
            })


    }
    const storeUser = (name, address, university, email) => {
        const userInfo = { name, address, university, email };
        console.log(userInfo)
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                reset();
                console.log(data)

            })


    }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-green-900">
                            Sign Up
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    {...register("name", {
                                        required: "Name is Required"
                                    })}
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-900 focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Address
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="address"
                                    {...register("address", {
                                        required: "address is Required"
                                    })}
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-900 focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="university"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                University Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="university"
                                    {...register("university", {
                                        required: "University Name is Required"
                                    })}
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-900 focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.university && <p className='text-red-500'>{errors.university.message}</p>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email", {
                                        required: true
                                    })}
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-900 focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password", {
                                        required: "password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                    })}
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-900 focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                        </div>

                        <Link
                            to="#"
                            className="text-xs text-red-600 hover:underline"
                        >
                            Forget Password?
                        </Link>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                                Register
                            </button>
                        </div>
                        {signUpErros && <p>{signUpErros}</p>}
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <Link className="text-green-900 hover:underline" to="/signIn">
                                Log in
                            </Link>
                        </span>
                    </div>
                    {/* <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default SignUp;