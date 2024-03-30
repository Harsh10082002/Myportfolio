

import {validation} from "../../utils/validation";
import { useRef, useState } from "react";
import "../styles/Main.css"
import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";

 const Contact = () =>{
    const email = useRef(null);
    const name = useRef(null);

    const [errStatus, setErrStatus] = useState(false);
    const [successFullMsg, setSuccessFullMsg] = useState('');


    const submitHandle=(e)=>{
        e.preventDefault();
        const errMsg = validation(email.current.value, name.current.value);
        if(errMsg===true ){
            setErrStatus(false);
            setSuccessFullMsg("Message sent successfully");
            console.log(email.current.value);
        }else{
            setErrStatus(true);
            setSuccessFullMsg("Please Enter Valid Credentials ");
        }
        
    }

    return <>
    <div className="w-[90%] overflow-y-scroll" id="Contact">
            <div className="mx-11 my-3 mb-8">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-[#173b6c] text-3xl font-bold pb-3">Contact</h1>
                        <hr className="border-0 h-1 w-16 bg-[#149ddd] mb-4"></hr>
                    </div>
                </div>
                <p className="py-2 text-gray-700">Feel free to reach out to us for any inquiries or feedback!</p>
            </div>

            <div className="mx-11 my-8 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                <div className="p-6 bg-white rounded-lg shadow-md ">

                    <div className="flex items-center mb-8">
                        <i className="bx bxs-location-plus text-blue-500 text-[40px] p-2 "></i>
                        <div>
                            <h2 className=" text-[23px] font-semibold ">Location</h2>
                            <p className="text-gray-600">New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="flex items-center mb-8">
                        <i className="bx bxs-envelope text-blue-500 text-[40px] p-2"></i> {/* Icon for email */}
                        <div>
                            <h2 className="text-[23px] font-semibold">Email</h2>
                            <p className="text-gray-600">example@example.com</p> {/* Your email address */}
                        </div>
                    </div>

                    <div className="flex items-center mb-8">
                        <i className="bx bxs-phone text-blue-500 text-[40px] p-2"></i> {/* Icon for phone */}
                        <div>
                            <h2 className="text-[23px] font-semibold">Phone</h2>
                            <p className="text-gray-600">+1 123-456-7890</p> {/* Your phone number */}
                        </div>
                    </div>

                </div>

                <div className="p-6 b bg-white  rounded-lg shadow-md z-20" >
                    <h2 className="text-[23px] font-semibold mb-4">Contact Form</h2>
                    <form>
                        <input ref={name} type="text" placeholder="Your Name" className="border border-gray-300 rounded-lg px-4 py-2 mb-3 w-full focus:outline-none focus:border-blue-500" />
                        <input ref={email} type="email" placeholder="Your Email" className="border border-gray-300 rounded-lg px-4 py-2 mb-3 w-full focus:outline-none focus:border-blue-500" />
                        <input type="text" placeholder="Subject" className="border border-gray-300 rounded-lg px-4 py-2 mb-3 w-full focus:outline-none focus:border-blue-500" />
                        <textarea type="text" placeholder="Your Message" className="border border-gray-300 rounded-lg px-4 py-2 mb-3 w-full h-32 focus:outline-none focus:border-blue-500"></textarea>
                        
                        {errStatus ? <p className="text-red-500 my-2 ">{successFullMsg}</p> : <p className="my-2 text-blue-500 mt-2">{successFullMsg}</p>}
                        
                        <button onClick={submitHandle}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">Send</button>
                    </form>
                </div>
            </div>
            
        </div>
    </>
}

export default Contact;