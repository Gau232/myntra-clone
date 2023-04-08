import "./HomePageCards.css";
import React, { useContext, useState, useEffect } from "react";
import { ApiContext } from "../../context/ApiContextProvider";

const HomePageCards = () => {
  const [apiData, SetApiData] = useState({
    HomePageOmgDeals: [
      {
        id: "1",
        image:
          "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg",
      },
      {
        id: "2",
        image:
          "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/73be32ba-7db4-46a8-8cbd-ee11c356de701673520291749-image_jpeg_360595955.jpg",
      },
    ],
    HomePageGrandBrands: [
      {
        id: "H1",
        image:
          "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/c729d245-ddfd-4a87-8f78-e301a4f55a481672925100870-Louis_Philippe_1.jpg",
      },
      {
        id: "H2",
        image:
          "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/61659bc8-ba41-4613-90ab-d565caef8a841672925101203-U.S._Polo_Assn..jpg",
      },
    ],
  });

  // SetApiData = useContext(ApiContext);

// const testData2 = apiData[0];
// console.log(Object.keys(testData2)[0]);

  // SetApiData(testData[0]);
  // console.log(apiData);
  // console.log(useContext(ApiContext));
  
  // apiDataHomePage = useContext(ApiContext)[0];

  // useEffect(() => {
  //   console.log("Hello");
  // }, [apiData]);

  // console.log(Object.keys(apiDataHomePage));

  return (
    <div>
      <h3 className="homePageCard-heading">Omg Deals</h3>
      <div className="HomePageCard-imgContainer">
      {apiData.HomePageOmgDeals.map((e, index) => (
        <img key={index} src={e.image}/>
      ))}
      </div>
      <h3 className="homePageCard-heading">Grand Brands</h3>
      <h3 className="homePageCard-heading">Brands to Bag</h3>
      <h3 className="homePageCard-heading">Budget to Buys</h3>
      <h3 className="homePageCard-heading">Shop By Category</h3>
      <div className="HomePageCard-imgContainer">
        <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg" />
        <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg" />
        <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg" />
        <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg" />
        <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg" />
        <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg" />
      </div>
    </div>
  );
};

export default HomePageCards;
