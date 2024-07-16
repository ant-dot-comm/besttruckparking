import React, { useState } from 'react';

import { Button } from '../components/Button';

export const HowItWorks = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const questions = [
    {
      title: 'Question 1?',
      content: 'Our answer is ...',
    },
    {
      title: 'Question 2?',
      content: 'Our answer is ...',
    },
    {
      title: 'Question 3?',
      content: 'Our answer is ...',
    },
  ];

  return (
    <>
      <div className="global-container py-64">
        <h2 className="text-[6.4rem] font-bold mb-4">Make money parking trucks on your industrial property.</h2>
      </div>
      <div className="flex max-md:flex-col md:flex-row gap-16 items-center">
        <img
            alt=""
            className="object-cover max-md:h-[20rem] md:h-[40rem] w-full md:w-1/2"
            src={`${
                process.env.PUBLIC_URL + "/images/map.jpg"
            }`}
        />
        <div className="flex max-md:flex-col md:flex-row gap-16 items-center md:justify-between">
            <div className="text-center">
                <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                10,000+
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <div className="text-center">
                <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                20,000+
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <div className="text-center">
                <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                508
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>
      </div>
      
      <div className="global-container my-64">
        {questions.map((question, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full text-left px-4 py-2 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{question.title}</h3>
                <span>{openIndex === index ? '-' : '+'}</span>
              </div>
            </button>
            <div
              className={`px-4 pb-4 transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-screen' : 'max-h-[0] overflow-hidden'
              }`}
            >
              <p>{question.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
