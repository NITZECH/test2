import React, { useState } from 'react';
import axios from 'axios';

const Box = ({ text, onCheckboxChange, isChecked }) => {
  const handleCheckboxChange = () => {
    onCheckboxChange(text, !isChecked);
  };

  return (
    <div className="inline-block w-1/5 p-2 text-center">
      <label className={`relative inline-block w-full h-full bg-[#2A0C4E] rounded-lg shadow-lg ${isChecked ? 'border-4 border-purple-500' : ''}`}>
        <input
          type="checkbox"
          className="absolute top-2 right-2 opacity-0"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="mt-4 mb-3 text-lg text-white">{text}</div>
      </label>
    </div>
  );
};

const Skill = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const boxes = [
    { text: 'Frontend' },
    { text: 'Backend' },
    { text: 'Design' },
    { text: 'Barista' },
    { text: 'Cashier' },
    { text: 'SEO' },
    { text: 'Designer' },
    { text: 'Security' },
    { text: 'Driver' },
    { text: 'Waiter' },

  ];

  const visibleBoxes = showMore ? boxes : boxes.slice(0, 5);

  const handleCheckboxChange = (text, checked) => {
    if (checked) {
      setSelectedValues((prevSelectedValues) => [...prevSelectedValues, text]);
    } else {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((value) => value !== text)
      );
    }
  };

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const handleSubmit = () => {
    setSubmitting(true);
    // Use Axios to send the selectedValues array to the server
    axios
      .post('/api/submitSkills', { skills: selectedValues })
      .then((response) => {
        console.log(response.data);
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  return (
    <div className="font-poppins">
      <div className="text-center">
        <h2 className="text-5xl mt-16 font-semibold tracking-wider">
          What are your skills?
        </h2>
        <p className="text-xl mt-6 text-gray-500">
          What skills do you think you have for an internship?
        </p>
      </div>
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap">
          {visibleBoxes.map((box, index) => {
            const isChecked = selectedValues.includes(box.text);
            return (
              <Box
                key={index}
                text={box.text}
                onCheckboxChange={handleCheckboxChange}
                isChecked={isChecked}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="mt-4 p-3 rounded-lg bg-[#1a1463] text-white  mr-2"
            onClick={handleClick}
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
          <button
            className="mt-4 p-3 bg-[#31bacd] text-white rounded-lg"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        <div className="mt-4">
          Selected Values: {selectedValues.join(', ')}
        </div>
      </div>

      <div className="flex justify-center mt-16 ">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-gray-100">
          

          <div className="mt-4 mb-6 flex">
            <div className="w-2/6 flex justify-center">
              <img src="./search.png" />
            </div>

            <div className="text-sm text-neutral-600 w-4/6 ml-2">
              <div className="text-3xl  text-center font-bold text-black">
                Internship
              </div>
              <div className="mt-3">
                Aliquam a tristique sapien, nec bibendum urna. Maecenas
                convallis dignissim turpis, non suscipit mauris interdum at.
                Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis
                leo, ut mollis ipsum consectetur quis. Etiam faucibus est risus,
                ac condimentum mauris consequat nec. Curabitur eget feugiat
                massa. Aliquam a tristique sapien, nec bibendum urna. Maecenas
                convallis dignissim turpis, non suscipit mauris interdum at.
                Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis
                leo, ut mollis ipsum consectetur quis. Etiam faucibus est risus,
                ac condimentum mauris consequat nec. Curabitur eget feugiat
                massa. Aliquam a tristique sapien, nec bibendum urna. Maecenas
                convallis dignissim turpis, non suscipit mauris interdum at.
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Skill;