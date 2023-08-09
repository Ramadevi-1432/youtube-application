import { useEffect, useState } from "react";
import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SEARCH_RESULTS_API } from "../utils/constants";
import ButtonList from "./ButtonList";
import SearchResultCard from "./SearchResultCard";
import shortid from "shortid";

const SearchResults = () => {
  const [params] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const query = params.get("search_query");
  useEffect(() => {
    getSearchResults();
    // eslint-disable-next-line
  }, [query]);
  const getSearchResults = async () => {
    const data = await fetch(SEARCH_RESULTS_API + query);
    const json = await data?.json();

    setSearchResult(json?.items);
  };
  if (!searchResult) return null;
  return (
    <div>
      <ButtonList key={shortid.generate()} />
      <h1 className="font-semibold mx-4 mt-4 text-md">
        Here are the search results for:
        <span className="font-bold text-lg"> {query}</span>
      </h1>
      <ul>
        {searchResult.map((item) => (
          <Link to={"/watch?v=" + item?.id?.videoId} key={shortid.generate()}>
            <li>
              <SearchResultCard props={item} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
