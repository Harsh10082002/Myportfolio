


import { Link, useNavigate } from "react-router-dom";
import "../styles/sidebar.css"
import 'boxicons/css/boxicons.min.css';
import { useState } from "react";

// const Sidebar = () =>{
    // const navigate = useNavigate();
    // const [isHome, setIsHome ] = useState(true);
    // const [isAbout, setIsAbout ] = useState(false);
    // const [isProject, setIsProject ] = useState(false);
    // const [isContact, setIsContact ] = useState(false);



    // return<>
    //     <div className="w-[28%] bg-[#040b14] h-full flex flex-col  items-center" id="sidebar">
    //         <div className="">
    //             <div className="mt-4 flex justify-center">
    //                 <img 
    //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pXvPzIlM9T3pFyFIaEAZRhqONTwkaSfiOQ&usqp=CAU"
    //                 // src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg"
    //                 alt="harsh chouksey"
    //                     id="sidebarImg"
    //                     className="rounded-full  border-8 border-solid border-[#2c2f3f] lg:w-36">
    //                 </img>

    //             </div>
    //             <div className="  text-white my-6">
    //                 <h1 id="sidebarName" className="font-poppins font-semibold lg:text-2xl text-center">HARSH CHOUKSEY</h1>
    //             </div>
    //             {/* social media */}
                
    //             <div className="">
    //                 <div className="flex justify-between">
                        
    //                     <div className="bg-[#212431] rounded-full  h-[100%]">
    //                         <i id="sidebarSocialIcon" class="bx bxl-linkedin lg:text-[21px] text-white font-semibold p-2"></i>
    //                     </div>
    //                     <div className="bg-[hsl(229,20%,16%)] rounded-full  h-[100%]">
    //                         <Link to="">
    //                         <i id="sidebarSocialIcon" class="bx bxl-github lg:text-[21px] text-white font-semibold p-2"></i>
    //                         </Link>

    //                     </div>
    //                     <div className="bg-[#212431] rounded-full  h-[100%]">
    //                         <Link to=""><i id="sidebarSocialIcon" class="bx bxs-envelope  lg:text-[21px] text-white font-semibold p-2"></i></Link>
    //                     </div>
    //                     <div className="bg-[#212431] rounded-full  h-[100%]">
    //                         <Link to="https://www.hackerrank.com/"><i id="sidebarSocialIcon" class="bx bxs-phone lg:text-[21px] text-white font-semibold p-2"></i></Link>
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* all links */}
    //             <div className=" my-5 ">
    //                 <div className="my-3 py-1 flex items-center">
    //                     <i id="sidebarLinkIcon" className="bx bx-home text-[24px] text-[#6f7180] font-semibold py-2"></i>
    //                     {/* <Link to="/" className="active text-[19px] font-medium text-gray-200 px-2"> Home </Link> */}
    //                     <button
    //                     id="sidebarLinkText"
    //                     className={`${isHome && "bg-blue-500"} text-[19px] font-medium text-gray-200 px-2`}
    //                      onClick={()=>{
    //                         setIsHome(true);
    //                         setIsAbout(false);
    //                         setIsContact(false);
    //                         setIsProject(false);
    //                         navigate("/");
    //                     }}>Home</button>
    //                 </div>                   
    //                 <div className="my-3 py-1 flex items-center">
    //                     <i className="bx bx-home text-[24px] text-[#6f7180] font-semibold py-2"></i>
    //                     <button 
    //                     className={`${isAbout && "bg-blue-500"} text-[19px] font-medium text-gray-200 px-2`}
    //                     onClick={()=>{
    //                         setIsHome(false);
    //                         setIsAbout(true);
    //                         setIsContact(false);
    //                         setIsProject(false);
    //                         navigate("/about");
    //                     }}
    //                      >About</button>
                    
    //                 </div>
    //                 <div className="my-3 py-1 flex items-center">
    //                     <i className="bx bx-home text-[24px] text-[#6f7180] font-semibold py-2"></i>
    //                     {/* <Link to="/" className="text-[19px] font-medium text-gray-200 px-2"> Projects </Link> */}
    //                     <button className= {`${isProject && "bg-blue-500"} text-[19px] font-medium text-gray-200 px-2`}
    //                     onClick={()=>{
    //                         setIsHome(false);
    //                         setIsAbout(false);
    //                         setIsContact(false);
    //                         setIsProject(true);
    //                         navigate("/projects");
    //                     }}>Projects</button>
    //                 </div>
    //                 <div className="my-3 py-1 flex items-center">
    //                     <i className="bx bx-home text-[24px] text-[#6f7180] font-semibold py-2"></i>
    //                     {/* <Link to="/contact" className="text-[19px] font-medium text-gray-200 px-2"> Contact </Link> */}
    //                     <button className={`${isContact && "bg-blue-500"} text-[19px] font-medium text-gray-200 px-2 `}
    //                     onClick={()=>{
    //                         setIsHome(false);
    //                         setIsAbout(false);
    //                         setIsContact(true);
    //                         setIsProject(false);
    //                         navigate("/contact");
    //                     }}>Contact</button>
    //                 </div>
                    
    //             </div>
    //         </div>

    //     </div>
    // </>
// }
// export default Sidebar;





const Sidebar = () => {
  return (
    <header id="sidebar">
      <div className="d-flex flex-column">

        <div className="profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pXvPzIlM9T3pFyFIaEAZRhqONTwkaSfiOQ&usqp=CAU" alt="" className="img-fluid rounded-full" />
          <h1 className="text-light"><Link to="">HARSH Chouksey</Link></h1>
          <div className="social-links mt-3 text-center">
            <Link to="" className="twitter"><i className="bx bxl-twitter"></i></Link>
            <Link to="" className="facebook"><i className="bx bxl-facebook"></i> </Link>
            <Link to="" className="instagram"><i className="bx bxl-instagram"></i></Link>
            <Link to="" className="google-plus"><i className="bx bxl-skype"></i>  </Link>
            <Link to="" className="linkedin"><i className="bx bxl-linkedin"></i>  </Link>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><Link to="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
            <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
            <li><Link to="/projects" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Projects</span></Link></li>
            <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Contact</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Sidebar;
