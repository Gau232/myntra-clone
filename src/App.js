import Styles from "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import SortSection from "./components/SortSection/SortSection";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="midSection">
        <SideBar />
        <div className="contentSection">
          <SortSection />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
