import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeerInfo from "./pages/BeerInfo";
import BeerList from "./pages/BeerList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" exact element={<BeerInfo></BeerInfo>}></Route>
        <Route path="/" element={<BeerList></BeerList>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
