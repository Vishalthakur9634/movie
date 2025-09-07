import React from "react";
import { useGlowalContext } from "./Context";


const Search = () => {
    const{query, setQuery,isError} = useGlowalContext();
    return<>
    <section className="search-section">
     <h2>Search Your Favourite Movies</h2>
     <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
            <input type="text" placeholder="Search Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
        </div>
     </form>
     <div className="card-erroor"></div>
     <p>{isError.show && isError.msg}</p>
    </section>


    </>
        
    
}
export default Search;