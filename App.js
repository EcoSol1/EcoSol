import React from "react";
import {Header} from "./componentes/header";
import 'boxicons';
import {BrowserRouter as Router}from "react-router-dom";
import {Pages} from "./componentes/Pages";
import { DataProvider } from "./context/Dataprovider";

function App() {
  return (
    <DataProvider>
    
    <div className="App">
      <Router>
        <Header/>
        <Pages/>
      </Router>
    </div>
    </DataProvider>
);
}

export default App;
