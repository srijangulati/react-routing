import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BeerInfo () {
  let { id } = useParams();
  const [beerInfo, setBeerInfo] = useState(null);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => res.json())
      .then(([response]) => { setBeerInfo(response)});
  }, [id]);

  const renderBeerInfo = () => {
    return (
      <>
      <img src={beerInfo.image_url} alt="Beer"></img>
      <h1>{beerInfo.name}</h1>
      <p>{beerInfo.description}</p>
      </>
    )
  }

  return (
    <>
    {beerInfo ? renderBeerInfo() : <div>Loading</div>}
    </>
  )
}