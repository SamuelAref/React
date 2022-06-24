import Chefs from "./components/Chefs";
import Contact from "./components/Contact";
import Delivery from "./components/Delivery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {

  
  return (
    <div className="App">

        <Navbar/>

        <Home/>

        <Chefs/>

        <Delivery/>

        <Contact/>
    </div>
  );
}

export default App;
