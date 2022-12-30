import React from 'react';

const AboutData = ({ info }) => {
    // const { name, address, university, email } = info;
    console.log(info?.name)
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-green-900">
                            Your Information
                        </h3>
                    </a>
                </div>
                <form className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <div className="flex items-end my-4">
                        <button className="w-20 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Edit
                        </button>
                    </div>
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
                                readOnly
                                defaultValue={info?.name}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"
                            />

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
                                readOnly
                                defaultValue={info?.address}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"
                            />

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
                                readOnly
                                defaultValue={info?.university}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"
                            />

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
                                readOnly
                                defaultValue={info?.email}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md "
                            />

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutData;