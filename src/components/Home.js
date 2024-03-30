import "../styles/Main.css";

const Home = () => {
  return (
    <>
      <div id="Home" className="">
        <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-16 py-8 md:py-16">
          <div className="md:w-1/2 p-4">
            <div className="flex items-center pb-4">
              <hr className="border-0 h-1 w-16 bg-[#149ddd] mx-2"></hr>
              <h1 className="text-[#173b6c] text-3xl font-bold">Hello,</h1>
            </div>
            <h1 className="text-[#01D293] text-3xl font-bold">I'm HARSH CHOUKSEY</h1>
            <p>I am a Full Stack Developer</p>

            <div className="my-8">
              <p className="py-2 font-semibold text-lg text-[#173b6c]">
                Hi there! My name is Harsh Chouksey and I'm an Engineering student of Final year. I love doing coding and building web applications. I am good in C++, and Development.
              </p>
              <button className="mt-4 bg-blue-200 border border-red-500 p-2">My Resume</button>
            </div>
          </div>

          <div className="flex justify-center sm:w-72 lg:w-[400px] ">
            <img className="w-full md:max-w-lg rounded-full" src={require("../image/h3.jpeg")} alt="Harsh Chouksey"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
