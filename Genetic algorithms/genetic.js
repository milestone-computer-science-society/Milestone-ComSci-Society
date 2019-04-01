//
// ComSci: Genetic algorithm
//

const readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

let population = []
let populationCount = 10000
let difficulty = size = 10
let generationCount = 1

let mutationRate = 0.2
let crossOverRate = 0.2

console.log("Type s to start")

let max = goal()

rl.on('line', line => {
  switch (line.split(" ")[0]) {
    case "co": crossOverRate = constraint(parseFloat(line.split(" ")[1]), 0, 1)
    break
    case "m": mutationRate = constraint(parseFloat(line.split(" ")[1]), 0, 1)
    break
    case "s":

      for (let i = 0; i < populationCount; i++) {
        population.push(create(size))
      }

      let allbest = population[0]
      let bestfitness = 0

      //while (fitness(population[0]) !== difficulty) {
      while (fitness(population[0]) !== size ** 2) {
        //console.log(fitness(population[0]), population[0])
        doGeneration()
        if (generationCount % 100 === 0) {
          console.log(generationCount)
        }
        replace(Math.floor(populationCount / 2), populationCount - 1)
        generationCount++
        if (bestfitness < fitness(population[0])) {
          bestfitness = fitness(population[0])
          allbest = population[0].slice()
          console.log("-" + generationCount + "-" + fitness(allbest) + "-", allbest)
        }
      }
      //console.log(population)
      console.log(population[0])
      console.log(generationCount)
      break
  }
})



function mutate(a) {
  let result = a.slice()
  for (let i = 0; i < size; i++) {
    if (Math.random() < mutationRate) {
      result[i] = random(1, difficulty)
      //result[i] = constraint(result[i] + random(0, 4) - 2, 1, size)
    }
  }
  return result
}

function crossover(a, b) {
  let x = random(1, size)
  let y = random(1, size)
  let start = Math.min(x, y)
  let end = Math.max(x, y)
  let result = b.slice(0, start - 1).concat(a.slice(start, end), b.slice(end, size))
  return result
}

function doGeneration() {
  for (let i = 0; i < populationCount; i++) {
    if (Math.random() < crossOverRate) {
      let other = random(1, populationCount) - 1
      population[i] = crossover(population[i], population[other])
    }
  }
  for (let i = 0; i < populationCount; i++) {
    population[i] = mutate(population[i])
  }
  sort()
}

function fitness(creature) {
  let result = 0
  for (let i = 0; i < size; i++) {
    result += size - Math.abs(creature[i] - max[i])
    // if (creature[i] === max[i]) {
    //   result++
    // }
  }
  return result
}

function sort() {
  population.sort((a, b) => fitness(b) - fitness(a))
}

function create(difficulty) {
  let creature = []
  for (let i = 0; i < difficulty; i++) {
    creature.push(random(1, difficulty))
  }
  return creature
}

function replace(a, b) {
  population.splice(a, b - a + 1)
  for (let i = 0; i < b - a + 1; i++) {
    population.push(create(size))
  }
}


////////

function goal() {
  let result = []
  for (let i = 0; i < size; i++) {
    result.push(i + 1)
  }
  return result
}

function random(a, b) {
  return Math.floor(a + Math.random() * (b - a + 1))
}

function constraint(a, min, max) {
  return Math.min(Math.max(a, min), max)
}
