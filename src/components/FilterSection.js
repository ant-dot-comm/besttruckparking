import React, { useState } from "react";

export const FilterSection = ({ filters, setFilters }) => {
    const [vehicleType, setVehicleType] = useState([]);
    const [state, setState] = useState([]);
    const [siteAmenities, setSiteAmenities] = useState([]);

    const handleFilterChange = (filterType, value) => {
        if (filterType === "vehicleType") {
            setVehicleType((prev) =>
                prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
            );
        } else if (filterType === "state") {
            setState((prev) =>
                prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
            );
        } else if (filterType === "siteAmenities") {
            setSiteAmenities((prev) =>
                prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
            );
        }
    };

    const removeFilter = (filterType, value) => {
        handleFilterChange(filterType, value);
    };

    const applyFilters = () => {
        setFilters({
            vehicleType,
            state,
            siteAmenities,
        });
    };

    return (
        <div className="p-16 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
                <h3 className="font-semibold">Vehicle Type</h3>
                {["Car", "RV", "Truck"].map((type) => (
                    <label key={type} className="inline-flex items-center mr-3">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            value={type}
                            checked={vehicleType.includes(type)}
                            onChange={() =>
                                handleFilterChange("vehicleType", type)
                            }
                        />
                        <span className="ml-2">{type}</span>
                    </label>
                ))}
            </div>
            <div className="mb-4">
                <h3 className="font-semibold">State</h3>
                {["California", "Texas", "New York", "Minnesota", "Kansas"].map((stateItem) => (
                    <label
                        key={stateItem}
                        className="inline-flex items-center mr-3"
                    >
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            value={stateItem}
                            checked={state.includes(stateItem)}
                            onChange={() =>
                                handleFilterChange("state", stateItem)
                            }
                        />
                        <span className="ml-2">{stateItem}</span>
                    </label>
                ))}
            </div>
            <div className="mb-4">
                <h3 className="font-semibold">Site Amenities</h3>
                {["Remote Access", "24/7 Security", "Restrooms"].map((amenity) => (
                    <label
                        key={amenity}
                        className="inline-flex items-center mr-3"
                    >
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            value={amenity}
                            checked={siteAmenities.includes(amenity)}
                            onChange={() =>
                                handleFilterChange("siteAmenities", amenity)
                            }
                        />
                        <span className="ml-2">{amenity}</span>
                    </label>
                ))}
            </div>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={applyFilters}
            >
                Apply Filters
            </button>
            <div className="mt-4">
                <h3 className="font-semibold">Applied Filters:</h3>
                <div className="flex flex-wrap">
                    {vehicleType.map((type) => (
                        <span
                            key={type}
                            className="bg-gray-200 rounded-full px-3 py-1 m-1 flex items-center"
                        >
                            {type}
                            <button
                                className="ml-2 text-red-500"
                                onClick={() =>
                                    removeFilter("vehicleType", type)
                                }
                            >
                                &times;
                            </button>
                        </span>
                    ))}
                    {state.map((stateItem) => (
                        <span
                            key={stateItem}
                            className="bg-gray-200 rounded-full px-3 py-1 m-1 flex items-center"
                        >
                            {stateItem}
                            <button
                                className="ml-2 text-red-500"
                                onClick={() => removeFilter("state", stateItem)}
                            >
                                &times;
                            </button>
                        </span>
                    ))}
                    {siteAmenities.map((amenity) => (
                        <span
                            key={amenity}
                            className="bg-gray-200 rounded-full px-3 py-1 m-1 flex items-center"
                        >
                            {amenity}
                            <button
                                className="ml-2 text-red-500"
                                onClick={() =>
                                    removeFilter("siteAmenities", amenity)
                                }
                            >
                                &times;
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
