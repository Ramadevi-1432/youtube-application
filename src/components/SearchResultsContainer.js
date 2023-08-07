import React from "react";

const SearchResultsContainer = ({ res }) => {
  return (
    <div>
      <a href={"/results?search_query=" + res}>
        <li className="py-2 px-4 hover:bg-gray-200">🔍 {res}</li>
      </a>
    </div>
  );
};

export default SearchResultsContainer;
