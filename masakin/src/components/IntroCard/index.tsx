"use client"

import React, { useEffect, useState } from 'react';
import { fetchUser } from '@/data/api';
import { UserProfile } from '@/data/Type';

const IntroCard = () => {

  const [profile, setProfile] = useState<UserProfile | undefined>(undefined);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const res = await fetchUser(token);
          setProfile(res.user.Name);
          console.log(res)
        }
      } catch (error) {
        console.error('Fetch categories failed', error);
      }
    };

    fetchProfile();
  }, []);


  return (
    <div className='flex flex-row w-full px-[32px] mb-[25px] justify-between'>
      <div className=''>
        {profile ? (
          <h1 className='text-[25px] font-[700]'>Hello {profile.username}</h1>
        ) : (
          <p className='text-[25px] font-[700]'>Hello</p>
        )}
        <h2 className='text-[19px] font-[500]'>Ingin rasa apa hari ini</h2>
      </div>
      <div className='w-[33px] h-[33px] bg-[#7561F6] rounded-full'>
      </div>
    </div>
  );
}

export default IntroCard;