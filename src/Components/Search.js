import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (event) => {
        setSearchValue(event.target.value);
    }

    const callSearchFunction = (event) => {
        event.preventDefault(event);
        props.search(searchValue);
    }

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="Search" />
        </form>
    );
}

export default Search;