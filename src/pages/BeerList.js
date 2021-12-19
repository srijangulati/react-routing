import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

export default function BeerList() {

  const [beers, setBeers] = useState([]);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/`)
      .then((res) => res.json())
      .then((response) => { setBeers(response)});
  }, [])

  const renderBeers = () => {
    return (
      beers.map((beer) => (
        <li key={beer.id}> <Link to={`/${beer.id}`}>{beer.name}</Link></li>
      ))
    )
  }

  return (
    <ul>
      {beers.length ? renderBeers() : <div> Loading beers </div>}
    </ul>
  )
}