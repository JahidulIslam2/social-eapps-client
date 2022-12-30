import React from 'react';

const MediaCard = ({ post }) => {
    return (
        <div>
            <div class="flex flex-col justify-center h-screen">
                <div
                    class="relative flex-row space-x-5  space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                    <div class=" w-1/3 bg-white grid place-items-center">
                        <img src={post?.image} alt="tailwind logo" class="rounded-xl" />
                    </div>
                    <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                        <div class="flex justify-between item-center">


                            <div class="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>

                        </div>
                        <h3 class="font-black text-gray-800 text-xl ">{post?.status}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;