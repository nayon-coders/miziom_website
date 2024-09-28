'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Home() { 

  let api_url = process.env.NEXT_PUBLIC_API_URL

  let [commonData, setCommonData] = useState({});

  const getCommonData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'apisecretkeycheck' : 'SYB6jIKRjH9aaJ89i5dJKpVVfE9AvBfdK3ThVxciQJHhVLk2zN',
      'Access-Control-Allow-Origin' : '*',
      'Allowed-Origins' : '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    };

    const options = {
        method: 'GET', // Specify the HTTP method (GET, POST, etc.)
        headers: headers,
        mode: 'cors',
    };

    let result = await fetch(api_url+'/auth/common-setting', options);
    console.log('result', result);
    if(result.ok){ 
      const data = await result.json();
      if(data.success) setCommonData(data.data);
    }
    
    console.log('data', commonData);
  };

  useEffect(()=>{
    console.log('called', commonData);
    getCommonData();
  },[]);

  return (
    <>
    
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            { commonData.hero_header || 'Main Hero Message to sell yourself!' }
          </h1>
          <p className="leading-normal text-2xl mb-8">
            { commonData.hero_description ||'Sub-hero message, not too long and not too short. Make it just right!'}
          </p>
          {/* <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Subscribe
          </button> */}
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" alt="" src={ commonData.hero_cover_image || '/images/hero.png'} width="100" height="100" />
        </div>
      </div>
    </div>
    <div className="relative -mt-12 lg:-mt-24">
 
    </div>
    <section className="text-gray-600 body-font">
          <h2 className="text-center w-2/4 mx-auto text-2xl font-bold leading-tight mt-24 mb-5 text-white">
          { commonData.hero_second_header || 'Main Hero Message to sell yourself!' }
          </h2>
        <div className=" px-5 pb-24 flex  md:flex-row flex-col items-center justify-center w-full">
            <div className="mr-1">
            <a href="#">
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                    <span className="title-font font-medium">Google Play</span>
                  </span>
                </button>
              </a>
            </div>
            <div className="ml-1">
              <a href="#">
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">Download on the</span>
                    <span className="title-font font-medium">App Store</span>
                  </span>
                </button>
              </a>
            </div>
        </div>
      </section>
    <section className="bg-white border-b py-8">

      <div className="container max-w-5xl mx-auto m-8">
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            { commonData.body_header_one || 'Lorem ipsum dolor sit amet' }
            </h3>
            <p className="text-gray-600 mb-8">
            { commonData.body_descriptioin_one || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.' }
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src={ commonData.body_cover_image_one || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh260GWvqNURZeN29Ijp8vjGCg63doorEnSQ&usqp=CAU' } width="" height="" alt="" />
          </div>
        </div>
        <div className="bg-[#ffeedd] mb-5 flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
          <img src={ commonData.body_cover_image_two || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh260GWvqNURZeN29Ijp8vjGCg63doorEnSQ&usqp=CAU' } width="" height="" alt="" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              { commonData.body_header_two || 'Lorem ipsum dolor sit amet' }
              </h3>
              <p className="text-gray-600 mb-8">
              { commonData.body_descriptioin_two || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.' }
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffeedd] flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            { commonData.body_header_three || 'Lorem ipsum dolor sit amet' }
            </h3>
            <p className="text-gray-600 mb-8">
            { commonData.body_descriptioin_three || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.' }
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src={ commonData.body_cover_image_three || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh260GWvqNURZeN29Ijp8vjGCg63doorEnSQ&usqp=CAU' } width="" height="" alt="" />
          </div>
        </div>
      </div>
    </section>

    {/* <section className="container mx-auto text-center py-6 mb-12">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Call to Action
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Main Hero Message to sell yourself!
      </h3>
      <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Action!
      </button>
    </section> */}
   
    </>
  )
}
