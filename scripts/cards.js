import { comparateToxicity, comparateSunQuantity, comparateWaterQuantity } from './comparations.js'

export function createCards(plantsInfo) {
  const resultsDiv = document.querySelector('.plants-results')
  resultsDiv.innerHTML = ''

  plantsInfo.map((plant, index) => {
    let chewIcon = comparateToxicity(plant.toxicity)
    let sunIcon = comparateSunQuantity(plant.sun)
    let waterIcon = comparateWaterQuantity(plant.water)

    return (
      resultsDiv.innerHTML += `
        <div class="plants-results__card${index === 0 ? ' first' : ''}">
          ${plant.staff_favorite ? '<img class="plants-results__card-favorite" src="./assets/illustrations/staff-favorite.png" alt="">' : ''}
          <div class="plants-results__card-plant">
            <img src="${plant.url}" alt="">
            <div class="plants-results__card-info">
              <strong>${plant.name}</strong>
              <div>
                <strong>$${plant.price}</strong>
                <div class="plants-results__card-info__icons">
                  <img src="${chewIcon}" alt="">
                  <img src="${sunIcon}" alt="">
                  <img src="${waterIcon}" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    )
  })
}