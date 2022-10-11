import Navbar from "./Components/Navbar.js";
import New from "./Components/New.js";
import Payment from "./Components/Payment.js";
import TopSlider from "./Components/Top_Slider.js";
import Trending from "./Components/Trending.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSlider />
      <Trending />
      <New />
      <Payment />
    </div>
  );
}

export default App;
