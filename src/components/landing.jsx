import React,{useState} from "react";
import { CiCircleCheck } from "react-icons/ci";
import axios from "axios";
import Navbar from "./Navbar";
const Landing = () => {

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    // Make the API request using Axios
    axios
      .get(`/api/search?query=${searchInput}`)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
   
      <div className="flex flex-col items-center justify-center mt-32">
        <section className="flex flex-wrap items-center mx-3 font-sans px-4 w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
          <div className="px-3 w-full lg:w-3/5">
            <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
              <p className="mb-4 text-base font-semibold text-left lg:text-lg">
                Find your preferred Internship in a single platform.
              </p>
              <h2 className="mb-4 text-xl font-bold text-left lg:text-2xl">
                Finding Quality Internships Have Never Been Easier
              </h2>

              <p className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                Choose from hundreds of companies to find the best internship for your skills and get a chance to intern in a professional environment.
              </p>
            </div>

            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-blue-600 
                focus:outline-none"
                placeholder="Register using email address" value={searchInput}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" onClick={handleSearch}
              >
                Register
              </button>
            </div>

            <div className="mt-5 flex ">
              <div className="flex mx-1">
                <CiCircleCheck size={21} />
                <span>Free Register</span>
              </div>
              <div className="flex mx-1">
                <CiCircleCheck size={21} />
                <span>Great Service</span>
              </div>
              <div className="flex mx-1">
                <CiCircleCheck size={21} />
                <span>100s of Opportunities</span>
              </div>
            </div>
          </div>

          {/* <!-- Column-2 --> */}
          <div className="px-3 mb-12 w-full lg:mb-0 lg:w-2/5">
            {/* <!-- Illustrations Container --> */}
            <div className="flex justify-center items-center">
              <img src="./landing.png" alt="" className="" />
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <p className="font-semibold">
            Over 100 Companies share their internships through MeroInternship
          </p>
        </div>
        <div className="flex mt-8">
          <img src="./Group.png" className="mx-4 w-32 h-6" alt="Logo" />
          <img src="./Group-1.png" className="mx-4 w-32 h-6" alt="Logo" />
          <img src="./Group-2.png" className="mx-4 w-32 h-6" alt="Logo" />
          <img src="./Group-3.png" className="mx-4 w-32 h-6" alt="Logo" />
          <img src="./Group-4.png" className="mx-4 w-32 h-6" alt="Logo" />
          <img src="./Group-5.png" className="mx-4 w-32 h-6" alt="Logo" />
          <img src="./Group-6.png" className="mx-4 w-32 h-6" alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Landing;
