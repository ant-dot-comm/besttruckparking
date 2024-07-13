import React, { useState } from 'react';

import { LocationCard, FilterSection } from '../components';

export const Locations = () => {
  const [filters, setFilters] = useState ({
    vehicleType: [],
    state: [],
    siteAmenities: [],
  });

  const locations = [
    {
      imageUrl: 'https://via.placeholder.com/600x400',
      spacesAvailable: 10,
      rating: 4,
      locationName: 'California Parking',
      hostName: 'John West',
      pricePerDay: 100,
      pricePerWeek: 600,
      pricePerMonth: 2000,
      vehicleType: 'Car',
      state: 'California',
      amenities: ['Restrooms', 'Remote Access'],
    },
    {
      imageUrl: 'https://via.placeholder.com/600x400',
      spacesAvailable: 5,
      rating: 5,
      locationName: 'Texas Parking',
      hostName: 'Jane South',
      pricePerDay: 120,
      pricePerWeek: 700,
      pricePerMonth: 2200,
      vehicleType: 'RV',
      state: 'Texas',
      amenities: ['Remote Access', '24/7 Security'],
    },
    {
      imageUrl: 'https://via.placeholder.com/600x400',
      spacesAvailable: 5,
      rating: 5,
      locationName: 'New York Parking',
      hostName: 'Jane East',
      pricePerDay: 120,
      pricePerWeek: 700,
      pricePerMonth: 2200,
      vehicleType: 'Truck',
      state: 'New York',
      amenities: ['Restrooms', '24/7 Security'],
    },
    {
      imageUrl: 'https://via.placeholder.com/600x400',
      spacesAvailable: 5,
      rating: 5,
      locationName: 'Minnesota Parking',
      hostName: 'Jane North',
      pricePerDay: 120,
      pricePerWeek: 700,
      pricePerMonth: 2200,
      vehicleType: 'Truck',
      state: 'Minnesota',
      amenities: ['Restrooms', '24/7 Security'],
    },
    {
      imageUrl: 'https://via.placeholder.com/600x400',
      spacesAvailable: 999,
      rating: 5,
      locationName: 'Kansas Parking',
      hostName: 'Jane Middle',
      pricePerDay: 120,
      pricePerWeek: 700,
      pricePerMonth: 2200,
      vehicleType: 'RV',
      state: 'Kansas',
      amenities: ['Remote Access', '24/7 Security'],
    },
  ];

  // Filter locations based on the filters applied
  const filteredLocations = locations.filter(location => {
    const vehicleMatch = filters.vehicleType.length === 0 || filters.vehicleType.includes(location.vehicleType);
    const stateMatch = filters.state.length === 0 || filters.state.includes(location.state);
    const amenitiesMatch = filters.siteAmenities.length === 0 || filters.siteAmenities.every(amenity => location.amenities.includes(amenity));
    return vehicleMatch && stateMatch && amenitiesMatch;
  });

  return (
    <div className="locations flex max-md:flex-col-reverse md:flex-row md:h-lvh">
      <div className="locations__grid md:w-1/2 md:overflow-y-scroll p-32">
        <div>
          <h1 className="heading-2 leading-none mb-[0]">Browse Locations</h1>
          <p className="text-sm">Total locations nationwide <span className="text-cyan-50 font-black">1234</span></p>
        </div>
        <FilterSection filters={filters} setFilters={setFilters} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-32">
          {filteredLocations.map((location, index) => (
            <LocationCard
              key={index}
              imageUrl={location.imageUrl}
              shareListing={() => 'handleShareListing'}
              spacesAvailable={location.spacesAvailable}
              rating={location.rating}
              locationName={location.locationName}
              hostName={location.hostName}
              pricePerDay={location.pricePerDay}
              pricePerWeek={location.pricePerWeek}
              pricePerMonth={location.pricePerMonth}
              onBookNow={() => 'handleBookNow'}
            />
          ))}
        </div>
      </div>
      <div className="locations__map max-md:h-[40rem] md:w-1/2">
        <img
          src={`${process.env.PUBLIC_URL + "/images/map.jpg"}`}
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
