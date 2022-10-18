import Main from "./Components/Main";
import SearchList from "./Components/SearchList";
import React from "react";
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='items/:searchQuery' element={ <SearchList /> }/>
      </Routes>
    </HashRouter>
  )
};

export default App;