
import React, { useState } from 'react';
import AboutAccordians from './AboutAccordians';
// import { BxUser } from 'boxicons';

const About = ()=>{
   
    return<>
        <div id="about" className="overflow-y-scroll">
            <div className="mx-11 my-3 mb-8">
                <div>
                    <h1 className="text-[#173b6c] text-3xl font-bold pb-3">About Me</h1>
                    <hr className="border-0 h-1 w-16 bg-[#149ddd] mb-4"></hr>
                </div>
                {/* summary  */}
                {/* mx-11 my-8 grid grid-cols-1 lg:grid-cols-2 gap-8 */}
                <div className=" my-5 ">
                    <p className="text-gray-700">
                    Hi, My name is Harsh Chouksey I am in final year of B-Tech.
                    I am a motivated individual with a comprehensive understanding of C++ and skills in web development. 
                    apart from coding i love to play chess in my spare time.
                    </p>
                </div>

                <AboutAccordians />
            </div>

        </div>
    </>
}
export default About;