import "../styles/Main.css"

let Projects=()=>{
    return<>
        <div id="Projects" className="overflow-y-scroll">
            <div className="mx-11 my-3 mb-8">
                <div>
                    <h1 className="text-[#173b6c] text-3xl font-bold pb-3">Projects</h1>
                    <hr className="border-0 h-1 w-16 bg-[#149ddd] mb-4"></hr>
                </div>
                {/* summary  */}
                {/* mx-11 my-8 grid grid-cols-1 lg:grid-cols-2 gap-8 */}
                <div className=" my-5 ">
                    <h2 className="text-lg font-semibold mb-2">Summary</h2>
                    <p className="text-gray-700">
                    During my academic tenure, I delved into various web technologies, honing my skills and crafting several notable projects. These endeavors not only showcased my proficiency but also provided practical application of my learning. Some highlights include
                    </p>
                </div>

            <div id="ProjectBlurContainer"></div>

            </div>
        </div>
    </>
}

export default Projects;