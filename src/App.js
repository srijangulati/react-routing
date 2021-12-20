// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BeerInfo from "./pages/BeerInfo";
// import BeerList from "./pages/BeerList";

// import BeerInfoComponent from "./components/BeerInfoComponent";
import JokeComponent from "./components/JokeComponent";
// import BeerListComponent from "./components/BeerListComponent";

function App() {
  return (
    <>
      {/* <h1> Lets make some routes</h1> */}
      {/* <BeerListComponent></BeerListComponent> */}
      {/* <BeerInfoComponent id={20}></BeerInfoComponent> */}
      <JokeComponent></JokeComponent>
    </>
  )
}

export default App;























// const routes = [
//   {path: '/:id', element: <BeerInfo></BeerInfo>, exact: true, id: 'beerInfo'},
//   {path: '/', element: <BeerList></BeerList>, exact: false, id: 'beerList'}
// ]

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {routes.map((route) => <Route {...route}></Route>)}
//       </Routes>
//     </BrowserRouter>
//   );
// }
