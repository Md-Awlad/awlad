import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="w-full bg-center bg-cover h-96"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Welcome to my website
            </h1>
            <button className="w-full px-4 py-2 mt-4 lg:mx-8 lg:w-44 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-pink-600 rounded-md lg:w-auto hover:bg-zinc-500 hover:text-white focus:outline-none">
              See More
            </button>
            <button className="w-full px-4 py-2 mt-4 lg:w-44 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-pink-600 rounded-md lg:w-auto hover:bg-zinc-500 hover:text-white focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
