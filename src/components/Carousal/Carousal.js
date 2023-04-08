import "./Carousal.css";

const Carousal = () => {
  const carousalImages = document.getElementsByClassName("carousal-images");
  console.log(carousalImages);
  let counter = 0;

  function myfunction() {
    setInterval(() => {
      counter += 100;
      //   console.log(carousalImages);
      //   carousalImages.forEach((element) => {
      //     element.style.width = `${counter}%)`;
      //   });
      if (counter === 900) {
        counter = 0;
      }
    }, 1000);
  }

  //   myfunction();

  return (
    <div className="carousal-container">
      <div className="carousal-imageContainer">
        <img
          id="carousal-img1"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/3648caef-8de2-46ec-a437-8fbf72e6574c1680507456408-Sale-ends-tomorrow--1-.jpg"
        />
        <img
          id="carousal-img2"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif"
        />
        <img
          id="carousal-img3"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg"
        />
        <img
          id="carousal-img4"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg"
        />
        <img
          id="carousal-img5"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
        />
        <img
          id="carousal-img6"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"
        />
        <img
          id="carousal-img7"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
        />
        <img
          id="carousal-img8"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
        />
        <img
          id="carousal-img9"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
        />
        <img
          id="carousal-img10"
          className="carousal-images"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg"
        />
      </div>
      <div className="carousal-buttons">
        <a href="#carousal-img1" />
        <a href="#carousal-img2" />
        <a href="#carousal-img3" />
        <a href="#carousal-img4" />
        <a href="#carousal-img5" />
        <a href="#carousal-img6" />
        <a href="#carousal-img7" />
        <a href="#carousal-img8" />
        <a href="#carousal-img9" />
        <a href="#carousal-img10" />
      </div>
    </div>
  );
};

export default Carousal;
