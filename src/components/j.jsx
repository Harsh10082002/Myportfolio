import { useState } from "react"
import { Link } from "react-router-dom";

const SkillAccordion = ({ index }) => {
  return (
    <div className="bg-white shadow-md px-8 py-4 rounded-lg">
      {index === 1 ? (
        <div>
          <h2>Languages - C | C++ | JavaScript | SQL(MYSQL)</h2>
          <h2>Front End - HTML | CSS | JS | React | Tailwind </h2>
          <h2>Back End - Node.js | Express.js </h2>
        </div>
      ) : index === 2 ? (
        <div className="p-2">
          <div className="my-2 p-3 flex items-center border-b border-gray-200">
            <img className="h-24 w-24 rounded-full" src="https://sritgroup.net/wp-content/uploads/2020/07/logo.jpg" alt="Logo 1" />
            <div className="px-4">
              <h2 className="font-bold text-gray-900 text-lg">Shri Ram Institute Of Technology, Jabalpur</h2>
              <h4 className="text-gray-600">Bachelor Of Technology (Computer Science And Engineering) - 7.9/10 CGPA.</h4>
            </div>
          </div>

          <div className="my-2 p-3 flex items-center border-b border-gray-200">
            <img className="h-24 w-24 rounded-full" src="https://www.schoolskey.com/uploads/thumb/482_mispamhsssmpjlogo22.png" alt="Logo 2" />
            <div className="px-4">
              <h2 className="font-bold text-gray-900 text-lg">Mispa Mission School, Jabalpur</h2>
              <h4 className="text-gray-600">Class 12th - 67.4%</h4>
            </div>
          </div>
        </div>
      ) : index === 3 ? (
        <div className="p-2 ">
          <div className="my-2 border-b border-gray-200">
            <h2>SQL(MYSQL) - Coursera</h2>
            <Link to="#" className="text-blue-500">Link</Link>
          </div>
          <div className="my-2">
            <h2>Sql Assessment - HackerRank</h2>
            <Link to="#" className="text-blue-500">Link</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const CommonAccordion = ({ title, index }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="mt-4">
      <div className="my-2">
        <div className="flex justify-between items-center px-8 py-4 text-gray-900 bg-gray-100 rounded-t-md cursor-pointer" onClick={toggleAccordion}>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p>
            <i className={`bx ${isAccordionOpen ? "bxs-up-arrow" : "bxs-down-arrow"} text-blue-500 text-2xl`}></i>
          </p>
        </div>
        {isAccordionOpen && <SkillAccordion index={index} />}
      </div>
    </div>
  );
};

const AboutAccordions = () => {
  return (
    <div className="mt-10">
      <CommonAccordion index={1} title={"Technical Skills"} />
      <CommonAccordion index={2} title={"Education"} />
      <CommonAccordion index={3} title={"Certificates"} />
    </div>
  );
};

export default AboutAccordions;

