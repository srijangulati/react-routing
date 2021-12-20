import { useState, useEffect } from "react";
import { getBeerList } from '../api/beers';

export default function BeerListComponent(params) {
  const [beers, setBeers] = useState([]);
  
  useEffect(() => {
    getBeerList().then(beerList => {
      setBeers(beerList);
    })
  }, []);

  const renderBeers = () => {
    return (
      <ul>
        {beers.map((beer) => <li key={beer.id}>{beer.name}</li>)}
      </ul>
    )
  }
  return (
    <>
      { beers.length ? renderBeers() : <div> Loading the beer List</div>}
    </>
  )
  
}



























// import { useEffect, useState } from "react";

// export default function BeerListComponent() {
//   const [beers, setBeers] = useState([]);

//   useEffect(() => {
//     fetch('https://api.punkapi.com/v2/beers')
//       .then(res => res.json())
//       .then(res => {
//         setBeers(res);
//       }).catch(error => console.log(error))
//   }, [])

//   const renderBeers = () => {
//     return (
//       <ul>
//         { beers.map((beer) => (<li key={beer.id}> {beer.name} </li>))}
//       </ul>
//     )
//   }

//   return(
//     <>
//       {
//         beers.length ? renderBeers() : <div> Loading the beers </div>
//       }
//     </>
//   )

// } 