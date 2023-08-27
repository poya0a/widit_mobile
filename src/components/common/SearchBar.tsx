import React, { useState } from 'react';

const SearchBar = () => {
    const [cancelButton, setCancelBotton] = useState(false);

    return (
        <div id="searchBar">
            <div className="search_input">
                <span className="glyphicon glyphicon-search" />
                <input type="text" placeholder="" onFocus={() => setCancelBotton(true)} onBlur={() => setCancelBotton(false)}/>
                <button className={cancelButton ? "active" : ""}>취소</button>
            </div>
        </div>
    );
};

export default SearchBar;