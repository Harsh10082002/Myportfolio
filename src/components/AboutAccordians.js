import { useState } from "react"
import { Link } from "react-router-dom";
import "../styles/aboutAccordian.css"

const SkillAccordian =({index})=>{
    return<>
        <div id="aboutAccordian" className="bg-white shadow-md px-8 py-4 rounded-lg">
            {
                index===1 ? 
                    <div id="Technical" className="my-4">
                        <div className="flex items-center py-1">
                            <h2 className="text-lg font-semibold">Languages - </h2>
                            <span className="text-gray-700 px-2"> C | C++ | JavaScript | SQL(MYSQL)</span>
                        </div>
                        <div className="flex items-center py-1">
                            <h2 className="text-lg font-semibold">Front End - </h2>
                            <span className="text-gray-700 px-2"> HTML | CSS | JS | React.js | Tailwind | React-Router-Dom</span>
                        </div>
                        <div className="flex items-center py-1">
                            <h2 className="text-lg font-semibold">Backend - </h2>
                            <span className="text-gray-700 px-2">Node.js, Express.js</span>
                        </div>
                    </div> :
                index===2 ? 
            
                <div id="education" className="p-2 ">
                    <div id="mainDiv" className="my-2 p-3 flex items-center border-b border-gray-200">
                        <Link to="https://sritgroup.net/#:~:text=Shri%20Ram%20Group%20was%20established,head%20of%20the%20educational%20group.">
                            <img className="h-24 w-24" src="https://sritgroup.net/wp-content/uploads/2020/07/logo.jpg"></img> 
                        </Link>
                        <div className="px-10 ">
                            <h2 className="font-bold text-[#040b14] text-[18px]">Shri Ram Institue Of Technology, Jablapur </h2>
                            <h4 className="text-gray-700">Bachelor Of Technology (Computer Science And Engineering ) 7.9/10 cgpa.</h4>
                        </div>
                    </div>

                    <div className="my-2 p-3 flex items-center border-b border-gray-200">
                        <img className="h-24 w-24" src="https://www.schoolskey.com/uploads/thumb/482_mispamhsssmpjlogo22.png"></img>
                        <div className="px-10 ">
                            <h2 className="font-bold text-[#040b14] text-[18px]">Mispa Mission School, Jablapur </h2>
                            <h4 className="text-gray-700">class-12th 67.4%</h4>
                        </div>
                    </div>
                </div>
                
                : index === 3 ? 
                
                <div className="p-2 ">
                    
                    <div className="my-2">
                        <h2 className="text-lg font-semibold">SQL(MYSQL) - Coursera </h2>
                        <Link to="#" className="text-blue-500">Link</Link>
                    </div>
                    <div className="my-2">
                        <h2 className="text-lg font-semibold">Sql Assesment - HackerRank </h2>
                        <Link to="#" className="text-blue-500">Link</Link>

                    </div>
                </div> : 
                null
            }
        </div>
    </>
}
const CommonAccordian=({title, index})=>{
    const [isSkillShown, setIsSkillShwon] = useState(false);
    const [isEduShown, setIsEduShwon] = useState(false);
    const [isCertShown, setIsCertShwon] = useState(false);

    const [arroIcon, setArrowIcon] = useState("bxs-down-arrow");

    const handleSkillAccordian=(index)=>{
        setIsSkillShwon(!isSkillShown);
        setArrowIcon(arroIcon === "bxs-down-arrow" ? "bxs-up-arrow" : "bxs-down-arrow")
    }

    return<>

        <div id="commonAccordian" className="h-full">
            <div className="my-2">
                <div className="flex justify-between items-center px-8 py-4 text-gray-900 bg-gray-100 rounded-t-md cursor-pointer" onClick={()=>{handleSkillAccordian(index)}}>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p ><i className={`bx ${arroIcon} text-blue-500 text-2xl`}></i></p>
                </div>
                {isSkillShown && <SkillAccordian index={index}/> }
            </div>
        </div>
        
    </>
}
const AboutAccordians = ()=>{
    
    return<>
        <div className="mt-10">
            <CommonAccordian index={1} title={"Technical Skills"}/>
            <CommonAccordian index={2} title={"Education"}/>
            <CommonAccordian index={3} title={"Ceritficates"}/>
            <CommonAccordian index={3} title={"Hobbies"}/>

        </div>
    </>
}
export default AboutAccordians;