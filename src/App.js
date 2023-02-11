import React from "react";
import { v4 as uuidv4 } from "uuid";
import { router } from "./components/header/ConfigNavbar";
import Header from './components/header/Header';
import HeaderDown from './components/header/HeaderDown';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import New from './components/new/New';



function App() {

  const pageSize = 20;


  return (
    <div className="App">
      <Router>
        <div className="sticky-top">
          <Header />
        </div>



        <Routes>
          {
            router.map(path =>
              <Route
                exact
                key={uuidv4()}
                path={path.path}
                element={
                  <New

                    key={path.key}
                    category={path.category}
                    pageSize={pageSize}
                    country={path.country}
                  />
                }
              />
            )
          }
        </Routes>
        <HeaderDown />
      </Router>
    </div>

  );


};
export default App;
