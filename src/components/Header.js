import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/navSlice";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
// import { AiOutlineSearch } from "react-icons/ai";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { searchResults } from "../utils/searchSlice";

import SearchResultsContainer from "./SearchResultsContainer";

const Header = () => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // console.log(search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSuggestions(searchCache[search]);
      } else {
        getSearch();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [search]);

  const getSearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      searchResults({
        [search]: json[1],
      })
    );
  };

  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col px-3 py-3 m-1  items-center">
      <div className="col-span-1 flex ">
        <img
          className="h-9 mr-3 cursor-pointer"
          alt="hamburger"
          onClick={() => handleToggle()}
          src="https://cdn1.iconfinder.com/data/icons/ui-kit-2/128/Menu-512.png"
        />
        <a href="/">
          <img
            className="h-9"
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
          />
        </a>
      </div>
      <div className="col-span-10  ml-36 ">
        <div>
          <input
            className="border border-gray-400  w-1/2 rounded-l-full p-2 pl-5"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          {/* <Link to={"/results?search_query=search"}> */}
          <button
            type="search"
            className=" border border-gray-400 hover:bg-gray-300  rounded-r-full px-4 py-2"
          >
            {/* <AiOutlineSearch /> */}
            🔍
          </button>
        </div>

        <div className="absolute bg-white w-[31.5rem] rounded-lg shadow-lg ">
          <ul>
            {showSuggestions &&
              suggestions.map((suggest, index) => (
                <SearchResultsContainer res={suggest} key={index} />
              ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 flex">
        <IoMdNotificationsOutline className="text-3xl mr-6" />
        <div>
          <FaCircleUser className="text-3xl" />
        </div>

        {/* <img
          className="h-8"
          alt="user-icon"
          src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180"
        /> */}
      </div>
    </div>
  );
};

export default Header;
