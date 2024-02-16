import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div  className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="flex-1 justify-center flex flex-col "> 
        <h2 className="text-2xl  ">
            Want to learn more about MERN Stack?
        </h2>
        <p  className="text-gray-500 my-2 ">
        How to Use MERN Stack: A Complete Guide 
        </p>
        <Button gradientDuoTone='purpleToPink'className='rounded-tl-xl rounded-bl-none'>
            <a href="https://www.mongodb.com/languages/mern-stack-tutorial" target="_blank" rel="noopener noreferrer">
                MERN Stack Documentation
            </a>
        </Button>
      </div>
      <div className="p-7  flex-1">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231110115359/Roadmap-to-Mern-stack-developer-copy-(3).webp" alt="" />
      </div>
    </div>
  );
}
