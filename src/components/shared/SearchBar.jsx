import React, { useState } from 'react';
import { IoAddCircleOutline, IoSearch } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { UserCard } from './index';
// import { useQuery } from '../../context/QueryContext';

const SearchBar = ({ placeholder, data, onSend }) => {
    const [searchWord, setSearchWord] = useState('');

    const handleChange = (e) => {
        const searchResult = e.target.value;
        setSearchWord(searchResult);
    };

    
    const handleSend = async (username) => {
        console.log(username)
        console.log(onSend)
        if (onSend) {
            onSend(username)
            console.log(username)
          }
        }

    const clearInput = () => {
        setSearchWord('');
    };

    // Filter data based on searchWord
    const filteredData = data.filter((value) => {
        return value.username && value.username.toLowerCase().includes(searchWord.toLowerCase());
    });

    return (
        <div className="border">
            <div className="container flex justify-center items-center p-2 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center gap-2 pl-2 pr-2 rounded-full bg-gray-200">
                    <IoSearch size={40} />
                    <input
                        type="text"
                        className="block h-14 w-96 pr-8 font-bold rounded z-0 focus:outline-none bg-gray-200 leading-tight"
                        placeholder={placeholder}
                        value={searchWord}
                        onChange={handleChange}
                    />
                    <div className="searchIcon">
                        {searchWord === "" ? (
                            <IoSearch size={40} className="bg-gray-200" />
                        ) : (
                            <IoCloseCircleOutline size={40} id="clearBtn" onClick={clearInput} />
                        )}
                    </div>
                </div>
            </div>
            {searchWord !== "" && filteredData.length > 0 && (
                <div className="flex-row shadow-lg shadow-black overflow-scroll max-h-80 items-center rounded-lg">
                    {filteredData.slice(0, 15).map((value, key) => (
                        <div key={key} className="flex items-center border-b-2">
                            <UserCard data={value} />
                            <button
                                className="pr-4"
                                onClick={() => handleSend(value.username)}>
                                <IoAddCircleOutline size={40} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;