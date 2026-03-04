import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navber from "./Components/Navber/Navber";

function App() {
  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <div className="gird gird">
        <div>Customer Tickets</div>
        <div> Task Status/Resolved Task</div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
