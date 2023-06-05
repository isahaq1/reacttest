'use client'
import React from "react";

const Page = () => {
  const handleSignUp = async(e:any)=>{
    e.preventDefault()
    const brand ={ 
      name:e.target.name.value,
      
    }
  const response = await fetch('http://localhost:8080/api/brands', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(brand), // body data type must match "Content-Type" header
    });
    console.log(response)

  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[300px] h-max bg-gray-200 rouned-md shadow-md text-gray-900 p-4">
        <p className="text-xl font-semibold w-max mx-auto">Brand Form</p>
        <form action="" className="flex items-center flex-col justify-center space-y-4" onSubmit={(e:any)=>handleSignUp(e)}>
          <div>
            <label htmlFor=""> Name</label>
          <input type="text" name="name" placeholder="Enter name" className="rounded-md border-none outline-none px-4 py-2" />
          </div>
  
        
         <input type="submit" value="Submit"  className="px-4 py-2 bg-green-800 text-white rounded-md "/>
        </form>
      </div>
    </div>
  );
};

export default Page;
