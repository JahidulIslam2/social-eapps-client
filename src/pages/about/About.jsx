import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import AboutData from './AboutData';


const About = () => {
    const { user } = useContext(AuthContext)


    const { data: userInfo = [], } = useQuery({

        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    console.log(userInfo)


    return (
        <div>
            {
                userInfo?.map(info => <AboutData info={info} key={info._id} ></AboutData>)
            }

        </div>

    );
};

export default About;