import React, { useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import axios from "axios";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a data object with the form values
    const data = {
      fullName,
      email,
      location,
      message,
    };

    // Send the data to a Gmail account using Axios
    axios
      .post("https://api.example.com/send-email", data)
      .then((response) => {
        console.log("Email sent successfully!");
        // Reset form fields
        setFullName("");
        setEmail("");
        setLocation("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="font-poppins my-10 mx-32">
      <div className="text-center">
        <h2 className="text-3xl mt-16 font-semibold tracking-wider">
          Do you have anything to tell us?
        </h2>
        <p className="text-xl mt-6 text-gray-500">
          Feel free to throw us any question and we will be happy to reply asap.
        </p>
      </div>
      <div className="flex mt-10">
        <div className="w-1/2">
          <img src="./ncontact.png" alt="Contact Image" />
        </div>
        <div className="w-1/2 mt-10">
          <h2 className="text-center text-3xl font-medium">Contact Us</h2>

          <div className="mt-10 ml-5 text-slate-600">
            <form onSubmit={handleSubmit}>
              <div className="flex text-left my-3">
                <div className="w-1/2">
                  <span>Full Name</span>
                </div>
                <div className="w-1/2">
                  <span>Contact</span>
                </div>
              </div>

              <div className="flex my-2">
                <div className="w-1/2">
                  <input
                    className="border-[#086CB6] border-b-2 focus:outline-none"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <span className="text-sm">cm.oli@merointernship.com</span>
                </div>
              </div>

              <div className="flex text-left my-4">
                <div className="w-1/2">
                  <span>Email</span>
                </div>
                <div className="w-1/2">
                  <span>Based In</span>
                </div>
              </div>

              <div className="flex my-2">
                <div className="w-1/2">
                  <input
                    className="border-[#086CB6] border-b-2 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <span className="text-sm">Baluwatar, Kathmandu</span>
                </div>
              </div>

              <div className="flex text-left my-4">
                <div className="w-1/2">
                  <span>Message</span>
                </div>
                <div className="w-1/2">
                  <span>Connect with Us: </span>
                </div>
              </div>

              <div className="flex my-2">
                <div className="w-1/2">
                  <input
                    className="border-[#086CB6] border-b-2 focus:outline-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex">
                  <CiFacebook size={26} className="mx-1" />
                  <AiOutlineInstagram size={26} className="mx-1" />
                  <AiOutlineTwitter size={26} className="mx-1" />
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
