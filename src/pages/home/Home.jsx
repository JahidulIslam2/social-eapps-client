import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import Hero from '../../components/hero/Hero';

const Home = () => {
    // img bb api key
    const imgHostKey = process.env.REACT_APP_imgHostKey

    const { register, handleSubmit, reset } = useForm();

    const handleForm = (data) => {
        console.log(data)
        const img = data.imgField[0]
        const formData = new FormData();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then((imgData) => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const postData = {
                        image: imgData.data.url,
                        status: imgData.textarea,
                    }

                    fetch('http://localhost:5000/postData', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(postData)
                    })
                        .then((res) => { res.json() })
                        .then(data => {
                            reset();
                            console.log(data)
                        })

                }

            })
    }



    return (
        <div>
            <Hero></Hero>
            <div className='flex ml-6 m-6 gap-4 justify-center '>

                <div className=' flex-wrap gap-x-2 gap-y-2 '>
                    <div className="relative flex-shrink-0">
                        <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                        <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="w-12 h-12 border  rounded-full dark:bg-gray-500 dark:border-gray-700" />
                    </div>
                </div>

                <Form onSubmit={handleSubmit(handleForm)} className='bg-slate-300 shadow-lg p-4'>
                    {/* image field */}
                    <div className="border border-dashed border-gray-600 relative">
                        <input name='imgField'
                            {...register("imgField")}
                            type="file"
                            multiple className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
                        <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                            <h4>
                                Drop files anywhere to upload
                                <br />or
                            </h4>
                            <p className="text-blue-600">Select Files</p>
                        </div>
                    </div>
                    <div className='my-3'>

                        <textarea {...register("textarea", { required: "wright your post" })} type="textarea" placeholder="wright here" name='textarea' className="input w-full border-red-100"></textarea>
                    </div>
                    <button className='btn btn-outline bg-green-600 hover:bg-green-600 focus:bg-green-900 focus:border-none text-white'>Submit</button>
                </Form>
            </div>


        </div>
    );
};

export default Home;