import "./App.css";
import {
  Home,
  Navbar,
  logo,
  Destination,
  Crew,
  Technology,
  close,
  menu,
} from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar logo={logo} close={close} menu={menu} />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/destination">
              <Route index element={<Destination />} />
              {/* <Route path="moon" element={<Moon />} />
              <Route path="mars" element={<Mars />} /> */}
            </Route>

            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
