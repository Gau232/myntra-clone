import Carousal2 from "../../Carousal/Carousal2";
import HomePageCards from "../../HomePageCards/HomePageCards";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import "./HomePage.css";
import Loader from "../../Loader/Loader";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";

const HomePage = () => {
  return (
    <>
      <NavBar />
      {/* <Signup/> */}
      {/* <LoginPage /> */}
      <Carousal2 />
      <HomePageCards />
      <Footer />
    </>
  );
};

export default HomePage;