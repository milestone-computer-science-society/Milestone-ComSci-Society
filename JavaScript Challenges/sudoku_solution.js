function is_valid(grid) {
  /*
  grid ~ [ [ '9', '6', '7', '1', '3', '2', '8', '4', '5' ],
  [ '8', '3', '1', '4', '6', '5', '7', '9', '2' ],
  [ '5', '4', '2', '7', '8', '9', '6', '3', '1' ],
  [ '3', '2', '8', '5', '7', '6', '4', '1', '9' ],
  [ '4', '9', '5', '3', '1', '8', '2', '6', '7' ],
  [ '7', '1', '6', '9', '2', '4', '3', '5', '8' ],
  [ '2', '8', '3', '6', '9', '1', '5', '7', '4' ],
  [ '6', '5', '9', '8', '4', '7', '1', '2', '3' ],
  [ '1', '7', '4', '2', '5', '3', '9', '8', '6' ] ]
  */
  //rows
  for (let i = 0; i < 9; i++) {
    for (let szam = 1; szam <= 9; szam++) {
      if (grid[i].indexOf(szam + "") !== grid[i].lastIndexOf(szam + "")) {
        return false
      }
    }
  }
  //columns
  for (let i = 0; i < 9; i++) {
    let column = []
    for (let j = 0; j < 9; j++) {
      column.push(grid[j][i])
    }
    for (let szam = 1; szam <= 9; szam++) {
      if (column.indexOf(szam + "") !== column.lastIndexOf(szam + "")) {
        return false
      }
    }
  }
  //cells
  for (let i = 0; i < 9; i++) {
    let cell = []
    for (let j = 0; j < 9; j++) {
      cell.push(grid[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)])
    }
    for (let szam = 1; szam <= 9; szam++) {
      if (cell.indexOf(szam + "") !== cell.lastIndexOf(szam + "")) {
        return false
      }
    }
  }
  return true
  //return true if the grid is a valid sudoku, false otherwise
}

function is_solved(grid) {
  if (!is_valid(grid)) {
    return false
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === ".") {
        return false
      }
    }
  }
  return true
    //return true if the grid is solved (and valid?), false otherwise
}







/***********************************************************

    Below is the testing suite used to verify a solution.

***********************************************************/

function to_grid(grid) {
    let grid_arr = []
    for (let i = 0; i < 9; i++) {
        grid_arr.push([])
        for (let j = 0; j < 9; j++) {
            grid_arr[i].push(grid[9 * i + j])
        }
    }
    return grid_arr
}

let partial = "9671328458314657.25427896313285764.9495318267716924.58283691574659847..3174253986"
let partial_grid = to_grid(partial)

let solved = "967132845831465792542789631328576419495318267716924358283691574659847123174253986"
let solved_grid = to_grid(solved)

let empty = "................................................................................."
let empty_grid = to_grid(empty)

let wrong = "967132855831465792542789631328576419495318267716924358283691544659847123174253986"
let wrong_grid = to_grid(wrong)

console.log(wrong_grid)

function test(test_runs) {
    console.log("Starting tests...")
    let errors = 0
    for (let i = 0; i < test_runs.length; i++) {
        console.log("\nRunning test #" + (i + 1))
        let result = eval(test_runs[i].test)
        if (result == test_runs[i].result) {
            console.log("- Test was successful.")
        } else {
            console.log("- Test returned an incorrect value.")
            console.log(" -> " + test_runs[i].test)
            console.log(" -> should have returned " + test_runs[i].result + ", but was " + result)

            errors++
        }
    }
    console.log("Tests finished.\n")
    console.log(errors + "/" + test_runs.length + " failed.")
    if (errors === 0) {
        console.log("Congratulations!")
    }
}

let tests = [
    {test: "is_valid(solved_grid)", result: true},
    {test: "is_solved(solved_grid)", result: true},
    {test: "is_valid(empty_grid)", result: true},
    {test: "is_solved(empty_grid)", result: false},
    {test: "is_valid(partial_grid)", result: true},
    {test: "is_solved(partial_grid)", result: false},
    {test: "is_valid(wrong_grid)", result: false},
    {test: "is_solved(wrong_grid)", result: false}
]

test(tests)
