import React from "react";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action_URL, Originals_URL } from "./Url";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={Originals_URL}/>
      <RowPost title='Actions' isSmall  url={action_URL}/>
    </div>
  );
}

export default App;
