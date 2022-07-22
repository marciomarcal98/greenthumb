export function comparateToxicity(toxicityValue) {
  if (toxicityValue) {
    return './assets/icons/toxic.svg'
  }

  return './assets/icons/pet.svg'
}

export function comparateSunQuantity(sunValue) {
  if (sunValue === 'no') {
    return './assets/icons/no-sun.svg'
  }
  
  if (sunValue === 'low') {
    return './assets/icons/low-sun.svg'
  }

  return './assets/icons/high-sun.svg'
}

export function comparateWaterQuantity(waterValue) {
  if (waterValue === 'rarely') {
    return './assets/icons/1-drop.svg'
  } 
  
  if (waterValue === 'daily') {
    return './assets/icons/2-drops.svg'
  }

  return './assets/icons/3-drops.svg'
}