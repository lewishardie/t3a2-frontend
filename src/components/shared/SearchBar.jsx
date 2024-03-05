import React from 'react'
import { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const SearchBar = ({placeholder, data}) => {
    
    const [ filterData, setFilterData ] = useState([]);
    const [ searchWord, setSearchWord ] = useState('')

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

    const clearInput = () => {
        setFilterData([]);
        setSearchWord("")
    };

    return (
        <div className="">
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
                <div className="flex-row shadow-lg shadow-black overflow-hidden w-1/2  max-h-80 items-center rounded-lg">
                    {filterData.slice(0, 15).map((value, key) => {
                        return (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <Link
                            to = {`/profile/${value.username}`}
                            className="pt-4 pb-4 flex flex-1 justify-center items-center h-50 bg-rose-200 border-bottom border-white"
                            key={key}
                            >
                                <p className="h3">{value.username}</p>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar;

{/* <ul role="list" class="p-6 divide-y divide-slate-200">
  {#each people as person}
    <!-- Remove top/bottom padding when first/last child -->
    <li class="flex py-4 first:pt-0 last:pb-0">
      <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">{person.name}</p>
        <p class="text-sm text-slate-500 truncate">{person.email}</p>
      </div>
    </li>
  {/each}
</ul> */}