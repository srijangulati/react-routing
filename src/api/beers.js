export function getBeerList() {
  return fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
}

export function getBeerById(id) {
  return fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then(res => res.json())
}