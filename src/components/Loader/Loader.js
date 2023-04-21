import "./Loader.css";
import loaderGif1 from "../../assets/images/loader1.gif" 
import loaderGif2 from "../../assets/images/loader2.gif" 

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-img-container">
        <img src={loaderGif1} />
      </div>
    </div>
  );
};

export default Loader;
