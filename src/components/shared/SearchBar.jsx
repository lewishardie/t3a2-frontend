import React from 'react'
import { useState } from 'react'
import { IoAddCircleOutline, IoSearch } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { UserCard } from './index'
import { useQuery } from '../../context/QueryContext';


const SearchBar = ({placeholder, data}) => {
    
    const [ filterData, setFilterData ] = useState([]);
    const [ searchWord, setSearchWord ] = useState('')
    const { createFriendRequest } = useQuery()

    const handleChange = (e) => {
        const searchResult = e.target.value;
        setSearchWord(searchResult)
        const newFilter = data.filter((value) => {
            return value.username && value.username.toLowerCase().includes(searchResult.toLowerCase())
        });

        if (searchResult === "") {
            setFilterData([]);
        } else {
            setFilterData(newFilter)
        };
    };

    const handleRequest = async (username) => {
      console.log("here")
      try {
        if (username) {
          await createFriendRequest(username);
          console.log("Friend request sent to:", username);
        }
      } catch (error) {
        console.error("Error sending friend request:", error);
      }
    };

    const clearInput = () => {
        setFilterData([]);
        setSearchWord("")
    };

    return (
        <div className="border">
            <div className="container flex justify-center items-center p-2 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center gap-2 pl-2 pr-2 rounded-full bg-gray-200">
                    <IoSearch size={40}/>
                    <input
                        type="text"
                        className="block h-14 w-96 pr-8 font-bold rounded z-0 focus:outline-none bg-gray-200 leading-tight"
                        placeholder="Search "
                        value={searchWord}
                        onChange={handleChange}
                        />
                    <div className="searchIcon">
                        {filterData && filterData.length === 0 ? (
                            <IoSearch size={40} className="bg-gray-200"/>
                            ) : (
                                <IoCloseCircleOutline size={40} id="clearBtn" onClick={clearInput}/>
                                )}
                    </div>
                </div>
            </div>
            {filterData.length !== 0 && (
                <div className="flex-row shadow-lg shadow-black overflow-scroll max-h-80 items-center rounded-lg">
                    {filterData.slice(0, 15).map((value, key) => (
                        <div key ={key} className="flex items-center border-b-2">
                            <UserCard data={value}/>
                                <button 
                                    className="pr-4" 
                                    onClick={() => handleRequest(value?.username)}>
                                    <IoAddCircleOutline size={40}/>
                                </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBar;