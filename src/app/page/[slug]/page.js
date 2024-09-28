'use client'
import { useState, useEffect } from 'react';

const DynamicRoute = ({params}) => {
    let { slug } = params||{};
    let api_url = process.env.NEXT_PUBLIC_API_URL
    let [bodyData, setbodyData] = useState({});
    
    const updateBody = async () => {
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
      
          let result = await fetch(api_url+'/page/'+slug, options);
          console.log('result', result);
          if(result.ok){ 
            const data = await result.json();
            if(data.success) setbodyData(data.data);
          }
    };

    useEffect(()=>{
        updateBody();
    },[]);

  return (
    <>
      <div className="pt-24 bg-white text-black" >
        <div className="container px-3 mx-auto">
          <div className="w-full md:w-2/5md:text-left ">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              { bodyData.title || "No Page Found!" }
            </h1>
            { bodyData.title && <div className="py-10" dangerouslySetInnerHTML={{ __html: bodyData.body }} />}
          </div>
        </div>
      </div>
    </>
  )
};

export default DynamicRoute;