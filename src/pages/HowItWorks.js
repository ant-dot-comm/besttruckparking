import React, { useState } from 'react';
import ReactPlayer from 'react-player'

import { Button } from '../components/Button';
import { ReactComponent as IllustrationGroup} from '../components/visuals/decor-group-1.svg';
import { ReactComponent as IllustrationGroup3} from '../components/visuals/decor-3.svg';
import { ReactComponent as LinesDecor} from '../components/visuals/lines-decor.svg';

import './HowItWorks.scss';

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
      title: "Is my property right for Best Truck Parking?",
      content: "If you have at least one spot suitable for parking a truck, your location is likely to be approved. Click the Contact The Property Team button below and we'd be happy to evaluate your location.",
    },
    {
      title: "What are some example properties?",
      content: "Trucking Companies, Truck Repair Shops, Tow Truck Companies, Storage Companies, Truck Parking Operators, CDL Schools, Trailer Leasing Companies, Empty Lots, Malls, Tire Shops, Warehouse owners, Commercial property, investors",
    },
    {
      title: "Who sets pricing?",
      content: "Pricing for your parking location is a collaborative effort. We partner with you to ensure the rates appropriately align with your location and the amenities offered. Ultimately, you have the final say in setting the price.",
    },
    {
      title: "How much money will I make?",
      content: "No two properties are identical and there are many variables that determine a property's success. ",
    },
    {
      title: "How does availability work?",
      content: "You have full control over availability. There is no commitment. Simply decide whether you would like to list hourly, daily, weekly,  or monthly truck parking using our easy to use dashboard.",
    },
    {
      title: "Who handles customer support?",
      content: "We do! We have a 24/7 Customer Care team staffed by former truckers!",
    },
    {
      title: "What does it cost me?",
      content: "There's no fee to join. There are no contracts. Best Truck Parking receives a percentage of each booking.",
    },
    {
      title: "How does insurance work?",
      content: "Best Truck Parking may cover up to $25,000 for damages/incidentals incurred at property member locations, subject to terms and conditions. This ensures peace of mind and protection against unexpected incidents.",
    },
  ];

  return (
    <>
      <div className="global-container pt-[20rem] pb-96">
        <div className="pl-[10rem] relative">
          <IllustrationGroup className="absolute left-[0] top-[-7rem] -z-10" />
          <h1 className="text-48 font-bold mb-4 leading-[5.6rem]">
            <span className='relative'><span className='test-highlight text-white'>Make money</span></span> parking trucks on your industrial property.
          </h1>
          <p className="text-32 font-semibold text-neutral-500">Sign up for free, host when you want, and get paid daily.</p>
        </div>
      </div>

      <div className="flex max-md:flex-col md:flex-row items-stretch">
        <img
            alt=""
            className="object-cover max-md:h-[20rem] md:h-[40rem] w-full md:w-1/2"
            src={`${
                process.env.PUBLIC_URL + "/images/map.jpg"
            }`}
        />
        <div className="flex flex-col gap-16 w-full text-center items-center md:items-start md:justify-center bg-neutral-100 relative">
            <div className="w-full z-10">
                <p className="text-40 font-black leading-none mb-1 text-btpGreen-50">
                10,000+
                </p>
                <p>Active truckers looking for parking weekly</p>
            </div>

            <div className="w-full z-10">
                <p className="text-40 font-black leading-none mb-1 text-btpGreen-50">
                20,000+
                </p>
                <p>Bookings so far</p>
            </div>

            <div className="w-full z-10">
                <p className="text-40 font-black leading-none mb-1 text-btpGreen-50 ">
                508
                </p>
                <p>Property Members and growing daily</p>
            </div>
            <IllustrationGroup3 className="absolute left-[0] top-1/2 -translate-y-1/2 h-2/3 max-md:hidden" />
            <IllustrationGroup3 className="absolute right-[0] top-1/2 -translate-y-1/2 h-2/3 max-md:hidden" />
            <LinesDecor className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="global-container my-96 flex gap-32">
        <div>
          <p className="text-24 text-neutral-500">How to find and reserve truck parking</p>
          <ReactPlayer url='https://www.youtube.com/watch?v=6mq4aMyJB6g&t=2s' />
        </div>
        <div>
          <p className="text-24 text-neutral-500">How to add and manage your property</p>
          <ReactPlayer url='https://www.youtube.com/watch?v=SzoAWZ9e28M' />
        </div>
      </div>
      
      <div className="global-container my-64">
        <h2 className="heading-display font-bold mb-16">Frequently asked questions</h2>

        {questions.map((question, index) => (
          <div key={index} className="border-b border-gray-200 pt-16 pb-8">
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
