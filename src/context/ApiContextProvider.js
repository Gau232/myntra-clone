import React, { createContext } from "react";
import useFetch from "../customHooks/useFetch";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  // API source:  https://classic-world.onrender.com/
  const homePageDataUrl = "https://classic-world.onrender.com/HomePageData";
  const mensDataUrl = "https://classic-world.onrender.com/MensData";
  const womensDataUrl = "https://classic-world.onrender.com/WomensData";
  const childrenDataUrl = "https://classic-world.onrender.com/ChildrensData";

  const homePageData = useFetch(homePageDataUrl).data;
  const mensData = useFetch(mensDataUrl).data;
  const womensData = useFetch(womensDataUrl).data;
  const childrenData = useFetch(childrenDataUrl).data;

  const apiData = [homePageData, mensData, womensData, childrenData];
  // console.log(apiData);
  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
