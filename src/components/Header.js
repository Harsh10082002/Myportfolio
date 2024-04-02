

import { Link } from "react-router-dom";
import { useContext } from "react";
import Mycontext from "../../utils/context/MyContext";

const Header=()=>{

    const SidebarInfo = useContext(Mycontext);
    const {isSideBarOpen, setIsExpanded} = SidebarInfo;
    const collapseHandle =(e)=>{
        e.preventDefault();
        
        console.log(!isSideBarOpen);
        setIsExpanded(!isSideBarOpen);

    }
    return<>
        <div className="flex justify-between bg-[#023b6d] text-white items-center">
            <div className=" px-4">
                logo
            </div>
            <div className="px-4 flex">
                <ul className="flex ">
                    <li className="px-2 my-2 text-lg">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <button onClick={collapseHandle} className="p-2 my-2 ">
                        <img className="w-[2rem] h-[2rem]" src="https://i.pinimg.com/474x/0b/53/d7/0b53d7e42184a1823360653f60e7d77b.jpg"></img>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </>
}
export default Header;