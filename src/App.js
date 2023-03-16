import React from "react";
import Searching  from './Mycomponents/Searching';
import Header from "./Mycomponents/Header/Header";
import Body from "./Mycomponents/Body/Body";

import "./App.css";

export default function App(){
  return(
    <div className="App">
    <Searching/>
     <Header />
      <Body /> 
    </div>
  );
}