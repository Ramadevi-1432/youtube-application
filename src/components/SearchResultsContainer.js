import React from "react";
import { GoSearch } from "react-icons/go";

const SearchResultsContainer = ({ name }) => {
  return (
    <div>
      <a href={"/results?search_query=" + name}>
        <li className=" flex items-center py-2 px-4 hover:bg-gray-200">
          <GoSearch className="mr-2" />
          {name}
        </li>
      </a>
    </div>
  );
};

export default SearchResultsContainer;
