import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import Home from "./Home";
import AddBook from "./AddBook";
import DisplayBook from "./DisplayBook";

function App() {
  return (


    <Router>

      <     div className="book-app">

        <NavBar />

        <Switch>

          <Route exact path="/">

            <Home />

          </Route>

          <Route path="/AddBook">

            <AddBook />

          </Route>

          <Route path="/books/:id">

            <DisplayBook />

          </Route>



        </Switch>




      </div>


    </Router>


  )
}

export default App;
