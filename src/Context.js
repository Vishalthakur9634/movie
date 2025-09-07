//Context (Warehouse/store room)
//Provider (Delivery boy)
//Consumer (userContext(you))


import React, { useContext, useEffect, useState } from "react";


export const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1`



const AppContext = React.createContext();
//We need to create a provider function

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const[movie, setMovie] = useState([]);
    const[isError, setIsError] = useState({ show:"false", msg:""});
    const[query, setQuery] = useState("titanic")

    const getMovies = async(url) => {
        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setIsError({
                    show:false,
                    msg:"",
                })
                setMovie(data.Search);


            }else{
                setIsError({
                    show:true,
                    msg:data.Error,
                })
            }
           
        } catch(error){
        console.log(error)
    }
}
      

 useEffect(() => {
    let timerOut = setTimeout(() =>{
        getMovies(`${API_URL}&s=${query}`);
    },500)
    return () => clearTimeout(timerOut);

}, [query]);


return<AppContext.Provider value={{isLoading, isError,movie, query, setQuery}}>
        {children}
    </AppContext.Provider>

}
 const useGlowalContext = () => {
    return useContext(AppContext)
 }
export{AppContext, AppProvider, useGlowalContext};