import React from 'react';

export const LocationCard = ({ imageUrl, shareListing, spacesAvailable, rating, locationName, hostName, pricePerDay, pricePerWeek, pricePerMonth, onBookNow }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mb-16">
      <div className="relative rounded-t-lg overflow-hidden">
        <img src={imageUrl} alt={locationName} className="w-full h-96 object-cover"/>
        <button
          className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded"
          onClick={shareListing}
        >
          Share Listing
        </button>
      </div>
      <div className="bg-cyan-50 py-4 px-16 flex justify-between items-center text-white">
        <span className="leading-none text-sm">{spacesAvailable} spaces available</span>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-12 h-12 ${i < rating ? 'text-white' : 'text-gray-400'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.91l6.561-.955L10 0l3.439 5.955L20 6.91l-5.244 4.635L15.878 18z"/>
            </svg>
          ))}
        </div>
      </div>
      <div className="">
        <div className="p-16">
          <h3 className="text-lg font-semibold mb-[0]">{locationName}</h3>
          <p className="text-gray-600 text-sm">Hosted by {hostName}</p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <span className="block font-bold">Per Day</span>
              <span className="block">${pricePerDay}</span>
            </div>
            <div>
              <span className="block font-bold">Per Week</span>
              <span className="block">${pricePerWeek}</span>
            </div>
            <div>
              <span className="block font-bold">Per Month</span>
              <span className="block">${pricePerMonth}</span>
            </div>
          </div>
        </div>
        <button
          className="block -mb-16 w-3/4 m-auto bg-green-500 text-white py-8 rounded"
          onClick={onBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
