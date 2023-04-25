import React, { useState, useEffect, createContext } from "react";
import useFetch from "../customHooks/useFetch";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  // API source:  https://classic-world.onrender.com/
  const HOMEPAGE_API_URL = "https://classic-world.onrender.com/HomePageData";
  const MENS_API_URL = "https://classic-world.onrender.com/MensData";
  const WOMENS_API_URL = "https://classic-world.onrender.com/WomensData";
  const CHILDRENS_API_URL = "https://classic-world.onrender.com/ChildrensData";

  const [homePageData, setHomePageData] = useState([]);
  const [mensData, setMensData] = useState([]);
  const [womensData, setWomensData] = useState([]);
  const [childrensData, setChildrensData] = useState([]);
  // const mensData = useFetch(mensDataUrl).data;
  // const womensData = useFetch(womensDataUrl).data;
  // const childrensData = useFetch(childrensDataUrl).data;

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        {// const response1 = await fetch(HOMEPAGE_API_URL);
        // const json1 = await response1.json();
        // setHomePageData(json1);
        // // console.log(homePageData);

        // const response2 = await fetch(MENS_API_URL);
        // const json2 = await response2.json();
        // setMensData(json2);
        // // console.log(mensData);

        // const response3 = await fetch(WOMENS_API_URL);
        // const json3 = await response3.json();
        // setWomensData(json3);
        // // console.log(womensData);
        
        // const response4 = await fetch(CHILDRENS_API_URL);
        // const json4 = await response4.json();
        // setChildrensData(json4);
        // // console.log(childrensData);
        }

        {
          const [api1, api2, api3, api4] = await Promise.all([
            fetch(HOMEPAGE_API_URL),
            fetch(MENS_API_URL),
            fetch(WOMENS_API_URL),
            fetch(CHILDRENS_API_URL),
          ]);
          const [data1, data2, data3, data4] = await Promise.all([
            api1.json(),
            api2.json(),
            api3.json(),
            api4.json(),
          ]);
          setApiData([data1, data2, data3, data4]);
        }

      } catch (error) {
        // console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    // <ApiContext.Provider
    //   value={{ homePageData, mensData, womensData, childrensData }}
    // >
    <ApiContext.Provider
      value={{ apiData }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
