import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Challenge from "./components/organisms/challenge/challenge";
function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="inHome">
              <div className="container containerFirstButton">
                <Link to="/challenge">
                  <button className="btn btn btn-success" type="button">
                    Ir al Reto
                  </button>
                </Link>
              </div>

              <Home />
            </div>
          }
        ></Route>
        <Route
          path="/challenge"
          element={
            <div className="inChallenge">
              <Challenge />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
