import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Burgercategory from "./Component/Burgercategory";
import CategoryPizza from "./Component/CategoryPizza";
import NavBar from "./Component/NavBar";
import Topbar from "./Component/Topbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar></Topbar>
        <NavBar></NavBar>
        <br></br>
        <div className="a">
          <Link to="CategoryPizza">
            <img
              className="b"
              src="https://www.dominos.co.in//files/items/chi_max.jpg"
              alt=""
            />
          </Link>
          <Link to="Burgercategory">
            <img
              className="b"
              src="https://mcdonaldsblog.in/wp-content/uploads/2018/04/Chicken-American-Cheese-Supreme.jpg"
              alt=""
            />
          </Link>
        </div>
        <Routes>
          <Route
            path="CategoryPizza"
            element={<CategoryPizza></CategoryPizza>}
          ></Route>
          <Route
            path="Burgercategory"
            element={<Burgercategory></Burgercategory>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
