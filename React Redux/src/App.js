import React, {Component} from 'react';
import AddNinja from './AddNinja';
import Ninjas from './Ninjas';

class App extends Component {


   state = {

    ninjas : [

      {name : 'sam', age : 24, belt : 'black', id : 1},
      {name : 'sui', age : 14, belt : 'blue', id : 2},
      {name : 'haya', age : 34, belt : 'red', id : 3}

    ]
  }

  addNinja = (ninja) =>{

    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({

      ninjas : ninjas
    })
    
  }

  deleteNinja = (id) =>{
    

    let ninjas = this.state.ninjas.filter(ninja => { return ninja.id !== id})
    this.setState({

      ninjas : ninjas
    })
  }

  componentDidMount(){

    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState){

    console.log('component updated');
    console.log(prevProps);
    console.log(prevState);


  }

    render(){

      return (

      <div className="App">

      <h2>Hello from react</h2>
      <Ninjas deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas} />
      <AddNinja addNinja = {this.addNinja}/>

  </div>


    )}
  
}

export default App;
