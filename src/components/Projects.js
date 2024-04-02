import "../styles/project.css"
import ProjectDetail from "./ProjectDetail"

const Projects = () =>{

    return<>
        <div id="projects" className=" pb-14 ">
            <div className="mx-11 my-3 mb-8">
                <div>
                    <h1 className="text-[#173b6c] text-3xl font-bold pb-3">My Projects</h1>
                    <hr className="border-0 h-1 w-16 bg-[#149ddd] mb-4"></hr>
                </div>
                <div className="my-5 ">
                    <p className="text-gray-700">
                        Hi, My name is Harsh Chouksey I am in final year of B-Tech.
                        I am a motivated individual with a comprehensive understanding of C++ and skills in web development.
                        apart from coding i love to play chess in my spare time.
                    </p>
                </div>

                <div className="">
                    <ProjectDetail />
                </div>
            </div>


        </div>
    </>
}

export default Projects;