import react from "react";

const CompanyDashboard = () => {


    return (
        <>
         <>
       <div class="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased
        text-grey-300 selection:bg-blue-600 selection:text-black">
            {/* left section */}
        <div className="flex flex-col relative w-screen">
          <div
            id="menu"
            className="bg-blue-200 min-h-screen z-10 text-grey-300 w-64 fixed left-0 h-screen overflow-y-scroll"
          >
            <div id="logo" className="my-4 px-6">
              <h1 className="text-lg md:text-2xl font-bold text-black">
                Mero<span className="text-green-500">Internship</span>.
              </h1>
            
            </div>
            <div id="profile" className="px-6 py-10">
              <p className="text-lg font-bold leading-6 text-black">Dashboard</p>
              <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                </span>
              </a>
            </div>
            <div id="nav" className="w-full px-6">
              <a
                href="#"
                className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">
                    Recommended Internship
                  </span>
                  
                </div>
              </a>
              <a
                href="#"
                className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg text-grey-300 font-bold leading-5">
                   Applied Internship
                  </span>
                  
                </div>
              </a>
              <a
                href="#"
                className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg text-grey-300 font-bold leading-5">
                   Rejected Internship
                  </span>
            
                </div>
              </a>
             
           
            
            
            </div>
          </div>
        </div>


        {/* right section */}
        <div className="bg-blue-900">
        <div className="flex flex-row realtive w-screen bg-blue-900 border-dotted">
          <div
            id="menu"
            className="bg-black-600 min-h-screen z-10 text-grey-300 w-64 fixed right-0 h-screen overflow-y-scroll"
          >
            <div id="logo" className="my-4 px-6">
        <img src="./public/contact.png"  alt="userlogo"/>
             
    
            </div>
            <div id="profile" className="px-6 py-10">
              <p className="text-lg font-bold text-center leading-6 text-black">Prachanda</p>
              <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                </span>
              </a>
            </div>
            <div id="nav" className="w-full px-6 items-center">
              <a
                href="#"
                className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3"
              >
                
               
                <button className=" shadow w-32 block border-blue-600 border-2 rounded-full focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
  <svg
    className="inline-block h-5 w-5 mr-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387A7.731 7.731 0 007.1 19h5.8a7.68 7.68 0 001.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3s2 .754 2 2.199V8z"
    />
  </svg>
  <span>Edit Profile</span>
</button>

                  
               
              </a>
              <a
                href="#"
                className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
              >
                   <button className=" shadow w-32 block border-blue-600 border-2 rounded-full focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
  <svg
    className="inline-block h-5 w-5 mr-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387A7.731 7.731 0 007.1 19h5.8a7.68 7.68 0 001.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3s2 .754 2 2.199V8z"
    />
  </svg>
  <span>Delete Profile</span>
</button>

              </a>
           
           
            
            
            </div>
          </div>
        </div>
        </div>
        </div>
      </>
        
        </>
    )
}

export default CompanyDashboard;