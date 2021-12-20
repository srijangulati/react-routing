import { useState, useEffect } from "react";
import { getBeerById } from '../api/beers';

export default function BeerInfoComponent({id}) {
  const [beerInfo, setBeerInfo] = useState(null);

  useEffect(() => {
    getBeerById(id).then(([beer]) => {
      setBeerInfo(beer);
    })
  }, [id])

  const renderBeer = () => {
    return (
      <>
        <img src={beerInfo.image_url} alt={beerInfo.name}></img>
        <h1>{beerInfo.name}</h1>
        <h3>{beerInfo.tagline}</h3>
        <p>{beerInfo.description}</p>
      </>
    )
  }

  return (
    <>
      {beerInfo ? renderBeer() : <div> Loading beer info</div>}
    </>
  )
}