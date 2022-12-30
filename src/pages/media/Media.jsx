import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MediaCard from './MediaCard';

const Media = () => {

    const { data: postData = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/postData');
            const data = res.json();
            return data;

        }
    })




    return (
        <div>
            {
                postData?.map(post => <MediaCard post={post} key={post._id}></MediaCard>)
            }
        </div>


    );
};

export default Media