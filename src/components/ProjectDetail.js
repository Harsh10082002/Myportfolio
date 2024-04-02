import "../styles/project.css";

const ProjectDetail = () => {

    const details = [
        {
            title:"Swiggy Flow",
            description: `
                Currently working on a project similar to Swiggy using React.js and integrated live Swiggy APIs for up-to-date information.
                Designed a unique user interface(UI) to improve user interaction, emphasizing simplicity and attractiveness.
            `,      
            technologies:[
                "Ejs", "Node.JS", "Express.Js", "CSS", "Bootstrap"
            ],
            imgSrc: require("../image/weatherInfo.png")
        },
        {
            title:"Project Orbit",
            description: 
            `
                ProjectOrbit is a comprehensive web application designed specifically for Project Management.
                Implemented user authentication and authorization functionalities including login and signup features with dynamic project management system allowing users to perform CRUD Operations.
            `,
            technologies:[
                "Ejs", "Node.JS", "Express.Js", "CSS", "Bootstrap"
            ],
            imgSrc: require("../image/weatherInfo.png")
            
        },
        {
            title:"Weather Info",
            description: "WeatherInfo gives the weather information of current time and next 5 days any city around the world.",
            technologies:[
                "Ejs", "Node.JS", "Express.Js", "CSS"
            ],
            imgSrc: require("../image/weatherInfo.png")
            
        },
        
    ];
    // days any city around the world.
    return<>
        <div className="flex flex-wrap ">


        {
            details.map(({title, description, technologies, imgSrc})=>{
                return<>
                    <div id="projectDetail" className="border rounded-md shadow-md shadow-gray-200 my-4 mr-10 p-4">
                        <img className="rounded-md border-2 " 
                        src={imgSrc} alt="..." />
                        
                        <div className="py-4">
                            <h5 className="font-semibold text-lg">{title}</h5>
                            <div className="py-4">
                                <p className="text-gray-600">
                                    {description}
                                    <br />
                                    <div className="py-2">
                                        <span>Technologies Used:-</span> {
                                            technologies.map(tech=>{
                                                return <span className="font-bold px-[3px]">
                                                    {tech },
                                                </span>
                                            })
                                        }
                                    </div>
                                    <br />
                                </p>
                                
                                <button className=" border-orange-600 text-white p-2 rounded-md">Github</button>
                            </div>
                        </div>
                    </div>
                </>
            })
        }

            
        </div>
    </>
}
export default ProjectDetail;