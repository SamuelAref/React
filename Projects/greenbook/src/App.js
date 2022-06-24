import Browse from "./components/Browse";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import useFetch from "./Hooks/useFetch";



function App() {

    const {data} = useFetch('https://api.npoint.io/03c546e7ffaa24005d34');


  return (
    <div className="App">

      <Navbar/> 

      <Home/>

      <Browse data={data}/>

      <Donate/>

      <Contact/>
      


    </div>
  );
}

export default App; 
