import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { countryList } from '../data';

const SearchPage = () => {
    const [searchData, setSearchData] = useState({
        countryCode: '',
        name: '',
        phone: '',
        email: '',
        leadId: ''
    });

    const handleInputChange = (e) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        // Perform search logic here using searchData object
        console.log(searchData);
        // Reset search fields
        setSearchData({
            countryCode: '',
            name: '',
            phone: '',
            email: '',
            leadId: ''
        });
    };

    return (
        <>
        <div className='h-[100%] bg-gray'>
        <div className="mx-auto px-6  bg-gray-200 rounded-lg shadow-md  xl:w-[65vw] pt-4 sm:mt-4">
      <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Search</h2>
            <div className=" grid sm:grid-cols-2 grid-cols-1  gap-10">
                <div>
                    <h4 className="text-green-600 mb-2">Country Code</h4>
                    <div>

                        <select className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600">
                            <option value="">--------Select------</option>
                            {countryList.map((country) => (
                                <option key={country?.name} value={country?.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>
                <div>
                    <h4 className="text-green-600 mb-2">Name</h4>
                    <div className={"relative col-span-1 "}>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <PersonIcon className={'absolute top-2 peer-focus:text-green-600 border-r-2 left-2 '} />
                    </div>
                </div>
                <div>
                    <h4 className="text-green-600 mb-2">Phone Number</h4>
                    <div className={"w-full relative col-span-1 "}>
                        <input
                            type="number"
                            placeholder="Number"
                            required
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />

                        <LocalPhoneIcon className='absolute top-2 left-2 border-r-2  peer-focus:text-green-600 ' />
                    </div>
                </div>
                <div>
                    <h4 className="text-green-600 mb-2">Email</h4>
                    <div className={"w-full relative col-span-1 "}>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <MailIcon className='absolute top-2 left-2 border-r-2  peer-focus:text-green-600 ' />
                    </div>
                </div>
                <div>
                    <h4 className="text-green-600 mb-2">Lead Id</h4>
                    <div className={"w-full relative col-span-1 "}>
                        <input
                            type="text"
                            placeholder="Lead Id"
                            required
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <PersonSearchIcon className='absolute top-2 left-2 border-r-2  peer-focus:text-green-600 ' />
                    </div>
                </div>

                <div>
                    <h4 className="text-green-600 mb-2">Brand Lead Id</h4>
                    <div className={"w-full relative col-span-1 "}>
                        <input
                            type="text"
                            placeholder="Brand Lead ID"
                            required
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <ManageSearchIcon className='absolute top-2 left-2 border-r-2  peer-focus:text-green-600 ' />
                    </div>
                </div>
            </div>
            <div className='py-5 text-center '>
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
                onClick={handleSearch}
            >
                Search
            </button>
            </div>
        </div>
        </div>
    </>
        
    );
};

export default SearchPage;
