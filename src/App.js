
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Logo from './Component/Logo'
import Cards from './Component/Cards'
import Table from './Component/Table'
import Sidebar from './Component/Sidebar'



class App extends Component {
render() { 
  return ( 
    <div>
          <Logo/>
        <div className="container">
        <Cards/>
        <div className="row">
        <Table/>
        <Sidebar/>
       </div>
       </div>

    </div>  
   );

}}


export default App;
