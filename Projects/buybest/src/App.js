import Browse from "./components/Browse";
import Delivery from "./components/Delivery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import useFetch from "./Hooks/useFetch";



function App() {

  // const url = 'http://localhost:8000/product'
  const url = 'https://api.npoint.io/5aaca8c07b1babc5f85d';
  const {data} = useFetch(url)
  return (
    <div className="App">
      
      <Navbar/>

      <Home/>

      <Browse data={data}/>

      <Payment/>

      <Delivery/>
    </div>
  );
}

export default App;
