import React from 'react'
import Image from 'next/image';
import aboutImg from '../../public/Images/awlad.png';

function about() {
    return (
        <div className='bg-gray-900'>
            <h2 className='uppercase text-center text-3xl text-white font-semibold italic hover:border-b-2 hover:border-pink-600 pt-20 w-44 m-auto'>about me</h2>
            <div className="py-16">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12 lg:h-[69vh] bg-gray-200 px-20  rounded-bl-[40%] rounded-tr-[40%] ">
          <Image src={aboutImg} alt="image"/>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl font-bold md:text-4xl text-white">I am a web developer and progammer</h2>
          <p className="mt-6 text-white">Hi, :) I'm Awlad.I have completed my Diploma in computer science and engineering with a passion for developing scalable web applications and working across MERN stack development. </p>
          <p className="mt-4 text-white">I have built some web applications from the ground up using Html, CSS, tailwind-CSS, material UI, bootstrap, JavaScript, JSON, ES6, firebase, Nodejs, Reactjs, Nextjs, React Native, Express, & MongoDB</p>
        </div>
      </div>
  </div>
</div>
        </div>
    )
}

export default about
