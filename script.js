import { createCards } from './scripts/cards.js'

let sunlightSelectorValue
let waterSelectorValue
let chewSelectorValue

const search = {
  verification() {
    if (sunlightSelectorValue && waterSelectorValue && chewSelectorValue) {
      const noResults = document.querySelector('.no-results')
      const plants = document.querySelector('.plants')

      noResults.style.display = 'none'
      plants.style.display = 'block'

      this.bringPlantsValues()
    }
  },

  bringPlantsValues() {
    const url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sunlightSelectorValue}&water=${waterSelectorValue}&pets=${chewSelectorValue}`
    

    fetch(url)
      .then(response => {
        if (response.status === 404) {
          const resultsDiv = document.querySelector('.plants-results')
          resultsDiv.innerHTML = `
              <div class="plants-results__not-found">
                <strong>Sorry :( <br/> We couldn't find a plant that fits your requirements.</strong>
              </div>
            `
          throw new Error('Plants nof found')
        }

        return response.json()
      })
      .then(data => createCards(data))

  }
}

const selectors = {
  handleSunlightSelectorChange(sunlightValue) {
    sunlightSelectorValue = sunlightValue
    search.verification()
  },

  handleWaterSelectorChange(waterValue) {
    waterSelectorValue = waterValue
    search.verification()
  },

  handleChewSelectorChange(chewValue) {
    chewSelectorValue = chewValue
    search.verification()
  },
}

const app = {
  init() {
    const sunlightSelector = document.querySelector('#sunlight')
    const waterSelector = document.querySelector('#water')
    const chewSelector = document.querySelector('#chew')

    sunlightSelector.addEventListener('change', () => {
      selectors.handleSunlightSelectorChange(sunlightSelector.value)
    })

    waterSelector.addEventListener('change', () => {
      selectors.handleWaterSelectorChange(waterSelector.value)
    })

    chewSelector.addEventListener('change', () => {
      selectors.handleChewSelectorChange(chewSelector.value)
    })
  }
}

app.init()